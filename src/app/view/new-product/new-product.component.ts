import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.product = new Product('', 'en stock');
  }

  onSubmitNewProduct() {
    this.productService.addProduct(this.product);
    this.router.navigate(['products']);
  }

}
