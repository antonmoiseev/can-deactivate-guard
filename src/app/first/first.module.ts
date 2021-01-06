import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { RouterModule } from '@angular/router';
import { FirstGuard } from './first.guard';



@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: FirstComponent,
      canDeactivate: [FirstGuard]
    }])
  ]
})
export class FirstModule { }
