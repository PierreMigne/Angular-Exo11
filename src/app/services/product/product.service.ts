import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<any>;

  constructor() {
    this.products = [
      {
        id: 0,
        name: 'Fraise',
        status: 'en stock'
      },
      {
        id: 1,
        name: 'Poire',
        status: 'en stock'
      },
      {
        id: 2,
        name: 'Banane',
        status: 'pas en stock'
      },
      {
        id: 3,
        name: 'Orange',
        status: 'en stock'
      },
      {
        id: 4,
        name: 'Pomme',
        status: 'pas en stock'
      },
    ];
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
}
