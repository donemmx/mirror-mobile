import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { OtpComponent } from './pages/otp/otp.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardLayoutModule } from './pages/dashboard-layout/dashboard-layout.module';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,  canActivate: [LoginGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,  canActivate: [LoginGuard]
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,  canActivate: [LoginGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent, canActivate: [LoginGuard]
  },
  {
    path: 'otp',
    component: OtpComponent,  canActivate: [LoginGuard]
  },

  {
    path: '',
    loadChildren: () =>
      import('./pages/dashboard-layout/dashboard-layout.module').then(
        (m) => DashboardLayoutModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
