import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent implements OnInit {
  public products: any = [];
  public id!: string;

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.deleteProduct(this.id);
  }

  deleteProduct(pID: string) {
    this.crudService.deleteProduct(pID).subscribe();
  }
}
