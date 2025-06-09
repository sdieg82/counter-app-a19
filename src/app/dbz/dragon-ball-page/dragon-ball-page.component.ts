import { Component, inject, Input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Hero } from '../../interfaces/Hero-interface';
import { DragonBallListComponent } from "../dragon-ball-list/dragon-ball-list.component";
import { DbzAddComponent } from "../dbz-add/dbz-add.component";
import { DbzService } from '../service/dbz-service.service';

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

public dbzService=inject(DbzService)

  
}
