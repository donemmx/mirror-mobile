import { Component, Input } from '@angular/core';
import { BaseComponent } from '../pages/base/base.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';
import { LearnersService } from '../api/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent extends BaseComponent {
  label: any;
  open: boolean = false;

  @Input() hide: boolean = false;

  constructor(
    data: DataService,
    router: Router,
    private auth: AuthService,
    private notify: NotificationService,
    private api: LearnersService
  ) {
    super(data, router);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.label = this.message.user?.name.split(' ')[0][0];
  }

  hideMenu() {
    this.hide = false;
  }

  leave() {
    this.open = !this.open;
    this.hide = false;
  }

  logout() {
    this.api.logOutLearner().subscribe(
      () => {
        this.hideMenu();
        this.auth.logout();
        this.message.cart = [];
        this.message.profilePic = '';
        this.message.courseSelected = null;
        this.notify.success('user logged out successfully');
        this.open = !this.open;
      },
      (error) => {
        this.notify.error(error.message);
        this.hideMenu();
        this.open = !this.open;
      }
    );
  }
}
