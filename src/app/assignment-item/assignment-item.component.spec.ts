import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentItemComponent } from './assignment-item.component';

describe('AssignmentItemComponent', () => {
  let component: AssignmentItemComponent;
  let fixture: ComponentFixture<AssignmentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
