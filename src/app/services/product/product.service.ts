import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<Product>;

  constructor() {
    this.products = [];
    this.products.push(
      new Product('Fraise', 'en stock'),
      new Product('Poire', 'en stock'),
      new Product('Banane', 'pas en stock'),
      new Product('Orange', 'en stock'),
      new Product('Pomme', 'pas en stock'),
    );
  }

  switchAllProductsStatus(newStatus: string) {
    for (const product of this.products) {
      product.status = newStatus;
    }
  }

  switchProductStatus(newStatus: string, productId: number) {
    for (const product of this.products) {
      if (product.id === productId) {
        product.status = newStatus;
        break;
      }
    }
  }

  getElementById(productId: number) {
    for (const product of this.products) {
      if (product.id === productId) {
        return product;
      }
    }
    return null;
  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }

  editProduct(editedProduct: Product) {
    for (let i = 0; i < this.products.length - 1; i++) {
      if (this.products[i].id === editedProduct.id) {
        this.products[i] = editedProduct;
        break;
      }
    }
  }
}
