import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Observable, filter, of } from 'rxjs';
import { LearnersService, NotificationService } from 'src/app/api/services';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent extends BaseComponent {
  totalNote: any = '';
  totalNotification$: Observable<any>;
  constructor(
    data: DataService,
    router: Router,
    private api: LearnersService,
    private http: HttpClient,
    private auth: AuthService,
    private noteApi: NotificationService
  ) {
    super(data, router);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getUser(this.api, this.auth);

    this.noteApi.getAllNotifications().subscribe((res: any) => {
      this.totalNote = res.data.filter((res: any) => res.isSeen == false);
    });
  }
}
