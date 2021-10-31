import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrudUserService {
  //base api url
  public url = 'http://localhost:4200';
  constructor(private http: HttpClient) {}

  createUser(data: FormData) {
    return this.http.post(this.url + '/api/v1/admin/users', data);
  }

  updateUser(data: FormData) {
    return this.http.post(this.url + '/admin/users/:user_id/edit', data);
  }

  deleteUser(id: string) {
    return this.http.get(this.url + '/api/v1/admin/users/:id' + id);
  }

  getUsers(id: string) {
    return this.http.get(this.url + '/api/v1/admin/users/:' + id);
  }
}
