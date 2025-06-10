import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragonBallListComponent } from "../../components/dragon-ball-list/dragon-ball-list.component";

import { DbzService } from '../../services/dbz-service.service';
import { DbzAddComponent } from "../../components/dbz-add/dbz-add.component";

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
