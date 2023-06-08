import { Component } from '@angular/core';
import { BaseComponent } from '../pages/base/base.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { listAnimation } from '../app.animation';

@Component({
  selector: 'app-footer-two',
  templateUrl: './footer-two.component.html',
  styleUrls: ['./footer-two.component.css'],
  animations: [listAnimation]
})
export class FooterTwoComponent extends BaseComponent {

  constructor(data: DataService, router: Router, public auth: AuthService){
    super(data, router)
  }

  ngOnInit(): void {
      super.ngOnInit()

  }
}
