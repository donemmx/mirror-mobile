import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseProgressService } from '../api/services';
import { BaseComponent } from '../pages/base/base.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-pdf-item',
  templateUrl: './pdf-item.component.html',
  styleUrls: ['./pdf-item.component.css']
})
export class PdfItemComponent extends BaseComponent {
  @Input() item: any
  @Input() courseId: any;
  @Output() done = new EventEmitter();


  constructor(data:DataService, router: Router, 
    private api: CourseProgressService,
    private notify: NotificationService,

    ){
    super(data, router)
  }
  ngOnInit(): void {
    super.ngOnInit();


  }
  continue() {
    this.done.emit(true);
    this.updateCourseProgress(
      this.api,
      this.courseId,
      this.item.chapterId,
      this.item.chapterItemId
    ).subscribe((res) => {
      this.notify.success('marked as completed');
    });
  }

}
