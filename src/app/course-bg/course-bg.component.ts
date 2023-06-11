import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-bg',
  templateUrl: './course-bg.component.html',
  styleUrls: ['./course-bg.component.css']
})
export class CourseBgComponent {
@Input() course: any;


}
