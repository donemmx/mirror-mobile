import { Component, Input } from '@angular/core';
import { BaseComponent } from '../pages/base/base.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { CourseProgressService } from '../api/services';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-text-item',
  templateUrl: './text-item.component.html',
  styleUrls: ['./text-item.component.css'],
})
export class TextItemComponent extends BaseComponent {
  @Input() item: any;
  @Input() courseId: any;

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
  }
}
