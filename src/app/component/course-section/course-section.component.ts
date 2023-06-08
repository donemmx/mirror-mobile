import { listAnimation } from 'src/app/app.animation';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService, CoursesService } from 'src/app/api/services';
import { Observable, map, shareReplay, tap } from 'rxjs';
import { BaseComponent } from 'src/app/pages/base/base.component';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-section',
  templateUrl: './course-section.component.html',
  styleUrls: ['./course-section.component.css'],
  animations: [listAnimation],
})
export class CourseSectionComponent extends BaseComponent {
  @Input() bg: boolean = false;
  loading: boolean = true
  courses$: Observable<any>
  constructor(data: DataService, router: Router, private api: CoursesService) {
    super(data, router)
  }

  ngOnInit(): void {
    super.ngOnInit()
    this.courses$ = this.api.getAllCourses({
      ageCategory: this.message.selected
    }).pipe(map((res)=> res.data), tap((res)=> {
      this.loading = false
    }), shareReplay(1))

  }
}
