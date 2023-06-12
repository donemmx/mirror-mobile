import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { LearnersService } from 'src/app/api/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  extends BaseComponent{
  loading: boolean = false;
  loginForm: FormGroup;

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

      this.loginForm = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
      });

      this.message.signupForm = ''
      this.message.changeMessage(this.message)
  }

  signIn(){
    this.loading = true
      this.api.logInLearner({
        body: this.loginForm.value
      }).subscribe((res)=> {
        this.auth.saveAuthentication(res)
        const id: any = this.auth.getUserId()
        this.api.getLearner({learnerId: id.jti}).subscribe((res)=> {
          this.loading = false
          this.notify.success('login successful')
          this.message.user = res
          this.message.cart = []
          this.message.selected = res.ageGroup
          this.data.changeMessage(this.message)
          this.router.navigateByUrl('/home')
        })
      }, (error) => {
        this.loading = false
        this.notify.error(error.message)
      })
  }

}
