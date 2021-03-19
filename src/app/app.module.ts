import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableRowsComponent } from './components/table-rows/table-rows.component';
import { ProductService } from './services/product/product.service';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { ErrorComponent } from './view/error/error.component';
import { ProductsComponent } from './view/products/products.component';
import { ProductComponent } from './view/product/product.component';
import { AuthComponent } from './view/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    TableRowsComponent,
    ErrorComponent,
    ProductsComponent,
    ProductComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
