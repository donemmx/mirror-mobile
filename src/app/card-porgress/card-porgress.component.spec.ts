import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPorgressComponent } from './card-porgress.component';

describe('CardPorgressComponent', () => {
  let component: CardPorgressComponent;
  let fixture: ComponentFixture<CardPorgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPorgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPorgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
