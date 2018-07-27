import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ConverttToSpacesPipe } from './shared/Convert-To-Spaces.Pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './product/product-list.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ProductDetailComponent } from './product/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './product/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConverttToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot ([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',canActivate:[ProductDetailGuard], component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }

    ] )
  ],
  bootstrap: [AppComponent],
  providers:[ProductService]
})
export class AppModule { }
