import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearCitiesComponent } from './near-cities.component';

describe('NearCitiesComponent', () => {
  let component: NearCitiesComponent;
  let fixture: ComponentFixture<NearCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearCitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
