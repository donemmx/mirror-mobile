import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesService } from '../api/services';

@Component({
  selector: 'app-learning-card',
  templateUrl: './learning-card.component.html',
  styleUrls: ['./learning-card.component.css'],
})
export class LearningCardComponent implements OnInit {
  @Input() courseId: any;
  @Input() course: any
  constructor(private api: CoursesService, private router: Router){}

  ngOnInit(): void {

  }

  proceedtToCourse(){
    this.router.navigateByUrl(`/video/${this.course.courseId}`)
  }
}
