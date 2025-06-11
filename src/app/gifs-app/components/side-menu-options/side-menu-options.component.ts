import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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
    RouterLink
  ],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css'
})
export class SideMenuOptionsComponent {

  public menuOptions:MenuOption[]=[
    {
      label: 'Trending',
      subLabel: 'Most popular gifs',
      router: '/dashboard/trending',
      icon:''
    },
    {
      label: 'Search',
      subLabel: 'Search for gifs',
      router: '/dashboard/search',
      icon:''
    },
    {
      label: 'Not Found',
      subLabel: 'Page not found',
      router: '/dashboard/not-found',
      icon:''
    }
  ]

}
