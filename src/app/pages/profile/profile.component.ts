import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress';
import { LearnersService } from 'src/app/api/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent extends BaseComponent {
  label: any;
  imgResult: string = '';
  loading: boolean = false;
  myImage: any;
  form: FormGroup;
  constructor(
    data: DataService,
    router: Router,
    private auth: AuthService,
    private notify: NotificationService,
    private api: LearnersService,
    private formBuilder: FormBuilder,
    private imageCompress: NgxImageCompressService
  ) {
    super(data, router);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.form = this.formBuilder.group({
      showProfile: new FormControl(''),
      showCourses: new FormControl(''),
    });

    this.label =
      this.message.user.name.split(' ')[0][0]
  }

  compressFile() {
    const MAX_MEGABYTE = 1;
    this.imageCompress
      .uploadAndGetImageWithMaxSize(MAX_MEGABYTE) // this function can provide debug information using (MAX_MEGABYTE,true) parameters
      .then(
        (result: string) => {
          this.imgResult = result;
        },
        (result: string) => {
          console.error(
            "The compression algorithm didn't succed! The best size we can do is",
            this.imageCompress.byteCount(result),
            'bytes'
          );
          this.imgResult = result;
        }
      );
  }

  clear() {
    this.imgResult = '';
  }

  upload() {
    this.loading = true;
    this.api
      .uploadUserPicture({
        userId: this.message.user?.learnerId,
        body: {
          use: 'picture',
          url: this.imgResult,
        },
      })
      .subscribe(
        () => {
          this.loading = false;
          this.notify.success('profile image udated');
          this.getUser(this.api, this.auth);
          this.clear()
        },
        (err) => {
          this.loading = false;
          this.notify.error(err.message);
        }
      );
  }


}
