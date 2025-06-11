import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuGifsComponent } from "../../components/side-menu-gifs/side-menu-gifs.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    SideMenuGifsComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {

}
