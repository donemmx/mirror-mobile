import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CoursesService, LearnersService, PaymentService } from 'src/app/api/services';
import { BaseComponent } from 'src/app/pages/base/base.component';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { NotificationService } from 'src/app/services/notification.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.css'],
})
export class PricingCardComponent extends BaseComponent {
  videoModal: boolean = false;
  loading: boolean = false;
  imageLoading: boolean = false;
  courseImage: any;
  @Input() price: any;
  @Input() image: any;
  @Input() course: any;
  @Input() videoId$: Observable<any>;
  exists: any;
  constructor(
    data: DataService,
    router: Router,
    public auth: AuthService,
    public api: CoursesService,
    private apiLearner:LearnersService,
    private paymenetApi: PaymentService,
    private notify: NotificationService
  ) {
    super(data, router);
  }
  ngOnInit(): void {
    super.ngOnInit();

    this.apiLearner.getLearnerPaidCourses().subscribe((res: any) =>
    {
    this.exists = res.find(({courseId}:any)  => courseId === this.course.courseId)
    }
    )


  }

  openVideo() {
    this.videoModal = !this.videoModal;
  }

  process(){
    if(this.course.pricePlan?.price == 0){
      this.enrollCourse()
    }
    else{
      this.addToCart()
    }
  }
  addToCart() {
    this.loading = true;
    const data = this.isInCart(this.course.courseId);
    if (data) {
      this.notify.warning('course already exists in cart');
      this.loading = false;
    } else {
      this.loading = false;
      this.message.cart = [...this.message.cart, this.message.courseSelected];
      this.data.changeMessage(this.message);
      this.notify.success('successfully added to cart');
    }
  }

  enrollCourse(){
    this.paymenetApi.registerPayment({
      payId: v4(),
        body: {
          courseIds: [this.course.courseId],
          method: 'free'
        }
      })
      .subscribe(
        (res) => {
          this.router.navigateByUrl('/my-learning');
        })
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  isInCart(selectedId: any) {
    return this.message.cart?.find(({ courseId }: any) => courseId === selectedId);
  }

  alreadyPaid(id: any) {
    let paid: any[] = []

     this.apiLearner.getLearnerPaidCourses().subscribe((res: any) => paid.push(...res)
     )

    return paid.find(({courseId}:any)  => courseId === id)


  }

  proceed() {
    this.router.navigateByUrl('/my-learning');
  }
}
