import { Component, inject } from '@angular/core';
import { Hero } from '../../interfaces/Hero-interface';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragonBallListComponent } from "../dragon-ball-list/dragon-ball-list.component";

@Component({
  selector: 'app-dragon-ball-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragonBallListComponent
],
  templateUrl: './dragon-ball-page.component.html',
  styleUrl: './dragon-ball-page.component.css'
})
export class DragonBallPageComponent {

  public fb = inject(FormBuilder);
  public heroForm = this.fb.group({
    name: [''],
    power: ['']
  });

  public heroes: Hero[] = [
    { name: 'Goku', power: 'Super Saiyan' },
    { name: 'Vegeta', power: 'Super Saiyan 2' },
  ];

  // Copia original para respaldar siempre
  private originalHeroes: Hero[] = [...this.heroes];

  addHero() {
    const hero = this.heroForm.value as Hero;
    if (hero.name && hero.power) {
      this.heroes.push(hero);
      this.originalHeroes.push(hero); // También actualizar el respaldo
      this.heroForm.reset();
    }
    console.log('heroes', this.heroes);
  }

 

}
