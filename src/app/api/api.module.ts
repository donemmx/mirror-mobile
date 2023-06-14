/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { LearnersService } from './services/learners.service';
import { AdminService } from './services/admin.service';
import { CoursesService } from './services/courses.service';
import { LearnerService } from './services/learner.service';
import { ChaptersService } from './services/chapters.service';
import { CertificatesService } from './services/certificates.service';
import { QueryService } from './services/query.service';
import { PaymentService } from './services/payment.service';
import { CourseProgressService } from './services/course-progress.service';
import { CountryService } from './services/country.service';
import { ForumService } from './services/forum.service';
import { NotificationService } from './services/notification.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    LearnersService,
    AdminService,
    CoursesService,
    LearnerService,
    ChaptersService,
    CertificatesService,
    QueryService,
    PaymentService,
    CourseProgressService,
    CountryService,
    ForumService,
    NotificationService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
