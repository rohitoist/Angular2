import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '../../node_modules/@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([ {path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }]),
  ],

  declarations: [
    
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
