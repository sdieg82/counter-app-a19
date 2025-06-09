import { Injectable, output, signal } from '@angular/core';
import { Hero } from '../../interfaces/Hero-interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
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
