/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Course } from '../models/course';


/**
 * Apis for getting Learners Course Progress
 */
@Injectable({
  providedIn: 'root',
})
export class CourseProgressService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation addCourseProgress
   */
  static readonly AddCourseProgressPath = '/course-progress';

  /**
   * Add Course Progress.
   *
   * Add Learner Course Progress
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCourseProgress()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCourseProgress$Response(params?: {
    body?: {
'courseId'?: string;
'chapterId'?: string;
'chapterItemId'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CourseProgressService.AddCourseProgressPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Add Course Progress.
   *
   * Add Learner Course Progress
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addCourseProgress$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCourseProgress(params?: {
    body?: {
'courseId'?: string;
'chapterId'?: string;
'chapterItemId'?: string;
}
  }): Observable<void> {

    return this.addCourseProgress$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getCourseProgress
   */
  static readonly GetCourseProgressPath = '/course-progress/{courseId}';

  /**
   * Get Course Progress.
   *
   * Get Learner's Course Progress
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCourseProgress()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourseProgress$Response(params: {
    courseId: string;
  }): Observable<StrictHttpResponse<{
'learnerId'?: string;
'courseId'?: string;
'dateEnrolledInCourse'?: string;
'courseProgress'?: Array<{
'chapterId'?: string;
'chapterItemName'?: 'assignment' | 'audio' | 'link' | 'pdf' | 'picture' | 'quiz' | 'heading' | 'text';
'chapterItemId'?: string;
'date'?: string;
}>;
'lastAssessedItem'?: Array<any>;
'statusHistory'?: Array<any>;
'status'?: 'enrolled' | 'in progress' | 'completed' | 'certificated';
}>> {

    const rb = new RequestBuilder(this.rootUrl, CourseProgressService.GetCourseProgressPath, 'get');
    if (params) {
      rb.path('courseId', params.courseId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'learnerId'?: string;
        'courseId'?: string;
        'dateEnrolledInCourse'?: string;
        'courseProgress'?: Array<{
        'chapterId'?: string;
        'chapterItemName'?: 'assignment' | 'audio' | 'link' | 'pdf' | 'picture' | 'quiz' | 'heading' | 'text';
        'chapterItemId'?: string;
        'date'?: string;
        }>;
        'lastAssessedItem'?: Array<any>;
        'statusHistory'?: Array<any>;
        'status'?: 'enrolled' | 'in progress' | 'completed' | 'certificated';
        }>;
      })
    );
  }

  /**
   * Get Course Progress.
   *
   * Get Learner's Course Progress
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCourseProgress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourseProgress(params: {
    courseId: string;
  }): Observable<{
'learnerId'?: string;
'courseId'?: string;
'dateEnrolledInCourse'?: string;
'courseProgress'?: Array<{
'chapterId'?: string;
'chapterItemName'?: 'assignment' | 'audio' | 'link' | 'pdf' | 'picture' | 'quiz' | 'heading' | 'text';
'chapterItemId'?: string;
'date'?: string;
}>;
'lastAssessedItem'?: Array<any>;
'statusHistory'?: Array<any>;
'status'?: 'enrolled' | 'in progress' | 'completed' | 'certificated';
}> {

    return this.getCourseProgress$Response(params).pipe(
      map((r: StrictHttpResponse<{
'learnerId'?: string;
'courseId'?: string;
'dateEnrolledInCourse'?: string;
'courseProgress'?: Array<{
'chapterId'?: string;
'chapterItemName'?: 'assignment' | 'audio' | 'link' | 'pdf' | 'picture' | 'quiz' | 'heading' | 'text';
'chapterItemId'?: string;
'date'?: string;
}>;
'lastAssessedItem'?: Array<any>;
'statusHistory'?: Array<any>;
'status'?: 'enrolled' | 'in progress' | 'completed' | 'certificated';
}>) => r.body as {
'learnerId'?: string;
'courseId'?: string;
'dateEnrolledInCourse'?: string;
'courseProgress'?: Array<{
'chapterId'?: string;
'chapterItemName'?: 'assignment' | 'audio' | 'link' | 'pdf' | 'picture' | 'quiz' | 'heading' | 'text';
'chapterItemId'?: string;
'date'?: string;
}>;
'lastAssessedItem'?: Array<any>;
'statusHistory'?: Array<any>;
'status'?: 'enrolled' | 'in progress' | 'completed' | 'certificated';
})
    );
  }

  /**
   * Path part for operation getCoursesByCourseProgress
   */
  static readonly GetCoursesByCourseProgressPath = '/courses/{progressStatus}';

  /**
   * Get Courses By Course Progress.
   *
   * Get Courses By Course Progress
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCoursesByCourseProgress()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCoursesByCourseProgress$Response(params?: {
    progressStatus?: 'enrolled' | 'in progress' | 'completed' | 'certificated';
  }): Observable<StrictHttpResponse<Array<Course>>> {

    const rb = new RequestBuilder(this.rootUrl, CourseProgressService.GetCoursesByCourseProgressPath, 'get');
    if (params) {
      rb.query('progressStatus', params.progressStatus, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Course>>;
      })
    );
  }

  /**
   * Get Courses By Course Progress.
   *
   * Get Courses By Course Progress
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCoursesByCourseProgress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCoursesByCourseProgress(params?: {
    progressStatus?: 'enrolled' | 'in progress' | 'completed' | 'certificated';
  }): Observable<Array<Course>> {

    return this.getCoursesByCourseProgress$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Course>>) => r.body as Array<Course>)
    );
  }

}
