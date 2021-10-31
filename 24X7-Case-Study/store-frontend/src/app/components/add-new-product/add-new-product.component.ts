import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class AddNewProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private crudService: CrudService,
    private router: Router
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
  }

  ngOnInit() {}

  saveProduct(values: {
    name: string | Blob;
    desc: string | Blob;
    price: string | Blob;
  }) {
    const productData = new FormData();
    productData.append('name', values.name);
    productData.append('description', values.desc);
    productData.append('price', values.price);
    this.crudService.createProduct(productData).subscribe((_result: any) => {
      this.router.navigate(['']);
    });
  }
}
