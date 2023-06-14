import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/api/services';
import { BaseComponent } from 'src/app/pages/base/base.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-adult-hero',
  templateUrl: './adult-hero.component.html',
  styleUrls: ['./adult-hero.component.css'],
})
export class AdultHeroComponent extends BaseComponent {
  label: any;
  @Input() totalNote: any;
  afterViewInit: boolean = false;
  course: any;
  constructor(data: DataService, router: Router, private api: CoursesService) {
    super(data, router);
  }
  ngOnInit(): void {
    super.ngOnInit();
    this.label = this.message.user?.name?.split(' ')[0][0];
    this.api
      .getAllCourses({
        ageCategory: this.message.selected,
      })
      .subscribe((res) => {
        this.course = res.data[0];
      });
  }

  selectCourse() {
    this.message.courseSelected = this.course;
    this.data.changeMessage(this.message);
    this.router.navigateByUrl(`/course-detail/${this.course.courseId}`);
  }
}
