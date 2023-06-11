import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../pages/base/base.component';
import { Observable, map, shareReplay, tap } from 'rxjs';
import { DataService } from '../services/data.service';
import { CoursesService, LearnersService } from '../api/services';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css'],
})
export class RecommendedComponent extends BaseComponent{
  courses$: Observable<any>
  loading: boolean = true
  constructor(data:DataService, router: Router, private api: CoursesService, private auth: AuthService, private userApi: LearnersService){
    super(data, router)
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.courses$ = this.api.getAllCourses({
      ageCategory: this.message.selected
    }).pipe(map((res)=> res.data), tap((res)=> {
      this.loading = false
    }))

  }
}
