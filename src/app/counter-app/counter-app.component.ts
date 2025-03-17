import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  standalone: true,
  imports: [],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css'
})
export class CounterAppComponent {
  public counter:number=10;

  increment(){
    this.counter++
  }
  decrement(){
    this.counter=this.counter-1
  }
  reset(){
    this.counter=10;
  }
}
