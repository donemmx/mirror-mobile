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

import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllAdmins
   */
  static readonly GetAllAdminsPath = '/admins';

  /**
   * Get All Admins
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllAdmins()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllAdmins$Response(params?: {
    skip?: number;
    limit?: number;
    name?: string;
    email?: string;
    role?: 'super admin' | 'editor' | 'mentor' | 'instructor';
  }): Observable<StrictHttpResponse<{
'totalRecords'?: number;
'data'?: Array<Admin>;
}>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.GetAllAdminsPath, 'get');
    if (params) {
      rb.query('skip', params.skip, {});
      rb.query('limit', params.limit, {});
      rb.query('name', params.name, {});
      rb.query('email', params.email, {});
      rb.query('role', params.role, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'totalRecords'?: number;
        'data'?: Array<Admin>;
        }>;
      })
    );
  }

  /**
   * Get All Admins
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllAdmins$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllAdmins(params?: {
    skip?: number;
    limit?: number;
    name?: string;
    email?: string;
    role?: 'super admin' | 'editor' | 'mentor' | 'instructor';
  }): Observable<{
'totalRecords'?: number;
'data'?: Array<Admin>;
}> {

    return this.getAllAdmins$Response(params).pipe(
      map((r: StrictHttpResponse<{
'totalRecords'?: number;
'data'?: Array<Admin>;
}>) => r.body as {
'totalRecords'?: number;
'data'?: Array<Admin>;
})
    );
  }

  /**
   * Path part for operation getQueries
   */
  static readonly GetQueriesPath = '/query/{queryDomainId}/{queryDomain}';

  /**
   * Get Queries
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQueries()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQueries$Response(params: {
    queryDomainId: string;
    queryDomain: 'assignment';
    isResponded?: true | false;
  }): Observable<StrictHttpResponse<Array<{
'adminName'?: string;
'queryDate'?: string;
'query'?: string;
'querySubject'?: string;
'responseDate'?: string;
'response'?: string;
'queryId'?: string;
}>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.GetQueriesPath, 'get');
    if (params) {
      rb.path('queryDomainId', params.queryDomainId, {});
      rb.path('queryDomain', params.queryDomain, {});
      rb.query('isResponded', params.isResponded, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<{
        'adminName'?: string;
        'queryDate'?: string;
        'query'?: string;
        'querySubject'?: string;
        'responseDate'?: string;
        'response'?: string;
        'queryId'?: string;
        }>>;
      })
    );
  }

  /**
   * Get Queries
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getQueries$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQueries(params: {
    queryDomainId: string;
    queryDomain: 'assignment';
    isResponded?: true | false;
  }): Observable<Array<{
'adminName'?: string;
'queryDate'?: string;
'query'?: string;
'querySubject'?: string;
'responseDate'?: string;
'response'?: string;
'queryId'?: string;
}>> {

    return this.getQueries$Response(params).pipe(
      map((r: StrictHttpResponse<Array<{
'adminName'?: string;
'queryDate'?: string;
'query'?: string;
'querySubject'?: string;
'responseDate'?: string;
'response'?: string;
'queryId'?: string;
}>>) => r.body as Array<{
'adminName'?: string;
'queryDate'?: string;
'query'?: string;
'querySubject'?: string;
'responseDate'?: string;
'response'?: string;
'queryId'?: string;
}>)
    );
  }

  /**
   * Path part for operation respondToQuery
   */
  static readonly RespondToQueryPath = '/query/{queryDomainId}/{queryDomain}';

  /**
   * Respond to a Query
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `respondToQuery()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  respondToQuery$Response(params: {
    queryDomainId: string;
    queryDomain: 'assignment';
    body?: {
'response': string;
'queryId': string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.RespondToQueryPath, 'patch');
    if (params) {
      rb.path('queryDomainId', params.queryDomainId, {});
      rb.path('queryDomain', params.queryDomain, {});
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
   * Respond to a Query
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `respondToQuery$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  respondToQuery(params: {
    queryDomainId: string;
    queryDomain: 'assignment';
    body?: {
'response': string;
'queryId': string;
}
  }): Observable<void> {

    return this.respondToQuery$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
