
import { Component, Input, OnInit } from '@angular/core';
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
declare const PaystackPop: any;

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css'],
})
export class PaymentCardComponent extends BaseComponent {
cardForm: FormGroup;
  @Input() courses: any;
  loading: boolean = false;
  success: boolean = false;
  method: any = 'paystack'

  constructor(
    data: DataService,
    router: Router,

    private formBuilder: FormBuilder,
    private api: PaymentService,
    private auth: AuthService,
    private notify: NotificationService
  ) {
    super(data,router)
  }

  ngOnInit(): void {
    super.ngOnInit()

  }

  pay() {

    let mycourseIds: any[] = []
    this.courses.forEach((items:any) => {
      mycourseIds.push(items.courseId)
    });


    this.loading = true;
    this.api.registerPaystackPayment({
      paystackId: v4(),
        body: {
          courseIds: mycourseIds,
          method: this.method
        }
      })
      .subscribe(
        (res) => {
          const paystack = new PaystackPop();
          paystack.newTransaction({
            key: res.key,
            email: res.email,
            amount: res.amount,
            ref: res.reference,
            onSuccess: (transaction: any) => {
              console.log(transaction);
              this.api
                .paystackCallback({ paystackId: res.reference })
                .subscribe(() => {
                 this.loading = false
                 this.success = true
                 this.message.cart = []
                 this.data.changeMessage(this.message)
                });
            },
            onCancel: () => {
              // user closed popup
            },
          })}
    )}

  proceed() {

    this.router.navigateByUrl('/my-learning');
  }
}
