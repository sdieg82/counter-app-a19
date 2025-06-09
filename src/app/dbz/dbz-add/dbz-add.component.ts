import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Hero } from '../../interfaces/Hero-interface';

@Component({
  selector: 'app-dbz-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dbz-add.component.html',
  styleUrl: './dbz-add.component.css'
})
export class DbzAddComponent {

  public fb=inject(FormBuilder)
  public heroForm = this.fb.group({
      name: [''],
      power: ['']
    });
  
  newHero=output<Hero>()
  addHero() {
    if(!this.heroForm.valid){
      return
    }
    const newHero:Hero={
      id:Math.floor(Math.random())+1,
      name:this.heroForm.value.name ?? '',
      power:this.heroForm.value.power?? ''
    }
    this.newHero.emit(newHero)
    this.resetFields();
    // console.log('heroes', this.heroes);
  }

  resetFields(){
    this.heroForm.reset();
  }
}
