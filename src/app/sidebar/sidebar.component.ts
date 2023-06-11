import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LearnersService } from '../api/services';
import { BaseComponent } from '../pages/base/base.component';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent extends BaseComponent {

  constructor(
    data: DataService,
    router: Router,
    private auth: AuthService,
    private notify: NotificationService,
    private api: LearnersService
  ) {
    super(data, router);
  }

  logout() {
    this.api.logOutLearner().subscribe(
      () => {
        this.auth.logout();
        this.message.cart = [];
        this.message.courseSelected = null;
        this.notify.success('user logged out successfully');
      },
      (error) => {
        this.notify.error(error.message);
      }
    );
  }
}
