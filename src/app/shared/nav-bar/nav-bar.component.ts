import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    CommonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  
  routesNavBar=[
    {title:'Counter App',path:'/'},
    {title:'Hero App',path:'/hero'},
    {title:'DBZ App',path:'/dbz'},
  ]

}
