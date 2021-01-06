import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'first',
        loadChildren: () => import('./first/first.module').then(m => m.FirstModule)
      },
      {
        path: 'second',
        loadChildren: () => import('./second/second.module').then(m => m.SecondModule)
      }
    ], {urlUpdateStrategy: 'eager'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
