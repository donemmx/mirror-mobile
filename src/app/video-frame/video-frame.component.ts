import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { BaseComponent } from '../pages/base/base.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { CourseProgressService } from '../api/services';

@Component({
  selector: 'app-video-frame',
  templateUrl: './video-frame.component.html',
  styleUrls: ['./video-frame.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoFrameComponent extends BaseComponent {
  @ViewChild('video') video: ElementRef
  @Input() item: any;
  @Input() courseId: any;
  @Input() link: any = '';
  videoId$: Observable<any>;
  @Output() done = new EventEmitter();
  
  
  videoUrl: any;
  constructor(
    data: DataService,
    router: Router,
    private sanitize: DomSanitizer,
    private api: CourseProgressService,
    private notify: NotificationService,
    private Element:ElementRef 
  ) {
    super(data, router);
  }

  ngOnInit(): void {
    super.ngOnInit();
    let self  = this
    this.videoId$ = of(this.link);
    this.videoUrl = '';
      this.videoId$.subscribe((res) => {
          if (res.includes('youtube')) {
            self.getYoutubeId(res);
          } else if (res.includes('youtu.be')) {
            self.getIframLink(res);
          } else {
            self.videoUrl = self.sanitize.bypassSecurityTrustResourceUrl(
              res
            );
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

  resetLink() {
   
  }

  refreshIframe() {
    // this.renderer.setProperty(this.iframe.nativeElement, 'src', this.iframe.nativeElement.src);
  }
}
