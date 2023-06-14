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



/**
 * Apis for assessing Forums
 */
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
  }): Observable<StrictHttpResponse<{
'notificationId'?: string;
'userId'?: string;
'title'?: string;
'description'?: string;
'descriptionSummary'?: string;
'date'?: string;
'isSeen'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.GetAllNotificationsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'notificationId'?: string;
        'userId'?: string;
        'title'?: string;
        'description'?: string;
        'descriptionSummary'?: string;
        'date'?: string;
        'isSeen'?: boolean;
        }>;
      })
    );
  }

  /**
   * Get All Notifications.
   *
   * Get All Notifications
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllNotifications$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllNotifications(params?: {
  }): Observable<{
'notificationId'?: string;
'userId'?: string;
'title'?: string;
'description'?: string;
'descriptionSummary'?: string;
'date'?: string;
'isSeen'?: boolean;
}> {

    return this.getAllNotifications$Response(params).pipe(
      map((r: StrictHttpResponse<{
'notificationId'?: string;
'userId'?: string;
'title'?: string;
'description'?: string;
'descriptionSummary'?: string;
'date'?: string;
'isSeen'?: boolean;
}>) => r.body as {
'notificationId'?: string;
'userId'?: string;
'title'?: string;
'description'?: string;
'descriptionSummary'?: string;
'date'?: string;
'isSeen'?: boolean;
})
    );
  }

  /**
   * Path part for operation getAllNotifications_1
   */
  static readonly GetAllNotifications_1Path = '/notification/{notificationId}';

  /**
   * Get All Notifications.
   *
   * Get All Notifications
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllNotifications_1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllNotifications_1$Response(params: {
    notificationId: string;
  }): Observable<StrictHttpResponse<{
'notificationId'?: string;
'userId'?: string;
'title'?: string;
'description'?: string;
'descriptionSummary'?: string;
'date'?: string;
'isSeen'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.GetAllNotifications_1Path, 'get');
    if (params) {
      rb.path('notificationId', params.notificationId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'notificationId'?: string;
        'userId'?: string;
        'title'?: string;
        'description'?: string;
        'descriptionSummary'?: string;
        'date'?: string;
        'isSeen'?: boolean;
        }>;
      })
    );
  }

  /**
   * Get All Notifications.
   *
   * Get All Notifications
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllNotifications_1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllNotifications_1(params: {
    notificationId: string;
  }): Observable<{
'notificationId'?: string;
'userId'?: string;
'title'?: string;
'description'?: string;
'descriptionSummary'?: string;
'date'?: string;
'isSeen'?: boolean;
}> {

    return this.getAllNotifications_1$Response(params).pipe(
      map((r: StrictHttpResponse<{
'notificationId'?: string;
'userId'?: string;
'title'?: string;
'description'?: string;
'descriptionSummary'?: string;
'date'?: string;
'isSeen'?: boolean;
}>) => r.body as {
'notificationId'?: string;
'userId'?: string;
'title'?: string;
'description'?: string;
'descriptionSummary'?: string;
'date'?: string;
'isSeen'?: boolean;
})
    );
  }

}
