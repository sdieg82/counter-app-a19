import { Routes } from '@angular/router';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { HeroPageComponent } from './hero-page/hero-page.component';

export const routes: Routes = [
   {
    path:'',
    component:CounterAppComponent
   },
   {
      path:'hero',
      component:HeroPageComponent
   }
];
