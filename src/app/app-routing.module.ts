import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { AuthComponent } from './view/auth/auth.component';
import { ErrorComponent } from './view/error/error.component';
import { ProductComponent } from './view/product/product.component';
import { ProductsComponent } from './view/products/products.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuardService], component: ProductsComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'products', canActivate: [AuthGuardService], component: ProductsComponent },
  { path: 'product/:id', canActivate: [AuthGuardService], component: ProductComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
