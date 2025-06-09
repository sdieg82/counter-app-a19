import { Component, inject, Input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Hero } from '../../interfaces/Hero-interface';
import { DragonBallListComponent } from "../dragon-ball-list/dragon-ball-list.component";
import { DbzAddComponent } from "../dbz-add/dbz-add.component";

@Component({
  selector: 'app-dragon-ball-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragonBallListComponent,
    DbzAddComponent
],
  templateUrl: './dragon-ball-page.component.html',
  styleUrl: './dragon-ball-page.component.css'
})
export class DragonBallPageComponent {

  characters=signal<Hero[]>([
    {id:1,name:'Goku',power:'200'},
    {id:2,name:'Vegeta',power:'200'},
    {id:3,name:'Trunks',power:'200'},
  ])

  newCharacter=output<Hero>();

  // Copia original para respaldar siempre
  private originalHeroes: Hero[] = [...this.characters()];

  addHero(newCharacter:Hero){
    console.log('añadiendo...',newCharacter)
    this.characters.update(
      (list)=>[...list,newCharacter]
    )
    console.log('despues añadido',this.characters())
  }
  
}
