import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '../pages/base/base.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { CourseProgressService } from '../api/services';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent extends BaseComponent {
  @Input() item: any;
  @Input() courseId: any;
  @Output() done = new EventEmitter()
  constructor(
    data: DataService,
    router: Router,
    private api: CourseProgressService,
    private notify: NotificationService
  ) {
    super(data, router);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  continue() {
      this.updateCourseProgress(this.api, this.courseId, this.item.chapterId, this.item.chapterItemId)
        .subscribe((res) => {
          this.notify.success('marked as completed');
        });
        this.done.emit(true)
  }
}
