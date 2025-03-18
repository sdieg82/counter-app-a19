import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

  name=signal('Batman');
  age=signal(25);

  getHeroDescription(){
    return (`${this.name()}-${this.age()}`);
  }
  changeHero(){
    this.name.update(() =>'Superman' ); 
  }
  changeAge(){
    this.age.update(() => 30);
  }

  resetForm(){
    this.name.update(()=>'batman');
    this.age.update(() => 25);  
  }

}
