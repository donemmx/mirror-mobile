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


@Injectable({
  providedIn: 'root',
})
export class NotificationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllNotifications
   */
  static readonly GetAllNotificationsPath = '/notifications';

  /**
   * Get All Notifications.
   *
   * Get All Notifications
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllNotifications()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllNotifications$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
'postId'?: string;
'forumId'?: string;
'senderId'?: string;
'name'?: string;
'date'?: string;
'thread'?: Array<any>;
}>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.GetAllNotificationsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'postId'?: string;
        'forumId'?: string;
        'senderId'?: string;
        'name'?: string;
        'date'?: string;
        'thread'?: Array<any>;
        }>;
      })
    );
  }

  /**
   * Get All Notifications.
   *
   * Get All Notifications
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllNotifications$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllNotifications(params?: {
  },
  context?: HttpContext

): Observable<{
'postId'?: string;
'forumId'?: string;
'senderId'?: string;
'name'?: string;
'date'?: string;
'thread'?: Array<any>;
}> {

    return this.getAllNotifications$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
'postId'?: string;
'forumId'?: string;
'senderId'?: string;
'name'?: string;
'date'?: string;
'thread'?: Array<any>;
}>) => r.body as {
'postId'?: string;
'forumId'?: string;
'senderId'?: string;
'name'?: string;
'date'?: string;
'thread'?: Array<any>;
})
    );
  }

}
