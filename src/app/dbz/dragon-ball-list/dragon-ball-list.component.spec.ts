import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonBallListComponent } from './dragon-ball-list.component';

describe('DragonBallListComponent', () => {
  let component: DragonBallListComponent;
  let fixture: ComponentFixture<DragonBallListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonBallListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonBallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
