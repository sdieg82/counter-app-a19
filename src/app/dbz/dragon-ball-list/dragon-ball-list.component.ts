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
  
  characters=input.required<Hero[]>()
  public heroes:Hero[] = [];
  public originalHeroes:Hero[]=[]
 
  constructor(){
  }
  
  ngOnInit(): void {
    this.heroes=[...this.characters()]
    this.originalHeroes=[...this.characters()];
    console.log('desde list', this.heroes);
  }
  searchHero(event:any){
   console.log('copy',this.originalHeroes);
   const value=event.target.value;
   this.heroes = this.originalHeroes.filter(hero=>hero.name.toLocaleLowerCase().includes(value))
   console.log('this.heroes',this.heroes)
  }

  addCharacter(character:Hero){
    if (character.name && character.power) {
      this.heroes.push(character);
      this.originalHeroes.push(character); // También actualizar el respaldo
      console.log('Character added:', character);
    } else {
      console.error('Character name and power are required');
    }
  }
}
