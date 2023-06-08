import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungAdultHomeComponent } from './young-adult-home.component';

describe('YoungAdultHomeComponent', () => {
  let component: YoungAdultHomeComponent;
  let fixture: ComponentFixture<YoungAdultHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoungAdultHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoungAdultHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
