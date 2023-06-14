import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LearnersService, NotificationService } from '../api/services';
import { BaseComponent } from '../pages/base/base.component';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent extends BaseComponent {
  totalNote: any = '';
  constructor(
    data: DataService,
    router: Router,
    private auth: AuthService,
    private notify: NotificationService,
    private api: LearnersService,
    private noteApi: NotificationService
  ) {
    super(data, router);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.noteApi.getAllNotifications().subscribe((res: any) => {
      this.totalNote = res.data.filter((res: any) => res.isSeen == false);
    });
  }

  logout() {
    this.api.logOutLearner().subscribe(() => {
      this.auth.logout();
      this.message.cart = [];
      this.message.courseSelected = null;
    });
  }
}
