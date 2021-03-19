import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<any>;
  isAuth: boolean;

  constructor(private productService: ProductService, private authService: AuthService, private router: Router) {
    this.products = this.productService.products;
  }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuth;
  }

  onSwitchAllProductsStatus(newStatus: string) {
    this.productService.switchAllProductsStatus(newStatus);
  }

  onSignOut() {
    this.authService.signOut();
    this.router.navigate(['auth']);
  }

}
