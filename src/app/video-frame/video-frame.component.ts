import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { BaseComponent } from '../pages/base/base.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { CourseProgressService } from '../api/services';

@Component({
  selector: 'app-video-frame',
  templateUrl: './video-frame.component.html',
  styleUrls: ['./video-frame.component.css'],
})
export class VideoFrameComponent extends BaseComponent {
  @Input() item: any;
  @Input() courseId: any;
  @Input() videoId$: Observable<any>;
  @Output() done = new EventEmitter()
  videoUrl: any;
  constructor(
    data: DataService,
    router: Router,
    private sanitize: DomSanitizer,
    private api: CourseProgressService,
    private notify: NotificationService
  ) {
    super(data, router);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.videoId$.subscribe((res) => {
      if (res.includes('youtube')) {
        this.getYoutubeId(res);
      } else if (res.includes('youtu.be')) {
        this.getIframLink(res);
      } else {
        this.videoUrl = this.sanitize.bypassSecurityTrustResourceUrl(res);
      }
    });
  }

  getYoutubeId(value: any) {
    this.videoId$.subscribe((res) => {
      if (res.includes('=')) {
        const tempLink = value.split('=')[1];
        if (tempLink.includes('&')) {
          this.videoUrl = this.sanitize.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${tempLink.split('&')[0]}`
          );
        } else {
          this.videoUrl = this.sanitize.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${tempLink}`
          );
        }
      } else {
        this.videoUrl = '';
      }
    });
  }

  getIframLink(value: any) {
    this.videoId$.subscribe((res) => {
      if (res.includes('be/')) {
        const tempLink = value.split('be/')[1];
        this.videoUrl = this.sanitize.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${tempLink}`
        );
      }
    });
  }

  continue() {
    this.updateCourseProgress(
      this.api,
      this.courseId,
      this.item.chapterId,
      this.item.chapterItemId
    ).subscribe((res) => {
      this.notify.success('marked as completed');
    });
    this.done.emit(true)

  }
}
