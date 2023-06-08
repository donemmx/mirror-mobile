import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Observable, of, reduce } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends BaseComponent {
  totalprice$: Observable<any>

  ngOnInit(): void {
      super.ngOnInit()
      this.data.currentMessage.subscribe((res: any)=>  this.totalprice$ = of(res.cart.reduce((acc: any, data: any)=> acc + data?.pricePlan?.price, 0))
      )
    }

  deleteItem( index: any){
    this.message.cart.splice(index, 1)
    this.data.changeMessage(this.message)
  } 

  clearAll(){
    this.message.cart = []
    this.data.changeMessage(this.message)
  }

}
