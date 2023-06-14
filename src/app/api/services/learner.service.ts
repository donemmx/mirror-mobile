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


@Injectable({
  providedIn: 'root',
})
export class LearnerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getLearnerCourseCategories
   */
  static readonly GetLearnerCourseCategoriesPath = '/learner/{learnerId}/course-categories';

  /**
   * Get Learner Course Categories.
   *
   * Get Learner Course Categories
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLearnerCourseCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLearnerCourseCategories$Response(params?: {
  }): Observable<StrictHttpResponse<{
'courseCategory'?: Array<any>;
}>> {

    const rb = new RequestBuilder(this.rootUrl, LearnerService.GetLearnerCourseCategoriesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'courseCategory'?: Array<any>;
        }>;
      })
    );
  }

  /**
   * Get Learner Course Categories.
   *
   * Get Learner Course Categories
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getLearnerCourseCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLearnerCourseCategories(params?: {
  }): Observable<{
'courseCategory'?: Array<any>;
}> {

    return this.getLearnerCourseCategories$Response(params).pipe(
      map((r: StrictHttpResponse<{
'courseCategory'?: Array<any>;
}>) => r.body as {
'courseCategory'?: Array<any>;
})
    );
  }

}
