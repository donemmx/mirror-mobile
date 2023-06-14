import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/component/header/header.component';
import { HomeComponent } from '../home/home.component';
import { CoursesComponent } from '../courses/courses.component';
import { MyLearningComponent } from '../my-learning/my-learning.component';
import { VideoComponent } from '../video/video.component';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { HeroComponent } from 'src/app/component/hero/hero.component';
import { FooterComponent } from 'src/app/component/footer/footer.component';
import { CourseCardComponent } from 'src/app/component/course-card/course-card.component';
import { CardProgressComponent } from 'src/app/component/card-progress/card-progress.component';
import { CourseSectionComponent } from 'src/app/component/course-section/course-section.component';
import { DiversitySectionComponent } from 'src/app/component/diversity-section/diversity-section.component';
import { CarouselComponent } from 'src/app/component/carousel/carousel.component';
import { RegistrationComponent } from '../registration/registration.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ExploreComponent } from 'src/app/component/explore/explore.component';
import { HeroTwoComponent } from 'src/app/component/hero-two/hero-two.component';
import { HeroThreeComponent } from 'src/app/component/hero-three/hero-three.component';
import { HeaderTwoComponent } from 'src/app/header-two/header-two.component';
import { CourseContentComponent } from 'src/app/component/course-content/course-content.component';
import { ReviewsComponent } from 'src/app/component/reviews/reviews.component';
import { PricingCardComponent } from 'src/app/component/pricing-card/pricing-card.component';
import { AdultHeroComponent } from 'src/app/component/adult-hero/adult-hero.component';
import { ChildrenHeroComponent } from 'src/app/component/children-hero/children-hero.component';
import { YoungHeroComponent } from 'src/app/component/young-hero/young-hero.component';
import { BaseComponent } from '../base/base.component';
import { ModalComponent } from 'src/app/modal/modal.component';
import { FooterAdultComponent } from 'src/app/footer-adult/footer-adult.component';
import { FooterTwoComponent } from 'src/app/footer-two/footer-two.component';
import { ChildHeroComponent } from 'src/app/child-hero/child-hero.component';
import { AboutProgramComponent } from 'src/app/about-program/about-program.component';
import { CourseHeroComponent } from 'src/app/course-hero/course-hero.component';
import { FooterBottomComponent } from 'src/app/footer-bottom/footer-bottom.component';
import { QuizComponent } from '../quiz/quiz.component';
import { VideoModalComponent } from 'src/app/video-modal/video-modal.component';
import { TopRatedComponent } from 'src/app/top-rated/top-rated.component';
import { RecommendedComponent } from 'src/app/recommended/recommended.component';
import { LearningCardComponent } from 'src/app/learning-card/learning-card.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { AccountComponent } from 'src/app/account/account.component';
import { ProfileComponent } from '../profile/profile.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { PortfolioHeroComponent } from 'src/app/portfolio-hero/portfolio-hero.component';
import { PortfolioCardComponent } from 'src/app/portfolio-card/portfolio-card.component';
import { CartComponent } from '../cart/cart.component';
import { CartMenuComponent } from 'src/app/cart-menu/cart-menu.component';
import { NotificationMenuComponent } from 'src/app/notification-menu/notification-menu.component';
import { IntakeAssesmentComponent } from 'src/app/intake-assesment/intake-assesment.component';
import { PaymentCardComponent } from 'src/app/payment-card/payment-card.component';
import { CardPorgressComponent } from 'src/app/card-porgress/card-porgress.component';
import { VideoFrameComponent } from 'src/app/video-frame/video-frame.component';
import { VideoItemsComponent } from 'src/app/video-items/video-items.component';
import { InfoComponent } from 'src/app/info/info.component';
import { AssesmentCardComponent } from 'src/app/assesment-card/assesment-card.component';
import { PublicProfileComponent } from '../public-profile/public-profile.component';
import { CourseImageComponent } from 'src/app/course-image/course-image.component';
import { CourseBgComponent } from 'src/app/course-bg/course-bg.component';
import { ParallaxDirective } from 'src/app/parallax.directive';
import { LandingComponent } from '../landing/landing.component';
import { AnimationOneComponent } from 'src/app/animation-one/animation-one.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { CarouselModule } from 'primeng/carousel';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { KnobModule } from 'primeng/knob';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputMaskModule } from 'primeng/inputmask';
import { AvatarModule } from 'primeng/avatar';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { SkeletonModule } from 'primeng/skeleton';
import { AccordionModule } from 'primeng/accordion';
import { AssignmentItemComponent } from 'src/app/assignment-item/assignment-item.component';
import { TextItemComponent } from 'src/app/text-item/text-item.component';
import { SidebarComponent } from 'src/app/sidebar/sidebar.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { NotificationComponent } from '../notification/notification.component';
import { ImageItemComponent } from 'src/app/image-item/image-item.component';
import { PdfItemComponent } from 'src/app/pdf-item/pdf-item.component';
import { QuizItemComponent } from 'src/app/quiz-item/quiz-item.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { NotificationPageComponent } from 'src/app/notification-page/notification-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    CoursesComponent,
    MyLearningComponent,
    VideoComponent,
    CourseDetailComponent,
    HeroComponent,
    FooterComponent,
    CourseCardComponent,
    CardProgressComponent,
    CourseSectionComponent,
    DiversitySectionComponent,
    CarouselComponent,
    RegistrationComponent,
    WelcomeComponent,
    ExploreComponent,
    HeroTwoComponent,
    HeroThreeComponent,
    HeaderTwoComponent,
    CourseContentComponent,
    ReviewsComponent,
    PricingCardComponent,
    AdultHeroComponent,
    ChildrenHeroComponent,
    YoungHeroComponent,
    BaseComponent,
    ModalComponent,
    FooterAdultComponent,
    FooterTwoComponent,
    ChildHeroComponent,
    AboutProgramComponent,
    CourseHeroComponent,
    FooterBottomComponent,
    QuizComponent,
    VideoModalComponent,
    TopRatedComponent,
    RecommendedComponent,
    LearningCardComponent,
    MenuComponent,
    AccountComponent,
    ProfileComponent,
    PortfolioComponent,
    PortfolioHeroComponent,
    PortfolioCardComponent,
    CartComponent,
    CartMenuComponent,
    NotificationMenuComponent,
    IntakeAssesmentComponent,
    PaymentCardComponent,
    CardPorgressComponent,
    VideoFrameComponent,
    VideoItemsComponent,
    InfoComponent,
    AssesmentCardComponent,
    PublicProfileComponent,
    CourseImageComponent,
    CourseBgComponent,
    ParallaxDirective,
    LandingComponent,
    AnimationOneComponent,
    AssignmentItemComponent,
    TextItemComponent,
    SidebarComponent,
    NotificationComponent,
    ImageItemComponent,
    PdfItemComponent,
    QuizItemComponent,
    NotificationPageComponent,

  ],
  imports: [
    CommonModule,
    ToggleButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SidebarModule,
    RippleModule,
    CarouselModule,
    CheckboxModule,
    InputSwitchModule,
    DropdownModule,
    TabViewModule,
    TableModule,
    ProgressBarModule,
    DialogModule,
    KnobModule,
    MultiSelectModule,
    SelectButtonModule,
    RadioButtonModule,
    InputMaskModule,
    NgxPayPalModule,
    MessagesModule,
    AvatarModule,
    PasswordModule,
    BadgeModule,
    InputTextModule,
    CheckboxModule,
    ChipModule,
    TagModule,
    SkeletonModule,
    AccordionModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardLayoutModule {}
