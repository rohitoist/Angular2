import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ConverttToSpacesPipe } from './shared/Convert-To-Spaces.Pipe';
import { StarComponent } from './shared/star.component';
import { ProviderAst } from '../../node_modules/@angular/compiler';
import { ProductService } from './product/product-list.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConverttToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers:[ProductService]
})
export class AppModule { }
