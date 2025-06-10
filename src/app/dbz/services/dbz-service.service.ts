import { effect, Injectable, output, signal } from '@angular/core';
import { Hero } from '../interfaces/Hero-interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  
    constructor() {
      const characters = localStorage.getItem('characters');
      if (characters) {
        this.characters.set(JSON.parse(characters));
        console.log('Cargando desde localStorage', this.characters());
      }
    }

  saveToLocalStorage=effect(()=>{
      const characters = this.characters();
      localStorage.setItem('characters', JSON.stringify(characters));
      console.log('Guardado en localStorage', characters);
  })
  characters = signal<Hero[]>([
    { id: 1, name: 'Goku', power: '200' },
    { id: 2, name: 'Vegeta', power: '200' },
    { id: 3, name: 'Trunks', power: '200' },
  ]);


  addHero(newCharacter: Hero) {
    console.log('añadiendo...', newCharacter);
    this.characters.update((list) => [...list, newCharacter]);
    console.log('despues añadido', this.characters());
  }
}
