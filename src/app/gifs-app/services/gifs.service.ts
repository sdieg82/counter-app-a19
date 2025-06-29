import { computed, inject, Injectable, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { GiphyItem, GiphyResponse } from '../interfaces/Giphy.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { GifMapper } from '../mapper/gif.mapper';
import { Gif } from '../interfaces/gif.interface';



@Injectable({
  providedIn: 'root'
})
export class GifsService {


  searchHistory=signal<Record<string,Gif[]>>({})
  searchHistoryKeys=computed(()=>Object.keys(this.searchHistory())) 

  constructor() {
    // this.getGifs()
   }

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
      this.trendingGifs.set(gifs)
    })
  }

  getGif(gifName:string){
    console.log('gifname desde el service',gifName)
    return this.http.get<GiphyResponse>(`${environment.apiGifUrl}/gifs/search`,
      {
        params:{
          api_key:environment.giphyApiKey,
          q:gifName,
          limit:20,
        }
      }
    ).pipe(
      map((({data})=>data)),
      map((items)=>GifMapper.mapGiphyItemToGifArray(items)),
      tap(items=>{
        this.searchHistory.update(history=>({
          ...history,
          [gifName.toLowerCase()]:items
        }))
      })
    ) 
  }
}
