import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot ([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',canActivate:[ProductDetailGuard], component: ProductDetailComponent },
    ] ),
  ],
  declarations: [
 ],
  exports:[RouterModule]
})
export class ProductRoutingModule { }
