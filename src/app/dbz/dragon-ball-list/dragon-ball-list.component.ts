import { CommonModule } from '@angular/common';
import { Component, inject, Input, input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/Hero-interface';
import { DbzService } from '../service/dbz-service.service';

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

  characters=input.required<Hero[]>()
  public heroes:Hero[] = [];
  public originalHeroes:Hero[]=[]
  private readonly dbzService=inject(DbzService)
  
  ngOnInit(): void {
    this.listCharacters();
    this.originalHeroes=[...this.characters()];
    console.log('desde list', this.heroes);
  }
  searchHero(event:any){
   console.log('copy',this.originalHeroes);
   const value=event.target.value;
   this.heroes = this.originalHeroes.filter(hero=>hero.name.toLocaleLowerCase().includes(value))
   console.log('this.heroes',this.heroes)
  }

  listCharacters(){
    this.heroes=this.dbzService.characters()
    console.log('estos son los heroes desde list characters',this.heroes)
  }

}
