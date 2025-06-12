import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { GiphyItem, GiphyResponse } from '../interfaces/Giphy.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { }

  private http=inject(HttpClient)

  trendingGifs=signal<Gif[]>([])

  getGifs(){
    return this.http.get<GiphyResponse>(`${environment.apiGifUrl}/gifs/trending`,
      {
        params:{
          api_key:environment.giphyApiKey,
          limit:20
        }
      }
    )
    .subscribe((res)=>{
      const gifs=GifMapper.mapGiphyItemToGifArray(res.data)
      console.log({gifs})
    })
  }
}
