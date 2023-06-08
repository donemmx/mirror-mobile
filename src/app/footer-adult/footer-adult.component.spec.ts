import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAdultComponent } from './footer-adult.component';

describe('FooterAdultComponent', () => {
  let component: FooterAdultComponent;
  let fixture: ComponentFixture<FooterAdultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAdultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterAdultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
