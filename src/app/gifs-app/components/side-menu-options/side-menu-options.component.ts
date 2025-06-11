import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption{
  icon:string
  label:string;
  router:string;
  subLabel:string;
}


@Component({
  selector: 'app-side-menu-options',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css'
})
export class SideMenuOptionsComponent {

  public menuOptions:MenuOption[]=[
    {
      label: 'Trending',
      subLabel: 'Gigs populares',
      router: '/dashboard/trending',
      icon:'fa-solid fa-chart-line'
    },
    {
      label: 'Buscar',
      subLabel: 'Buscar Gifs',
      router: '/dashboard/search',
      icon:'fa-solid fa-magnifying-glass'
    },
  ]

}
