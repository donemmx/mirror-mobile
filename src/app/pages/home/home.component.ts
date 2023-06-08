import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LearnersService } from 'src/app/api/services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent extends BaseComponent {

  constructor(data: DataService, router: Router, private api: LearnersService, private http: HttpClient) {
    super(data, router);
  }

  ngOnInit(): void {
    super.ngOnInit();

  }
}
