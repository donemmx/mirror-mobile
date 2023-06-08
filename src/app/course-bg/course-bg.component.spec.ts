import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBgComponent } from './course-bg.component';

describe('CourseBgComponent', () => {
  let component: CourseBgComponent;
  let fixture: ComponentFixture<CourseBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseBgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
