import { Component, input, signal } from '@angular/core';

interface Item{
  class:string
  src:string
}

@Component({
  selector: 'app-gif-list-item',
  standalone: true,
  imports: [],
  templateUrl: './gif-list-item.component.html',
  styleUrl: './gif-list-item.component.css'
})
export class GifListItemComponent {

public number:number=0  
  imageUrl=input.required<string>()

}
