import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CoursesComponent } from '../courses/courses.component';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { MyLearningComponent } from '../my-learning/my-learning.component';
import { AuthGuard } from 'src/app/services/auth.guard';
import { AccountComponent } from 'src/app/account/account.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { PublicProfileComponent } from '../public-profile/public-profile.component';
import { IntakeAssesmentComponent } from 'src/app/intake-assesment/intake-assesment.component';
import { QuizComponent } from '../quiz/quiz.component';
import { CartComponent } from '../cart/cart.component';
import { ProfileComponent } from '../profile/profile.component';
import { VideoComponent } from '../video/video.component';
import { RegistrationComponent } from '../registration/registration.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { SidebarComponent } from 'src/app/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'course-detail/:id',
        component: CourseDetailComponent,
      },
      {
        path: 'my-learning',
        component: MyLearningComponent,
      },
      {
        path: 'account',
        component: SidebarComponent,
      },
      {
        path: 'my-account',
        component: AccountComponent,
      },
      {
        path: 'portfolio',
        component: PortfolioComponent,
      },
      {
        path: 'public-profile',
        component: PublicProfileComponent,
      },
      {
        path: 'intake-assesment',
        component: IntakeAssesmentComponent,
      },
      {
        path: 'quiz',
        component: QuizComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'video/:id',
        component: VideoComponent,
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
      },

      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
