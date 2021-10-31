import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup;
  productID: any;
  productData: any;
  constructor(
    private fb: FormBuilder,
    private crudService: CrudService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      desc: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(1000),
        ]),
      ],
      price: ['', Validators.compose([Validators.required])],
    });
    //code
  }

  ngOnInit() {
    this.productID = this.actRoute.snapshot.params['id'];
    this.loadProductDetails(this.productID);
  }

  loadProductDetails(productID: any) {
    this.crudService.getProducts(productID).subscribe((product: any) => {
      this.productData = product;
      this.productForm.controls['name'].setValue(this.productData['p_name']);
      this.productForm.controls['desc'].setValue(
        this.productData['p_description']
      );
      this.productForm.controls['price'].setValue(this.productData['p_price']);
      this.productForm.controls['department'].setValue(
        this.productData['p_department']
      );
      this.productForm.controls['image'].setValue(this.productData['image']);
    });
  }

  updateProductData(values: {
    name: string;
    desc: string;
    price: string;
    department: string;
    imageUrl: string;
  }) {
    const productData = new FormData();
    productData.append('id', this.productID);
    productData.append('name', values.name);
    productData.append('department', values.department);
    productData.append('description', values.desc);
    productData.append('price', values.price);
    productData.append('image', values.imageUrl);

    this.crudService.updateProduct(productData).subscribe((result: any) => {
      this.router.navigate(['']);
    });
  }
}
