import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';
import { GifMapper } from '../../mapper/gif.mapper';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export default class SearchPageComponent {

  gifService=inject(GifsService)
  gifs=signal<Gif[]>([])

  searchGif(event:string){
    this.gifService.getGif(event).subscribe((res)=>{
      this.gifs.set(res)
    })
  }

}
