import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudUserService } from 'src/app/services/crud-user.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css'],
})
export class AddNewUserComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: CrudUserService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      interests: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  ngOnInit() {}

  saveUser(values: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    interests: string;
    address: string;
  }) {
    const productData = new FormData();
    productData.append('firstName', values.firstName);
    productData.append('lastName', values.lastName);
    productData.append('email', values.email);
    productData.append('phone', values.phone);
    productData.append('interest', values.interests);
    productData.append('address', values.address);
    this.userService.createUser(productData).subscribe((_result: any) => {
      this.router.navigate(['']);
    });
  }
}
