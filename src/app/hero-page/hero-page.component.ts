import { UpperCasePipe } from '@angular/common';
import { Component, computed, Pipe, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponent {
  name = signal('Batman');
  age = signal(25);

  heroDescription = computed(() => {
    return `${this.name()} tiene ${this.age()} años`;
  });

  capitalized = computed(() => {
    return this.name().toUpperCase;
  });

  changeHero() {
    this.name.set('Spiderman');
  }

  changeAge() {
    this.age.set(17);
  }

  resetForm() {
    this.name.set('Batman');
    this.age.set(29);
  }
}
