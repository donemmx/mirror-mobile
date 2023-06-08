import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { LearnersService } from 'src/app/api/services';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent extends BaseComponent{
  loading: boolean = false;
  resetForm: FormGroup;

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

      this.resetForm = this.formBuilder.group({
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
      });
      delete this.message.path
  }

  resetPassword() {
    this.loading = true;
    this.auth.saveAuthentication(this.message.auth);
    this.api
      .changePassword({
        body: {
          password: this.resetForm.value.password,
          confirmPassword: this.resetForm.value.confirmPassword,
        },
      })
      .subscribe((res) => {
        console.log(res);
        this.loading = false;
        const id: any = this.auth.getUserId();
        this.api.getLearner({ learnerId: id.jti }).subscribe((res) => {
          this.message.user = res;
          this.message.cart = [];
          this.data.changeMessage(this.message);
          delete this.message.auth
          this.router.navigateByUrl('/home')
        });
      }, (err)=> {
        this.loading = false;
      });
  }

  checkPassword() {
    const password = this.resetForm.get('password')?.value;
    const confirm = this.resetForm.get('confirmPassword')?.value;
    if (password === confirm) {
      return true;
    }
    return false;
  }

}