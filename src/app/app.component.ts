import { Component } from '@angular/core';
import { ProductService } from './services/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Array<any>;

  constructor(private productService: ProductService) {
    this.products = this.productService.products;
  }

  onSwitchAllProductsStatus(newStatus: string) {
    this.productService.switchAllProductsStatus(newStatus);
  }
}
