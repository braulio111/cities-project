import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesDropdownComponent } from './states-dropdown.component';

describe('StatesDropdownComponent', () => {
  let component: StatesDropdownComponent;
  let fixture: ComponentFixture<StatesDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatesDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
