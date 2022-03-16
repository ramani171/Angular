import { ComponentFixture, TestBed } from '@angular/core/testing';

import { componentAComponent } from './componentA.component';

describe('componentAComponent', () => {
  let component: componentAComponent;
  let fixture: ComponentFixture<componentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [componentAComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(componentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
