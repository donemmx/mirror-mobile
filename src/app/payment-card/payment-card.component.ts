import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { v4 } from 'uuid';
import { LearnersService } from '../api/services';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { BaseComponent } from '../pages/base/base.component';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';
import * as moment from 'moment';
declare const PaystackPop: any;


@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css'],
})
export class PaymentCardComponent extends BaseComponent {
cardForm: FormGroup;
  @Input() courseIds: any;
  loading: boolean = false;
  success: boolean = false;
  allCourseids: any

  constructor(
    data: DataService,
    router: Router,

    private formBuilder: FormBuilder,
    private api: LearnersService,
    private auth: AuthService,
    private notify: NotificationService
  ) {
    super(data,router)
  }

  ngOnInit(): void {
    super.ngOnInit()
   let mycourseids: any[] = []
      this.courseIds.forEach((res: any) => {
        mycourseids.push(res.courseId)
      })
    
      this.allCourseids = mycourseids
      
  }

  pay() {
    this.loading = true;
    this.api
      .registerPaystackPayment({
        paystackId: v4(),
        body: {
          courseIds: [this.courseIds]
        }
      })
      .subscribe(
        (res) => {
          this.loading = false;
          this.success = true;
          this.notify.success('payment successful');
          this.getUser(this.api, this.auth)
       
          
        },
        (err) => {
          this.loading = false;
          this.success = false;
          this.notify.error('Payment Capture Failed');
        }
      );
  }

  makePayment($event: string) {
      const paymentCode = moment().unix();
      //refactor when integration with other pay providers is completed
      const payload = {
       
      };
              // this.payWithPaystack(response, payId);
              
  }

  payWithPaystack(paystackResponse: any, payId: any) {
    const self = this;
    const dest = this.router.url + '?payId=' + payId;
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: paystackResponse.key,
      email: paystackResponse.email,
      amount: paystackResponse.amount,
      ref: paystackResponse.reference,
      onSuccess: (transaction: any) => {
        // self.api
        //   .paystackCallback({ paystackId: paystackResponse.reference })
        //   .subscribe(() => {
        //     self.router.navigateByUrl(dest);
        //   });
          this.message.cart = []
          this.data.changeMessage(this.message)
      },
      onCancel: () => {
        // user closed popup
      },
    });
  }

  proceed() {

    this.router.navigateByUrl('/my-learning');
  }
}
