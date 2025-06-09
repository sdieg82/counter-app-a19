import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzAddComponent } from './dbz-add.component';

describe('DbzAddComponent', () => {
  let component: DbzAddComponent;
  let fixture: ComponentFixture<DbzAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbzAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbzAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
