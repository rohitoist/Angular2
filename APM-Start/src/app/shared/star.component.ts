import { Component, Input, OnChanges, Output,EventEmitter } from "../../../node_modules/@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']


})
export class  StarComponent implements OnChanges{
@Input() rating:number;
starWidth :number;
@Output() ratingClicked = new EventEmitter();
ngOnChanges():void{
this.starWidth = this.rating * 75/5;
} 
onClick(): void {
console.log( this.rating);
this.ratingClicked.emit(this.rating);
}
}