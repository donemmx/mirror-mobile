import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../api/services';
import { shareReplay } from 'rxjs';

@Component({
  selector: 'app-course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.css'],
})
export class CourseImageComponent {
  @Input() course: any;
  constructor(private api: CoursesService) {
  }

 
}
