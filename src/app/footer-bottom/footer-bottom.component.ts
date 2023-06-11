import { Component } from '@angular/core';
import { BaseComponent } from '../pages/base/base.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-footer-bottom',
  templateUrl: './footer-bottom.component.html',
  styleUrls: ['./footer-bottom.component.css']
})
export class FooterBottomComponent extends BaseComponent {
  year = new Date().getFullYear()
  constructor(data: DataService, router: Router){
    super(data, router)
  }

  ngOnInit(): void {
      super.ngOnInit()
  }
}
