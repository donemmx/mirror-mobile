import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/api/services';
import { DataService } from 'src/app/services/data.service';
import { BaseComponent } from '../base/base.component';
import * as moment from 'moment'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent extends BaseComponent {
  notifications$: Observable<any>
  moment = moment

    constructor(data: DataService, router:Router, private api: NotificationService){
    super(data,router)
  }

  ngOnInit(): void {
      super.ngOnInit();
      this.notifications$ = this.api.getAllNotifications()
  }
}
