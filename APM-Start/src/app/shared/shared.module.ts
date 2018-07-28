import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    StarComponent,
    
    
  ],
  exports: [
     StarComponent,
     FormsModule,
     CommonModule 
  ]
})
export class SharedModule { }
