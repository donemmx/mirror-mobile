import { listAnimation } from 'src/app/app.animation';
import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/api/services';
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
  education$: Observable<any>
  spiritual$: Observable<any>
  identity$: Observable<any>
  allcourses$:Observable<any>
   constructor(data: DataService, router: Router, private api: CoursesService) {
    super(data, router)
  }

  ngOnInit(): void {
    super.ngOnInit()

    if(this.message.user.learnerCourseCategories.length !== 0){
      this.message.user.learnerCourseCategories.forEach((res: any)=> {
        if(res == 'spiritual'){
          this.spiritual$ = this.getCourses(res)
        }
        else if(res == 'education'){
          this.education$ = this.getCourses(res)
        }
        else{
          this.identity$ = this.getCourses(res)
        }
      })
    }
    else{
      this.allcourses$ = this.api.getAllCourses({
        ageCategory: this.message.selected,
      }).pipe(map((res)=> res.data.splice(0,8)), tap((res)=> {
        this.loading = false
      }))
    }

    this.courses$ = this.api.getAllCourses({
      ageCategory: this.message.selected,
      courseCategory: 'identity'
    }).pipe(map((res)=> res.data.splice(0,3)), tap((res)=> {
      this.loading = false
    }))

  }

  getCourses(courseCategory: any){
    this.loading = true
    return this.api.getAllCourses({
      ageCategory: this.message.selected,
      courseCategory: courseCategory
    }).pipe(map((res)=> res.data.splice(0,4)), tap((res)=> {
      this.loading = false
    }))
  }
}
