import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CoursesService } from 'src/app/api/services';
import { BaseComponent } from 'src/app/pages/base/base.component';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { NotificationService } from 'src/app/services/notification.service';

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
  @Input() courseId: any;
  @Input() videoId$: Observable<any>;
  exists: any;
  constructor(
    data: DataService,
    router: Router,
    public auth: AuthService,
    public api: CoursesService,
    private notify: NotificationService
  ) {
    super(data, router);
  }
  ngOnInit(): void {
    super.ngOnInit();
    this.getCourseImage();

    this.exists = this.alreadyPaid(this.courseId);
  }

  openVideo() {
    this.videoModal = !this.videoModal;
  }

  addToCart() {
    this.loading = true;
    const data = this.isInCart(this.courseId);
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

  login() {
    this.router.navigateByUrl('/login');
  }

  isInCart(selectedId: any) {
    return this.message.cart?.find(({ courseId }: any) => courseId === selectedId);
  }

  getCourseImage() {
    this.imageLoading = true;
    const reader = new FileReader();
    this.api
      .getCourseCover({
        courseId: this.courseId,
      })
      .subscribe(
        (res: any) => {
          reader.onloadend = () => {
            const imageUrl = reader.result as string;
            this.courseImage = imageUrl;
            this.imageLoading = false;
          };
          reader.readAsDataURL(res);
        },
        (err) => {
          this.imageLoading = false;
        }
      );
  }

  alreadyPaid(id: any) {
    return this.message.user?.courses.includes(id);
  }

  proceed() {
    this.router.navigateByUrl('/my-learning');
  }
}
