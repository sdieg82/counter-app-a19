import { Component, inject } from '@angular/core';
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
  gifs: Gif[] = []

  searchGif(event:string){
    const value = event
    console.log('este es mi value',value)
    this.gifService.getGif(value).subscribe((res)=>{
      const gif=GifMapper.mapGiphyItemToGifArray(res.data)
      console.log({gif})
      this.gifs.push(...gif)
    })

    // console.log('este es mi giflistsearchable',{gifList})
  }

}
