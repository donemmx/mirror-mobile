import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { CoursesService } from 'src/app/api/services';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {
  @Input() learnerOutcome: any
  @Input() description: any
  @Input() courseId: any
  @Output() videoLink: EventEmitter<any> = new EventEmitter()
  chapters$: Observable<any>
  link: any
  loading: boolean = true
  constructor(private api: CoursesService){
  }

  ngOnInit(): void {
      this.chapters$ = this.api.getChaptersByCourseIdForLearners({
        courseId: this.courseId
      }).pipe(map((res)=> res), tap((res: any)=> {
        this.loading = false
       this.link = res[0]?.chapterItems[0]?.link;
       this.videoLink.emit(this.link)
      }))

      
  }

    

}
