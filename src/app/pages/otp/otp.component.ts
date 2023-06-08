import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { LearnersService } from 'src/app/api/services';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent extends BaseComponent {
  loading: boolean = false;
  otpForm: FormGroup;
  timerOn: boolean = true;
  timeLeft: any;
  
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
    this.timer(90);
    this.otpForm = this.formBuilder.group({
      otp: new FormControl(' ', [Validators.required]),
    });
  }

  verifyOtp() {
    this.loading = true;
    this.api
      .validateOtp({
        body: {
          email: this.message.email,
          ...this.otpForm.value,
        },
      })
      .subscribe(
        (res) => {
          this.loading = false;
          if (this.message.path == 'forgotPassword') {
            this.message.auth = res
            this.data.changeMessage(this.message)
            this.router.navigateByUrl('/reset-password');
            
          } else {
            this.auth.saveAuthentication(res);
            const id: any = this.auth.getUserId();
            this.api.getLearner({ learnerId: id.jti }).subscribe((res) => {
              this.message.user = res;
              this.message.cart = [];
              this.data.changeMessage(this.message);
              this.router.navigateByUrl('/registration');
            });
            this.notify.success('otp verification successful');
          }
        },
        (error) => {
          this.loading = false;
          this.notify.error(error.details);
        }
      );
  }

  timer(remaining: number) {
    var m: any = Math.floor(remaining / 60);
    var s: any = remaining % 60;

    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    this.timeLeft = m + ':' + s;
    remaining -= 1;

    if (remaining >= 0 && this.timerOn) {
      var that = this;
      setTimeout(function () {
        that.timer(remaining);
      }, 1000);
      return;
    }

    if (!this.timerOn) {
      return;
    }
    this.timerOn = false;
  }

  resendOTP(){
    this.sendOtp(this.message.email)
    this.timerOn = true
    this.timer(90);
  }

  sendOtp(email: any){
    this.api.resetOtp({
      body: this.message.email
    }).subscribe((res)=> {
      this.notify.success('otp reset sent')
    })
  }
}
