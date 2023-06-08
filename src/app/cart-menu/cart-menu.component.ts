import { Component, Input } from '@angular/core';
import { BaseComponent } from '../pages/base/base.component';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.css']
})
export class CartMenuComponent extends BaseComponent {
  open: boolean = false;

  @Input() hide: boolean = false;


  hideMenu() {
    this.hide = false;
  }

  leave() {
    this.open = !this.open;
  }
}
