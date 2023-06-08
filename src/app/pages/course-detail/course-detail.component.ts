import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent extends BaseComponent {
  videoId$ = new BehaviorSubject<any>('')
  constructor(data: DataService, router: Router){
    super(data, router)
  }
  ngOnInit(): void {
      super.ngOnInit()
  }


  getVideoLink(link: any) {
      this.videoId$.next(link)
  }


}
