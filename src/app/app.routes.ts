import { Routes } from '@angular/router';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { DragonBallPageComponent } from './dbz/pages/dragon-ball-page/dragon-ball-page.component';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
  // {path:'',component:CounterAppComponent},
  // {path:'hero',component:HeroPageComponent},
  // {path:'dbz',component:DragonBallPageComponent},
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./gifs-app/pages/dashboard/dashboard.component'),
    children: [
      {
        path: 'trending',
        loadComponent: () =>
          import('./gifs-app/pages/trending-page/trending-page.component'),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./gifs-app/pages/search-page/search-page.component'),
      },
      {
        path: 'not-found',
        loadComponent: () =>
          import('./gifs-app/pages/not-found/not-found.component'),
      },
      {
         path:'**',
         redirectTo:'trending'
      }
    ],
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
