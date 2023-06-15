import { Component, Input } from '@angular/core';
import { BaseComponent } from '../pages/base/base.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { CourseProgressService } from '../api/services';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-assignment-item',
  templateUrl: './assignment-item.component.html',
  styleUrls: ['./assignment-item.component.css']
})
export class AssignmentItemComponent extends BaseComponent {
  @Input() item: any;
  @Input() courseId: any;
  upload: any
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

  submitAssignment(){

  }

  onFileDropped($event: any) {
    this.manageUpload($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler($event: any) {

    const files = $event.target.files
    if(files[0].size > 5000000){
        this.notify.error('Uploaded file is too large, Please reduce to a maximum size of 5MB');
      } else {
        this.manageUpload(files);
    }
  }


  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  manageUpload(files: Array<any>) {
    var myReader = new FileReader()
    myReader.onloadend = (e) => {
      this.upload  = myReader.result;
      // console.log(this.message.upload.url)
    };
    myReader.readAsDataURL(files[0]);
  }

  continue() {
    this.updateCourseProgress(this.api, this.courseId, this.item.chapterId, this.item.chapterItemId)
      .subscribe((res) => {
        this.notify.success('marked as completed');
      });
}
}
