import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesmentCardComponent } from './assesment-card.component';

describe('AssesmentCardComponent', () => {
  let component: AssesmentCardComponent;
  let fixture: ComponentFixture<AssesmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssesmentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssesmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
