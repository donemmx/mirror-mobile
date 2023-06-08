import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenHomeComponent } from './children-home.component';

describe('ChildrenHomeComponent', () => {
  let component: ChildrenHomeComponent;
  let fixture: ComponentFixture<ChildrenHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
