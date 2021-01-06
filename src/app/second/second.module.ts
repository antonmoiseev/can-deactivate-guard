import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SecondComponent } from './second.component';
import { SecondGuard } from './second.guard';


@NgModule({
  declarations: [SecondComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: SecondComponent,
      canActivate: [SecondGuard]
    }, {
      path: 'third',
      loadChildren: () => import('./third/third.module').then(m => m.ThirdModule)
    }])
  ]
})
export class SecondModule { }
