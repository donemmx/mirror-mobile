import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeAssesmentComponent } from './intake-assesment.component';

describe('IntakeAssesmentComponent', () => {
  let component: IntakeAssesmentComponent;
  let fixture: ComponentFixture<IntakeAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntakeAssesmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntakeAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
