import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultHomeComponent } from './adult-home.component';

describe('AdultHomeComponent', () => {
  let component: AdultHomeComponent;
  let fixture: ComponentFixture<AdultHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdultHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdultHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
