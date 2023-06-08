import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/api/services';
import { BaseComponent } from 'src/app/pages/base/base.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent extends BaseComponent {
  @Input() course: any;
  loading: boolean = false;

  constructor(data: DataService, router: Router, private api: CoursesService) {
    super(data, router);
  }
  ngOnInit(): void {
    super.ngOnInit();
  }

  selectCourse() {
    this.message.courseSelected = this.course;
    this.data.changeMessage(this.message);
  }

}
