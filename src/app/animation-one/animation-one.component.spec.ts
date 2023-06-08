import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationOneComponent } from './animation-one.component';

describe('AnimationOneComponent', () => {
  let component: AnimationOneComponent;
  let fixture: ComponentFixture<AnimationOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
