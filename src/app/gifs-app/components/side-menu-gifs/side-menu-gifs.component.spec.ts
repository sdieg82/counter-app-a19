import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuGifsComponent } from './side-menu-gifs.component';

describe('SideMenuGifsComponent', () => {
  let component: SideMenuGifsComponent;
  let fixture: ComponentFixture<SideMenuGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuGifsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
