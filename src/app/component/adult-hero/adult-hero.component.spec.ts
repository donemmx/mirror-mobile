import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultHeroComponent } from './adult-hero.component';

describe('AdultHeroComponent', () => {
  let component: AdultHeroComponent;
  let fixture: ComponentFixture<AdultHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdultHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdultHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
