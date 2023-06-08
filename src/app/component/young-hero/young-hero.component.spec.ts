import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungHeroComponent } from './young-hero.component';

describe('YoungHeroComponent', () => {
  let component: YoungHeroComponent;
  let fixture: ComponentFixture<YoungHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoungHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoungHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
