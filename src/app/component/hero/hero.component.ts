import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CoursesService } from 'src/app/api/services';
import { BaseComponent } from 'src/app/pages/base/base.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent extends BaseComponent {
  videoModal: boolean = false
  id$ = new BehaviorSubject<any>('http://youtube.com/watch/v=ujcEft1JJUQ')
  label: any
   
  afterViewInit: boolean = false;
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

  
  openVideo(){
    this.videoModal = !this.videoModal
  }



}
