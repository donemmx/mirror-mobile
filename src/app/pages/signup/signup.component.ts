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
export class SignupComponent extends BaseComponent {
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
    private formBuilder: FormBuilder
  ) {
    super(data, router);
  }
  ngOnInit(): void {
    super.ngOnInit();

    this.signupForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', [Validators.required]),
    });

    if(this.message.signupForm){
      this.signupForm.patchValue(this.message.signupForm)
    }
  }

  next() {
    this.message.signupForm = this.signupForm.value
    this.data.changeMessage(this.message)
    this.router.navigateByUrl('/signup-2')
  }


}
