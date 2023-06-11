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
export class QueryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getQueries
   */
  static readonly GetQueriesPath = '/query/{queryDomainId}/{queryDomain}';

  /**
   * Get Queries.
   *
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
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<{
'adminName'?: string;
'queryDate'?: string;
'query'?: string;
'querySubject'?: string;
'responseDate'?: string;
'response'?: string;
'queryId'?: string;
}>>> {

    const rb = new RequestBuilder(this.rootUrl, QueryService.GetQueriesPath, 'get');
    if (params) {
      rb.path('queryDomainId', params.queryDomainId, {});
      rb.path('queryDomain', params.queryDomain, {});
      rb.query('isResponded', params.isResponded, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
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
   * Get Queries.
   *
   * Get Queries
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQueries$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQueries(params: {
    queryDomainId: string;
    queryDomain: 'assignment';
    isResponded?: true | false;
  },
  context?: HttpContext

): Observable<Array<{
'adminName'?: string;
'queryDate'?: string;
'query'?: string;
'querySubject'?: string;
'responseDate'?: string;
'response'?: string;
'queryId'?: string;
}>> {

    return this.getQueries$Response(params,context).pipe(
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
   * Path part for operation createQuery
   */
  static readonly CreateQueryPath = '/query/{queryDomainId}/{queryDomain}';

  /**
   * Create Query.
   *
   * Create Query
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createQuery()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createQuery$Response(params: {
    queryDomainId: string;
    queryDomain: 'assignment';
    body?: {
'query': string;
'querySubject': string;
'queryId': string;
'learnerId': string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, QueryService.CreateQueryPath, 'post');
    if (params) {
      rb.path('queryDomainId', params.queryDomainId, {});
      rb.path('queryDomain', params.queryDomain, {});
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
   * Create Query.
   *
   * Create Query
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createQuery$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createQuery(params: {
    queryDomainId: string;
    queryDomain: 'assignment';
    body?: {
'query': string;
'querySubject': string;
'queryId': string;
'learnerId': string;
}
  },
  context?: HttpContext

): Observable<void> {

    return this.createQuery$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation respondToQuery
   */
  static readonly RespondToQueryPath = '/query/{queryDomainId}/{queryDomain}';

  /**
   * Respond to Query.
   *
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
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, QueryService.RespondToQueryPath, 'patch');
    if (params) {
      rb.path('queryDomainId', params.queryDomainId, {});
      rb.path('queryDomain', params.queryDomain, {});
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
   * Respond to Query.
   *
   * Respond to a Query
   *
   * This method provides access only to the response body.
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
  },
  context?: HttpContext

): Observable<void> {

    return this.respondToQuery$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
