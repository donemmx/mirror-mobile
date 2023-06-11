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



/**
 * Apis for fetching Countries details
 */
@Injectable({
  providedIn: 'root',
})
export class CountryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllCountries
   */
  static readonly GetAllCountriesPath = '/countries';

  /**
   * Get Countries.
   *
   * Get All Countries
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCountries()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCountries$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<{
'countryId'?: string;
'name'?: string;
'capital'?: string;
'callingCodes'?: Array<any>;
'countryCode'?: string;
'currencies'?: Array<any>;
}>>> {

    const rb = new RequestBuilder(this.rootUrl, CountryService.GetAllCountriesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<{
        'countryId'?: string;
        'name'?: string;
        'capital'?: string;
        'callingCodes'?: Array<any>;
        'countryCode'?: string;
        'currencies'?: Array<any>;
        }>>;
      })
    );
  }

  /**
   * Get Countries.
   *
   * Get All Countries
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllCountries$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCountries(params?: {
  },
  context?: HttpContext

): Observable<Array<{
'countryId'?: string;
'name'?: string;
'capital'?: string;
'callingCodes'?: Array<any>;
'countryCode'?: string;
'currencies'?: Array<any>;
}>> {

    return this.getAllCountries$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<{
'countryId'?: string;
'name'?: string;
'capital'?: string;
'callingCodes'?: Array<any>;
'countryCode'?: string;
'currencies'?: Array<any>;
}>>) => r.body as Array<{
'countryId'?: string;
'name'?: string;
'capital'?: string;
'callingCodes'?: Array<any>;
'countryCode'?: string;
'currencies'?: Array<any>;
}>)
    );
  }

  /**
   * Path part for operation getAllStatesByCountryId
   */
  static readonly GetAllStatesByCountryIdPath = '/country/{countryId}';

  /**
   * Get States.
   *
   * Get All States By Country
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllStatesByCountryId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllStatesByCountryId$Response(params: {
    countryId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<{
'countryId'?: string;
'stateId'?: string;
'name'?: string;
'stateCode'?: string;
}>>> {

    const rb = new RequestBuilder(this.rootUrl, CountryService.GetAllStatesByCountryIdPath, 'get');
    if (params) {
      rb.path('countryId', params.countryId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<{
        'countryId'?: string;
        'stateId'?: string;
        'name'?: string;
        'stateCode'?: string;
        }>>;
      })
    );
  }

  /**
   * Get States.
   *
   * Get All States By Country
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllStatesByCountryId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllStatesByCountryId(params: {
    countryId: string;
  },
  context?: HttpContext

): Observable<Array<{
'countryId'?: string;
'stateId'?: string;
'name'?: string;
'stateCode'?: string;
}>> {

    return this.getAllStatesByCountryId$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<{
'countryId'?: string;
'stateId'?: string;
'name'?: string;
'stateCode'?: string;
}>>) => r.body as Array<{
'countryId'?: string;
'stateId'?: string;
'name'?: string;
'stateCode'?: string;
}>)
    );
  }

}
