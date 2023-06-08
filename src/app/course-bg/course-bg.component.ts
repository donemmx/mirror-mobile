import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../api/services';

@Component({
  selector: 'app-course-bg',
  templateUrl: './course-bg.component.html',
  styleUrls: ['./course-bg.component.css']
})
export class CourseBgComponent implements OnInit {
@Input() courseId: any;
 courseImage: any;
 loading:boolean = true

 constructor(private api: CoursesService){
 }

 ngOnInit(): void {
    this.getCourseImage()
 }

 getCourseImage() {
  const reader = new FileReader();
  this.api.getCourseCover({
      courseId: this.courseId,
    })
    .subscribe((res: any) => {
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        this.courseImage = imageUrl
        this.loading = false
      };
      reader.readAsDataURL(res);
    }, (err)=> {
      this.loading = false
    });
}

}
