import { Component } from '@angular/core';
import { SideMenuOptionsComponent } from "../side-menu-options/side-menu-options.component";
import { SideMenuHeaderComponent } from "../side-menu-header/side-menu-header.component";

@Component({
  selector: 'app-side-menu-gifs',
  standalone: true,
  imports: [SideMenuOptionsComponent, SideMenuHeaderComponent],
  templateUrl: './side-menu-gifs.component.html',
  styleUrl: './side-menu-gifs.component.css'
})
export class SideMenuGifsComponent {

}
