import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { NotificationService } from 'src/app/api/services';
import { DataService } from 'src/app/services/data.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent extends BaseComponent {
  notifications$: Observable<any>

    constructor(data: DataService, router:Router, private api: NotificationService){
    super(data,router)
  }

  ngOnInit(): void {
      super.ngOnInit();
      this.notifications$ = this.api.getAllNotifications().pipe(map((res:any)=> res.data))
  }

  openMessage(data: any){
      this.message.notification = data
      this.data.changeMessage(this.message)
      this.api.seeNotification({
        notificationId: data.notificationId
      }).subscribe((res)=> {
        this.router.navigateByUrl('/notification-page')
      })
  }
}
