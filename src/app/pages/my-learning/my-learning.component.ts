import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { LearnersService } from 'src/app/api/services';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-my-learning',
  templateUrl: './my-learning.component.html',
  styleUrls: ['./my-learning.component.css']
})
export class MyLearningComponent extends BaseComponent {

  myCourses$: Observable<any>

  constructor(data: DataService, router: Router, private api:LearnersService){
    super(data, router)
  }
  ngOnInit(): void {
      super.ngOnInit()
      this.myCourses$ = this.api.getLearnerPaidCourses()
  }
}
