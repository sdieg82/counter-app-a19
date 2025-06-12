import { Component, inject, OnInit, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifsService } from '../../services/gifs.service';

const imageUrls:string[] = [];


@Component({
  selector: 'app-trending-page',
  standalone: true,
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css'
})
export default class TrendingPageComponent implements OnInit {
  gifs=signal(imageUrls);
  gifService=inject(GifsService)

  constructor(){
    // for (let index = 0; index <= 11; index++) {
    //   if(index!==0){
    //     this.gifs().push(
    //       `https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${index}.jpg`
    //     );
    //   }else{
    //     this.gifs().push(
    //         `https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg`
    //       );
    //   }
    // }
  }
  ngOnInit(): void {
    // this.listGifs()
  }

  listGifs(){
    return this.gifService.getGifs()
  }
}
