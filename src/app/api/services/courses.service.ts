/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Chapter } from '../models/chapter';
import { Course } from '../models/course';
import { CoursePackage } from '../models/course-package';
import { Learner } from '../models/learner';
import { PricePlan } from '../models/price-plan';
import { SubmittedAssignment } from '../models/submitted-assignment';
import { Upload } from '../models/upload';


/**
 * Apis for the Courses
 */
@Injectable({
  providedIn: 'root',
})
export class CoursesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllLearnersEnrolledInCourse
   */
  static readonly GetAllLearnersEnrolledInCoursePath = '/learners/course/{courseId}';

  /**
   * Get All Learners Enrolled In Course.
   *
   * Get All Learners Enrolled In Course
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllLearnersEnrolledInCourse()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLearnersEnrolledInCourse$Response(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Learner>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.GetAllLearnersEnrolledInCoursePath, 'get');
    if (params) {
      rb.path('courseId', params.courseId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Learner>;
      })
    );
  }

  /**
   * Get All Learners Enrolled In Course.
   *
   * Get All Learners Enrolled In Course
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllLearnersEnrolledInCourse$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLearnersEnrolledInCourse(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<Learner> {

    return this.getAllLearnersEnrolledInCourse$Response(params,context).pipe(
      map((r: StrictHttpResponse<Learner>) => r.body as Learner)
    );
  }

  /**
   * Path part for operation getCourse
   */
  static readonly GetCoursePath = '/course/{courseId}';

  /**
   * Get Course.
   *
   * Get a Course
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCourse()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourse$Response(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Course>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.GetCoursePath, 'get');
    if (params) {
      rb.path('courseId', params.courseId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Course>;
      })
    );
  }

  /**
   * Get Course.
   *
   * Get a Course
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCourse$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourse(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<Course> {

    return this.getCourse$Response(params,context).pipe(
      map((r: StrictHttpResponse<Course>) => r.body as Course)
    );
  }

  /**
   * Path part for operation createCourse
   */
  static readonly CreateCoursePath = '/course/{courseId}';

  /**
   * Create Course.
   *
   * create a Course
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCourse()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCourse$Response(params: {
    courseId: string;
    body?: Course
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.CreateCoursePath, 'post');
    if (params) {
      rb.path('courseId', params.courseId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Create Course.
   *
   * create a Course
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createCourse$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCourse(params: {
    courseId: string;
    body?: Course
  },
  context?: HttpContext

): Observable<void> {

    return this.createCourse$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getCoursePackage
   */
  static readonly GetCoursePackagePath = '/course-package/{coursePackageId}';

  /**
   * Get Course Package.
   *
   * Get a Course Package
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCoursePackage()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCoursePackage$Response(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CoursePackage>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.GetCoursePackagePath, 'get');
    if (params) {
      rb.path('courseId', params.courseId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CoursePackage>;
      })
    );
  }

  /**
   * Get Course Package.
   *
   * Get a Course Package
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCoursePackage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCoursePackage(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<CoursePackage> {

    return this.getCoursePackage$Response(params,context).pipe(
      map((r: StrictHttpResponse<CoursePackage>) => r.body as CoursePackage)
    );
  }

  /**
   * Path part for operation createCoursePackage
   */
  static readonly CreateCoursePackagePath = '/course-package/{coursePackageId}';

  /**
   * Create Course Package.
   *
   * create a Course Package
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCoursePackage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCoursePackage$Response(params: {
    courseId: string;
    body?: CoursePackage
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.CreateCoursePackagePath, 'post');
    if (params) {
      rb.path('courseId', params.courseId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Create Course Package.
   *
   * create a Course Package
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createCoursePackage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCoursePackage(params: {
    courseId: string;
    body?: CoursePackage
  },
  context?: HttpContext

): Observable<void> {

    return this.createCoursePackage$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAllCourses
   */
  static readonly GetAllCoursesPath = '/courses';

  /**
   * Get All Courses.
   *
   * Get All Courses
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCourses()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCourses$Response(params?: {
    isPublished?: true | false;
    courseCategory?: 'identity' | 'education' | 'spiritual';
    ageCategory?: 'children' | 'young adult' | 'adult';
    title?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
'totalRecords'?: number;
'data'?: Array<Course>;
}>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.GetAllCoursesPath, 'get');
    if (params) {
      rb.query('isPublished', params.isPublished, {});
      rb.query('courseCategory', params.courseCategory, {});
      rb.query('ageCategory', params.ageCategory, {});
      rb.query('title', params.title, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'totalRecords'?: number;
        'data'?: Array<Course>;
        }>;
      })
    );
  }

  /**
   * Get All Courses.
   *
   * Get All Courses
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllCourses$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCourses(params?: {
    isPublished?: true | false;
    courseCategory?: 'identity' | 'education' | 'spiritual';
    ageCategory?: 'children' | 'young adult' | 'adult';
    title?: string;
  },
  context?: HttpContext

): Observable<{
'totalRecords'?: number;
'data'?: Array<Course>;
}> {

    return this.getAllCourses$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
'totalRecords'?: number;
'data'?: Array<Course>;
}>) => r.body as {
'totalRecords'?: number;
'data'?: Array<Course>;
})
    );
  }

  /**
   * Path part for operation getChaptersByCourseId
   */
  static readonly GetChaptersByCourseIdPath = '/course/{courseId}/chapter';

  /**
   * Get Course Chapters.
   *
   * Get Chapters By Course ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getChaptersByCourseId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChaptersByCourseId$Response(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Chapter>>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.GetChaptersByCourseIdPath, 'get');
    if (params) {
      rb.path('courseId', params.courseId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Chapter>>;
      })
    );
  }

  /**
   * Get Course Chapters.
   *
   * Get Chapters By Course ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getChaptersByCourseId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChaptersByCourseId(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<Array<Chapter>> {

    return this.getChaptersByCourseId$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Chapter>>) => r.body as Array<Chapter>)
    );
  }

  /**
   * Path part for operation getChaptersByCourseIdForLearners
   */
  static readonly GetChaptersByCourseIdForLearnersPath = '/course/{courseId}/chapter/learners';

  /**
   * Get Course Chapters.
   *
   * Get Chapters By Course ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getChaptersByCourseIdForLearners()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChaptersByCourseIdForLearners$Response(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Chapter>>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.GetChaptersByCourseIdForLearnersPath, 'get');
    if (params) {
      rb.path('courseId', params.courseId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Chapter>>;
      })
    );
  }

  /**
   * Get Course Chapters.
   *
   * Get Chapters By Course ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getChaptersByCourseIdForLearners$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChaptersByCourseIdForLearners(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<Array<Chapter>> {

    return this.getChaptersByCourseIdForLearners$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Chapter>>) => r.body as Array<Chapter>)
    );
  }

  /**
   * Path part for operation getChaptersForLoggedInLearners
   */
  static readonly GetChaptersForLoggedInLearnersPath = '/course/{courseId}/chapter/learners/logged-in';

  /**
   * Get Course Chapters.
   *
   * Get Chapters By Course ID For Logged In Learners
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getChaptersForLoggedInLearners()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChaptersForLoggedInLearners$Response(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Chapter>>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.GetChaptersForLoggedInLearnersPath, 'get');
    if (params) {
      rb.path('courseId', params.courseId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Chapter>>;
      })
    );
  }

  /**
   * Get Course Chapters.
   *
   * Get Chapters By Course ID For Logged In Learners
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getChaptersForLoggedInLearners$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChaptersForLoggedInLearners(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<Array<Chapter>> {

    return this.getChaptersForLoggedInLearners$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Chapter>>) => r.body as Array<Chapter>)
    );
  }

  /**
   * Path part for operation updateSequentialLearningStatus
   */
  static readonly UpdateSequentialLearningStatusPath = '/course/{courseId}/sequential-learning/status';

  /**
   * Enable/Disable Sequential learning.
   *
   * Enable or Disable Sequential Course Learning
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSequentialLearningStatus()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSequentialLearningStatus$Response(params: {
    courseId: string;
    body?: {
'status': true | false;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.UpdateSequentialLearningStatusPath, 'patch');
    if (params) {
      rb.path('courseId', params.courseId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Enable/Disable Sequential learning.
   *
   * Enable or Disable Sequential Course Learning
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSequentialLearningStatus$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSequentialLearningStatus(params: {
    courseId: string;
    body?: {
'status': true | false;
}
  },
  context?: HttpContext

): Observable<void> {

    return this.updateSequentialLearningStatus$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getPricePlanByCourseId
   */
  static readonly GetPricePlanByCourseIdPath = '/pricing-plan/{courseId}';

  /**
   * Get Price Plan.
   *
   * Get Course Price Plan
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPricePlanByCourseId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPricePlanByCourseId$Response(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PricePlan>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.GetPricePlanByCourseIdPath, 'get');
    if (params) {
      rb.path('courseId', params.courseId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PricePlan>;
      })
    );
  }

  /**
   * Get Price Plan.
   *
   * Get Course Price Plan
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPricePlanByCourseId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPricePlanByCourseId(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<PricePlan> {

    return this.getPricePlanByCourseId$Response(params,context).pipe(
      map((r: StrictHttpResponse<PricePlan>) => r.body as PricePlan)
    );
  }

  /**
   * Path part for operation createPricePlan
   */
  static readonly CreatePricePlanPath = '/pricing-plan/{courseId}';

  /**
   * Create Price Plan.
   *
   * Create Course Pricing Plan
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPricePlan()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPricePlan$Response(params: {
    courseId: string;
    body?: PricePlan
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.CreatePricePlanPath, 'post');
    if (params) {
      rb.path('courseId', params.courseId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Create Price Plan.
   *
   * Create Course Pricing Plan
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPricePlan$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPricePlan(params: {
    courseId: string;
    body?: PricePlan
  },
  context?: HttpContext

): Observable<void> {

    return this.createPricePlan$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation setDefaultPricePlan
   */
  static readonly SetDefaultPricePlanPath = '/pricing-plan/{pricePlanId}/set-default';

  /**
   * Set Default Price Plan.
   *
   * Set Course Default Pricing Plan
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setDefaultPricePlan()` instead.
   *
   * This method doesn't expect any request body.
   */
  setDefaultPricePlan$Response(params: {
    pricePlanId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.SetDefaultPricePlanPath, 'patch');
    if (params) {
      rb.path('pricePlanId', params.pricePlanId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Set Default Price Plan.
   *
   * Set Course Default Pricing Plan
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `setDefaultPricePlan$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  setDefaultPricePlan(params: {
    pricePlanId: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.setDefaultPricePlan$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getPricePlan
   */
  static readonly GetPricePlanPath = '/pricing-plan/{pricePlanId}';

  /**
   * Get Price Plan.
   *
   * Get Course Price Plan
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPricePlan()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPricePlan$Response(params: {
    pricePlanId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PricePlan>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.GetPricePlanPath, 'get');
    if (params) {
      rb.path('pricePlanId', params.pricePlanId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PricePlan>;
      })
    );
  }

  /**
   * Get Price Plan.
   *
   * Get Course Price Plan
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPricePlan$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPricePlan(params: {
    pricePlanId: string;
  },
  context?: HttpContext

): Observable<PricePlan> {

    return this.getPricePlan$Response(params,context).pipe(
      map((r: StrictHttpResponse<PricePlan>) => r.body as PricePlan)
    );
  }

  /**
   * Path part for operation uploadCourseCover
   */
  static readonly UploadCourseCoverPath = '/course/add-course-cover';

  /**
   * Upload Course Cover.
   *
   * Upload Course Cover Picture
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadCourseCover()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadCourseCover$Response(params?: {
    body?: Upload & {
'courseId': string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.UploadCourseCoverPath, 'patch');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Upload Course Cover.
   *
   * Upload Course Cover Picture
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadCourseCover$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadCourseCover(params?: {
    body?: Upload & {
'courseId': string;
}
  },
  context?: HttpContext

): Observable<void> {

    return this.uploadCourseCover$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getCourseCover
   */
  static readonly GetCourseCoverPath = '/course/{courseId}/course-cover';

  /**
   * Get Course Cover.
   *
   * Get Course Cover Picture
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCourseCover()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourseCover$Response(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.GetCourseCoverPath, 'get');
    if (params) {
      rb.path('courseId', params.courseId, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/octet-stream',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * Get Course Cover.
   *
   * Get Course Cover Picture
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCourseCover$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourseCover(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<Blob> {

    return this.getCourseCover$Response(params,context).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation publishCourseContent
   */
  static readonly PublishCourseContentPath = '/course/{courseId}/publish';

  /**
   * Publish Course.
   *
   * Publish Course content
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `publishCourseContent()` instead.
   *
   * This method doesn't expect any request body.
   */
  publishCourseContent$Response(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.PublishCourseContentPath, 'patch');
    if (params) {
      rb.path('courseId', params.courseId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Publish Course.
   *
   * Publish Course content
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `publishCourseContent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  publishCourseContent(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.publishCourseContent$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation removeCourseContent
   */
  static readonly RemoveCourseContentPath = '/course/{courseId}/remove';

  /**
   * Remove Course.
   *
   * Remove Course content
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeCourseContent()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeCourseContent$Response(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.RemoveCourseContentPath, 'delete');
    if (params) {
      rb.path('courseId', params.courseId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Remove Course.
   *
   * Remove Course content
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeCourseContent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeCourseContent(params: {
    courseId: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.removeCourseContent$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAssignmentScoresByAssignmentId
   */
  static readonly GetAssignmentScoresByAssignmentIdPath = '/assignment/{assignmentId}/scores';

  /**
   * Get Assignment Scores.
   *
   * Get Assignment Scores By AssignmentId
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAssignmentScoresByAssignmentId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAssignmentScoresByAssignmentId$Response(params: {
    assignmentId: string;
    skip?: number;
    limit?: number;
    status?: 'pending' | 'approved' | 'rejected' | 'scored';
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
'totalRecords'?: number;
'data'?: Array<{
'assignmentId'?: string;
'creatorId'?: string;
'submittedAssignmentId'?: string;
'comments'?: string;
'statusHistory'?: Array<any>;
'status'?: 'pending' | 'approved' | 'rejected' | 'scored';
}>;
}>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.GetAssignmentScoresByAssignmentIdPath, 'get');
    if (params) {
      rb.path('assignmentId', params.assignmentId, {});
      rb.query('skip', params.skip, {});
      rb.query('limit', params.limit, {});
      rb.query('status', params.status, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'totalRecords'?: number;
        'data'?: Array<{
        'assignmentId'?: string;
        'creatorId'?: string;
        'submittedAssignmentId'?: string;
        'comments'?: string;
        'statusHistory'?: Array<any>;
        'status'?: 'pending' | 'approved' | 'rejected' | 'scored';
        }>;
        }>;
      })
    );
  }

  /**
   * Get Assignment Scores.
   *
   * Get Assignment Scores By AssignmentId
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAssignmentScoresByAssignmentId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAssignmentScoresByAssignmentId(params: {
    assignmentId: string;
    skip?: number;
    limit?: number;
    status?: 'pending' | 'approved' | 'rejected' | 'scored';
  },
  context?: HttpContext

): Observable<{
'totalRecords'?: number;
'data'?: Array<{
'assignmentId'?: string;
'creatorId'?: string;
'submittedAssignmentId'?: string;
'comments'?: string;
'statusHistory'?: Array<any>;
'status'?: 'pending' | 'approved' | 'rejected' | 'scored';
}>;
}> {

    return this.getAssignmentScoresByAssignmentId$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
'totalRecords'?: number;
'data'?: Array<{
'assignmentId'?: string;
'creatorId'?: string;
'submittedAssignmentId'?: string;
'comments'?: string;
'statusHistory'?: Array<any>;
'status'?: 'pending' | 'approved' | 'rejected' | 'scored';
}>;
}>) => r.body as {
'totalRecords'?: number;
'data'?: Array<{
'assignmentId'?: string;
'creatorId'?: string;
'submittedAssignmentId'?: string;
'comments'?: string;
'statusHistory'?: Array<any>;
'status'?: 'pending' | 'approved' | 'rejected' | 'scored';
}>;
})
    );
  }

  /**
   * Path part for operation addAssignmentScores
   */
  static readonly AddAssignmentScoresPath = '/assignment/{assignmentId}/scores';

  /**
   * Add Assignment Scores.
   *
   * Add Assignment Scores
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addAssignmentScores()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAssignmentScores$Response(params: {
    assignmentId: string;
    skip?: number;
    limit?: number;
    status?: 'pending' | 'approved' | 'rejected' | 'scored';
    body?: {
'score': number;
'reason'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.AddAssignmentScoresPath, 'post');
    if (params) {
      rb.path('assignmentId', params.assignmentId, {});
      rb.query('skip', params.skip, {});
      rb.query('limit', params.limit, {});
      rb.query('status', params.status, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Add Assignment Scores.
   *
   * Add Assignment Scores
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addAssignmentScores$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAssignmentScores(params: {
    assignmentId: string;
    skip?: number;
    limit?: number;
    status?: 'pending' | 'approved' | 'rejected' | 'scored';
    body?: {
'score': number;
'reason'?: string;
}
  },
  context?: HttpContext

): Observable<void> {

    return this.addAssignmentScores$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAssignmentScores
   */
  static readonly GetAssignmentScoresPath = '/assignment/learner/{learnerId}/scores';

  /**
   * Get Assignment Scores.
   *
   * Get Assignment Scores Per Learner
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAssignmentScores()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAssignmentScores$Response(params: {
    learnerId: string;
    skip?: number;
    limit?: number;
    status?: 'pending' | 'approved' | 'rejected' | 'scored';
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SubmittedAssignment>>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.GetAssignmentScoresPath, 'get');
    if (params) {
      rb.path('learnerId', params.learnerId, {});
      rb.query('skip', params.skip, {});
      rb.query('limit', params.limit, {});
      rb.query('status', params.status, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SubmittedAssignment>>;
      })
    );
  }

  /**
   * Get Assignment Scores.
   *
   * Get Assignment Scores Per Learner
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAssignmentScores$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAssignmentScores(params: {
    learnerId: string;
    skip?: number;
    limit?: number;
    status?: 'pending' | 'approved' | 'rejected' | 'scored';
  },
  context?: HttpContext

): Observable<Array<SubmittedAssignment>> {

    return this.getAssignmentScores$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SubmittedAssignment>>) => r.body as Array<SubmittedAssignment>)
    );
  }

  /**
   * Path part for operation getAssessments
   */
  static readonly GetAssessmentsPath = '/assessments';

  /**
   * Get Assessments.
   *
   * Get Assessments Per Learner
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAssessments()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAssessments$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SubmittedAssignment>>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.GetAssessmentsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SubmittedAssignment>>;
      })
    );
  }

  /**
   * Get Assessments.
   *
   * Get Assessments Per Learner
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAssessments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAssessments(params?: {
  },
  context?: HttpContext

): Observable<Array<SubmittedAssignment>> {

    return this.getAssessments$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SubmittedAssignment>>) => r.body as Array<SubmittedAssignment>)
    );
  }

}
