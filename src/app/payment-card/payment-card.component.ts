import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { v4 } from 'uuid';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { BaseComponent } from '../pages/base/base.component';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';
import { PaymentService } from '../api/services';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { Subject } from 'rxjs/internal/Subject';

declare const PaystackPop: any;

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css'],
})
export class PaymentCardComponent extends BaseComponent {
  payPalConfig?: IPayPalConfig;
  @Input() courses: any;
  loading: boolean = false;
  success: boolean = false;
  method: any = 'paystack';
  methodList:any = ['paystack', 'paypal']
  getMethod$ = new Subject()
  constructor(
    data: DataService,
    router: Router,

    private formBuilder: FormBuilder,
    private api: PaymentService,
    private auth: AuthService,
    private notify: NotificationService
  ) {
    super(data, router);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getMethod$.subscribe((res)=> {
      if(res === 'paypal'){
        this.initConfig();
        console.log(this.method);

      }
    })

  }

  pay() {
    let mycourseIds: any[] = [];
    this.courses.forEach((items: any) => {
      mycourseIds.push(items.courseId);
    });

    this.api
      .registerPayment({
        payId: v4(),
        body: {
          courseIds: mycourseIds,
          method: this.method,
        },
      })
      .subscribe((res) => {
        console.log(res.key);

        const paystack = new PaystackPop();
        paystack.newTransaction({
          key: res.key,
          email: res.email,
          amount: res.amount,
          ref: res.reference,
          onSuccess: (transaction: any) => {
            console.log(transaction);
            this.api
              .paystackCallback({ payId: res.reference })
              .subscribe(() => {
                this.loading = false;
                this.success = true;
                this.message.cart = [];
                this.data.changeMessage(this.message);
              });
          },
          onCancel: () => {
            // user closed popup
          },
        });
      });
  }

  logResult(event: any){
    this.getMethod$.next(event.value)
  }

  initConfig(): void {
    let mycourseIds: any[] = [];
    this.courses.forEach((items: any) => {
      mycourseIds.push(items.courseId);
    });

    this.api
    .registerPayment({
      payId: v4(),
      body: {
        courseIds: mycourseIds,
        method: this.method,
      },
    })
    .subscribe((res:any) => {
    this.payPalConfig = {
      currency: 'USD',
      clientId:
        'Aa_J7Jz-bl2PXv8KqHd3q84cTSatBKXwIyICnWYRBJToA4-MVKDkCHBWeXb8sMv0WOz-26IIhEv6l34v',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          payer: {
            email_address: res.email
          },
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: res.amount,
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: res.amount,
                  },
                },
              },
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then();
      },
      onClientAuthorization: (data) => {

        this.api
        .paypalCallback({ payId: res.reference })
        .subscribe(() => {
          this.loading = false;
          this.success = true;
          this.message.cart = [];
          this.data.changeMessage(this.message);
        });

      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    }})
  }

  proceed() {
    this.router.navigateByUrl('/my-learning');
  }
}
