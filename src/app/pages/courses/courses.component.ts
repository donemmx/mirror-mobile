import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import {
  Observable,
  map,
  of,
  shareReplay,
  tap,
  Subject,
  BehaviorSubject,
} from 'rxjs';
import { CoursesService, LearnersService } from 'src/app/api/services';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent extends BaseComponent {
  courses$: Observable<any>;
  loading: boolean = true;
  courseCategory = new BehaviorSubject('education');
  courseCategories = ['identity', 'education', 'spiritual' ]
  selectedCategory:any  = 'identity'
  constructor(
    data: DataService,
    router: Router,
    private api: CoursesService,
    private auth: AuthService,
    private userApi: LearnersService
  ) {
    super(data, router);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.courseCategory.subscribe((res: any) => {
      this.courses$ = this.api
        .getAllCourses({
          ageCategory: this.message.selected,
          courseCategory: res
        })
        .pipe(
          map((res) => res.data),
          tap((res) => {
            this.loading = false;
          })
        );
    });
  }

  selectCourse(item: any) {
    this.message.courseSelected = item;
    this.data.changeMessage(this.message);
  }

  changeCategory(event:any){
    this.courseCategory.next(event.value)
  }
}
