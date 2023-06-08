import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { LearnersService } from 'src/app/api/services';
import { BaseComponent } from 'src/app/pages/base/base.component';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { NotificationService } from 'src/app/services/notification.service';
import { v4 } from 'uuid';
import { Platform } from '@angular/cdk/platform';
import * as moment from 'moment'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  extends BaseComponent {
  signupForm: FormGroup;
  platformId: Object;
  hide: boolean = true;
  today = moment().format('MM-DD-YYYY')
  gender: any = ['male', 'female'];
  loading: boolean = false;
  currentPlaform: any
  constructor(
    data: DataService,
    router: Router,
    private auth: AuthService,
    private notify: NotificationService,
    private api: LearnersService,
    private platform: Platform,
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private formBuilder: FormBuilder
  ) {
    super(data, router);
    this.platformId = platformId;
  }
  ngOnInit(): void {
    super.ngOnInit();
    

    this.signupForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
    });



    if (this.platform.IOS) {
      this.currentPlaform = 'ios'
    } else {
      this.currentPlaform = 'android'
    }
    this.getDevice();
  }

  getDevice() {
    if (Capacitor.isNativePlatform()) {
      this.hide = false;
    }
  }

  next() {
    this.loading = true;
    this.api
      .createLearner({
        learnerId: v4(),
        body: {
          ...this.signupForm.value,
          platform: this.currentPlaform
        },
      })
      .subscribe(
        (res) => {
          console.log(res);
          this.loading = false;
          this.notify.success('otp has been sent');
          this.message.email = this.signupForm.value.email;
          this.message.path = 'signup'
          this.data.changeMessage(this.message);
          this.router.navigateByUrl('/otp')
        },
        (error) => {
          this.notify.error(error.details);
          this.loading = false;

        }
      );
  }

  checkPassword() {
    const password = this.signupForm.get('password')?.value;
    const confirm = this.signupForm.get('confirmPassword')?.value;
    if (password === confirm) {
      return true;
    }
    return false;
  }

}
