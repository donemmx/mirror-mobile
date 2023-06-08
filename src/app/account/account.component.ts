import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BaseComponent } from '../pages/base/base.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { LearnersService } from '../api/services';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent extends BaseComponent {
  account: FormGroup;
  loading: boolean = false;

  constructor(
    data: DataService,
    router: Router,
    private api: LearnersService,
    private formBuilder: FormBuilder,
    private notify: NotificationService
  ) {
    super(data, router);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.account = this.formBuilder.group({
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
  }

  changePassword() {
    this.loading = true;
    this.api
      .changePassword({
        body: this.account.value,
      })
      .subscribe(
        (res) => {
          this.account.reset()
          this.loading = false;
          this.notify.success('Password Changed Successfully');
        },
        (err) => {
          this.loading = false;
          this.notify.error(err.message);
        }
      );
  }

  checkPassword() {
    const password = this.account.get('password')?.value;
    const confirm = this.account.get('confirmPassword')?.value;
    if (password === confirm) {
      return true;
    }
    return false;
  }

}
