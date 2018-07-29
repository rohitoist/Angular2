import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { ProductService } from './product-list.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
 templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle:string;
  errorMessage = '';
  product:IProduct;
  constructor(private route:ActivatedRoute,private router:Router, private productService:ProductService) { }
getProduct(id:number){

 this.productService.getProduct(id).subscribe(
  product => this.product = product,
  error => this.errorMessage = <any>error);
 }

 

  ngOnInit() {
    
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle ='Product id'+ id;
    if(id){
      this.getProduct(id);
    }
   

      
    
    
  }
  onBack() :void{
    this.router.navigate(['/products']);
  }
}
