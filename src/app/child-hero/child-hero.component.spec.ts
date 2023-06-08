import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildHeroComponent } from './child-hero.component';

describe('ChildHeroComponent', () => {
  let component: ChildHeroComponent;
  let fixture: ComponentFixture<ChildHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
