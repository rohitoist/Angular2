import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConverttToSpacesPipe } from '../shared/Convert-To-Spaces.Pipe';
import { ProductRoutingModule } from './/product-routing.module';

@NgModule({
  imports: [
   SharedModule,
   ProductRoutingModule
  ],

  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConverttToSpacesPipe
  ]
})
export class ProductModule { }
