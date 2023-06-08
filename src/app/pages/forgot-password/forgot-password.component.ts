import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { LearnersService } from 'src/app/api/services';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent extends BaseComponent{
  loading: boolean = false;
  forgotPasswordForm: FormGroup;

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
      super.ngOnInit()

      this.forgotPasswordForm = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
      });
  }

  send(){
    this.loading = true
    this.api.generateOtp({
      body: this.forgotPasswordForm.value
    }).subscribe((res)=> {
      this.loading = false
      this.message.email = this.forgotPasswordForm.value.email;
      this.message.path = 'forgotPassword'
      this.data.changeMessage(this.message);
      this.router.navigateByUrl('/otp')
    }, (err)=> {
      this.loading = false
      this.notify.error(err.message)
    })
  }

}
