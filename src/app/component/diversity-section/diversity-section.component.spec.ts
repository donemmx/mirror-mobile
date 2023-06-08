import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversitySectionComponent } from './diversity-section.component';

describe('DiversitySectionComponent', () => {
  let component: DiversitySectionComponent;
  let fixture: ComponentFixture<DiversitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiversitySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiversitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
