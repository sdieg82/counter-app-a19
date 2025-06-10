import { Routes } from '@angular/router';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { DragonBallPageComponent } from './dbz/pages/dragon-ball-page/dragon-ball-page.component';
import { provideHttpClient } from '@angular/common/http';


export const routes: Routes = [
   {path:'',component:CounterAppComponent},
   {path:'hero',component:HeroPageComponent},
   {path:'dbz',component:DragonBallPageComponent},
   {path:'**',redirectTo:''}
];
