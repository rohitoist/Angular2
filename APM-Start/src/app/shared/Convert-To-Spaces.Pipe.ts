import { PipeTransform, Pipe } from "../../../node_modules/@angular/core";

@Pipe({
    name : 'convertToSpaces'

})


export class ConverttToSpacesPipe implements PipeTransform{

    transform(value:String,character:string):string {
        return value.replace(character," ");
    }
    
}