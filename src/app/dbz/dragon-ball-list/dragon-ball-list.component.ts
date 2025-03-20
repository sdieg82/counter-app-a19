import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
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
export class DragonBallListComponent {

  // Copia original para respaldar siempre
  

  heroes=input.required<Hero[]>();

  searchHero(event: any) {
    const value = event.target.value.toLowerCase();
    const filteredHeroes = this.heroes().filter((hero) => {
      return hero.name.toLowerCase().includes(value);
    });
  
  }
}
