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
 * Apis for making Payments
 */
@Injectable({
  providedIn: 'root',
})
export class PaymentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation paystackCallback
   */
  static readonly PaystackCallbackPath = '/paystack/{paystackId}/callback';

  /**
   * Paystack Callback.
   *
   * Paystack Payment Callback
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paystackCallback()` instead.
   *
   * This method doesn't expect any request body.
   */
  paystackCallback$Response(params: {
    paystackId: string;
  }): Observable<StrictHttpResponse<{
'paymentLink'?: string;
'payId'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentService.PaystackCallbackPath, 'post');
    if (params) {
      rb.path('paystackId', params.paystackId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'paymentLink'?: string;
        'payId'?: string;
        }>;
      })
    );
  }

  /**
   * Paystack Callback.
   *
   * Paystack Payment Callback
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `paystackCallback$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paystackCallback(params: {
    paystackId: string;
  }): Observable<{
'paymentLink'?: string;
'payId'?: string;
}> {

    return this.paystackCallback$Response(params).pipe(
      map((r: StrictHttpResponse<{
'paymentLink'?: string;
'payId'?: string;
}>) => r.body as {
'paymentLink'?: string;
'payId'?: string;
})
    );
  }

}
