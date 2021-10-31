import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  //base api url
  public url = 'http://localhost:4200';
  constructor(private http: HttpClient) {}

  createProduct(data: FormData) {
    return this.http.post(this.url + '/api/v1/admin/products', data);
  }

  updateProduct(data: FormData) {
    return this.http.post(this.url + '/admin/products/:product_id/edit', data);
  }

  deleteProduct(id: string) {
    return this.http.get(this.url + '/api/v1/admin/products/:id' + id);
  }

  getProducts(id: string) {
    return this.http.get(this.url + '/api/v1/admin/products/:' + id);
  }
}
