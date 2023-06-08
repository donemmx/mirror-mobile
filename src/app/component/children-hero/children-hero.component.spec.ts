import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenHeroComponent } from './children-hero.component';

describe('ChildrenHeroComponent', () => {
  let component: ChildrenHeroComponent;
  let fixture: ComponentFixture<ChildrenHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
