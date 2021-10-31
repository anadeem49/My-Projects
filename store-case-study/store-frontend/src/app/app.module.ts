import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
//import { UserProfileComponent } from './components/user-profile/user-profile.component';
//import { HomePageComponent } from './components/home-page/home-page.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    //UserProfileComponent,
    //HomePageComponent,
    AddNewUserComponent,
    DeleteUserComponent,
    EditUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
