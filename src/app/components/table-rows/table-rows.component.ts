import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: '[app-table-rows]',
  templateUrl: './table-rows.component.html',
  styleUrls: ['./table-rows.component.css']
})
export class TableRowsComponent implements OnInit, OnChanges {

  @Input() id: number;
  @Input() name: string;
  @Input() status: string;

  nextStatus: string;
  action: string;

  constructor(private productService: ProductService) { }

  ngOnChanges(): void {
    this.nextStatus = this.status === 'en stock' ? 'pas en stock' : 'en stock';
    this.action = this.status === 'en stock' ? 'Retirer du stock' : 'Ajouter au stock';
  }

  ngOnInit(): void {
  }

  onSwitchProductStatus(newStatus: string, productId: number) {
    this.productService.switchProductStatus(newStatus, productId);
  }

}
