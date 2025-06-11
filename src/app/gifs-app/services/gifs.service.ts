import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Giphy } from '../interfaces/Giphy.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { }

  private http=inject(HttpClient)

  listGifs:Giphy[]=[]

  getGifs():Observable<Giphy>{
    return this.http.get<Giphy>(`${environment.apiGifUrl}/gifs/trending`,
      {
        params:{
          api_key:environment.giphyApiKey,
          limit:20
        }
      }
    )
  }
}
