import { Component, OnInit } from '@angular/core';
import { CrudUserService } from 'src/app/services/crud-user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent implements OnInit {
  public users: any = [];
  public id!: string;

  constructor(private userService: CrudUserService) {}

  ngOnInit() {
    this.deleteUser(this.id);
  }

  deleteUser(pID: string) {
    this.userService.deleteUser(pID).subscribe();
  }
}
