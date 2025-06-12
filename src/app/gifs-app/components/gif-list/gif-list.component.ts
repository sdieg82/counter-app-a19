import { Component, input } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item/gif-list-item.component";
import { Gif } from '../../interfaces/gif.interface';

interface Item{
  class:string
  src:string
}

@Component({
  selector: 'app-gif-list',
  standalone: true,
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css'
})
export class GifListComponent {
  

  gifs=input.required<Gif[]>()
  // constructor() {
  //   for (let index = 1; index <= 11; index++) {
  //     this.gifItem.push({
  //       class: 'h-auto max-w-full rounded-lg',
  //       src: `https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${index}.jpg`
  //     });
  //   }
  // }
}
