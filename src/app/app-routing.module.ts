import { ProfilComponent } from './view/profil/profil.component';
import { EditProductComponent } from './view/edit-product/edit-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { AuthComponent } from './view/auth/auth.component';
import { ErrorComponent } from './view/error/error.component';
import { NewProductComponent } from './view/new-product/new-product.component';
import { ProductComponent } from './view/product/product.component';
import { ProductsComponent } from './view/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/new', canActivate: [AuthGuardService], component: NewProductComponent },
  { path: 'product/edit/:id', canActivate: [AuthGuardService], component: EditProductComponent },
  { path: 'product/:id', canActivate: [AuthGuardService], component: ProductComponent },
  { path: 'profil/:id', canActivate: [AuthGuardService], component: ProfilComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
