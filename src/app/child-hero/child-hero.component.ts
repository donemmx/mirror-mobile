import { Component } from '@angular/core';
import { BaseComponent } from '../pages/base/base.component';
import { DataService } from '../services/data.service';
import { CoursesService } from '../api/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-hero',
  templateUrl: './child-hero.component.html',
  styleUrls: ['./child-hero.component.css']
})
export class ChildHeroComponent extends BaseComponent {
  label: any
  course: any
  constructor(data: DataService, router: Router, private api: CoursesService) {
    super(data, router)
  }
  ngOnInit(): void {
    super.ngOnInit();
    this.label = this.message.user?.name.split(' ')[0][0] 
    this.api.getAllCourses({
      ageCategory: this.message.selected
    }).subscribe((res)=> {
      this.course = res.data.splice(0,1)})
  }

  selectCourse() {
    this.message.courseSelected = this.course;
    this.data.changeMessage(this.message);
    this.router.navigateByUrl(`/course-detail:/${this.course.courseId}`)
  }

}
