import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudUserService } from 'src/app/services/crud-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  productForm: FormGroup;
  productID: any;
  productData: any;
  constructor(
    private fb: FormBuilder,
    private userService: CrudUserService,
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
    this.loadUserDetails(this.productID);
  }

  loadUserDetails(productID: any) {
    this.userService.getUsers(productID).subscribe((product: any) => {
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

  updateUserData(values: {
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

    this.userService.updateUser(productData).subscribe((result: any) => {
      this.router.navigate(['']);
    });
  }
}