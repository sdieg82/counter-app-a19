import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/Hero-interface';

@Component({
  selector: 'app-dragon-ball-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dragon-ball-list.component.html',
  styleUrl: './dragon-ball-list.component.css'
})
export class DragonBallListComponent implements OnInit{
  
  constructor(){

  }
  
  
  @Input()
  public heroes:Hero[] = [];
  public originalHeroes:Hero[]=[]

  ngOnInit(): void {
    console.log('desde list', this.heroes);
    this.originalHeroes=[...this.heroes];
    console.log('copy',this.originalHeroes);
  }
  searchHero(event:any){
   const value=event.target.value;
   this.heroes=this.originalHeroes.filter(hero=>hero.name.toLocaleLowerCase().includes(value))
  }

}
