import { Component,OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product-list.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  
  styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle:string ="Acme product" ;
  imageWidth : number=40;
  imageMargin : number = 2;
  showImage :boolean = true;
  _listFilter : string ;
  errorMessage :string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts =this.listFilter?this.performFilter(value):this.products;
  }
  filteredProducts: IProduct[];
  products :IProduct[];

  toggleImage() : void{
    this.showImage =!this.showImage;
  }
  ngOnInit():void{
    console.log("I am ng on init");
    this.productService.getProducts().subscribe(
      products =>{
        this.products =products,
        this.filteredProducts = this.products;
      },
      error=>this.errorMessage=<any>error   
     );
     
  }
  //using product service which is injected in root module which is app module 
  constructor(private productService : ProductService){
    
  }
  performFilter(filterValue:string):IProduct[]{
    filterValue= filterValue.toLocaleLowerCase();

    return this.products.filter((product : IProduct)=>
    product.productName.toLocaleLowerCase().indexOf(filterValue)!==-1);
  }
  displayRating(message : string):void{
    this.pageTitle ="Acme Product Rating clicked"+ message;
  }
}
