import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-menu',
  templateUrl: './notification-menu.component.html',
  styleUrls: ['./notification-menu.component.css']
})
export class NotificationMenuComponent {
  open: boolean = false;

  @Input() hide: boolean = false;


  hideMenu() {
    this.hide = false;
  }

  leave() {
    this.open = !this.open;
  }
}
