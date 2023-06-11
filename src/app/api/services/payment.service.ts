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

import { Currency } from '../models/currency';


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
   * Path part for operation registerPaystackPayment
   */
  static readonly RegisterPaystackPaymentPath = '/paystack/{paystackId}/process';

  /**
   * Register Payment.
   *
   * Register Paystack Payment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerPaystackPayment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerPaystackPayment$Response(params: {
    paystackId: string;
    body?: {
'courseIds': Array<any>;
'method'?: 'free' | 'paystack' | 'paypal';
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
'amount'?: number;
'callbackUrl'?: string;
'email'?: string;
'reference'?: string;
'product'?: string;
'buyer'?: string;
'key'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentService.RegisterPaystackPaymentPath, 'post');
    if (params) {
      rb.path('paystackId', params.paystackId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'amount'?: number;
        'callbackUrl'?: string;
        'email'?: string;
        'reference'?: string;
        'product'?: string;
        'buyer'?: string;
        'key'?: string;
        }>;
      })
    );
  }

  /**
   * Register Payment.
   *
   * Register Paystack Payment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerPaystackPayment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerPaystackPayment(params: {
    paystackId: string;
    body?: {
'courseIds': Array<any>;
'method'?: 'free' | 'paystack' | 'paypal';
}
  },
  context?: HttpContext

): Observable<{
'amount'?: number;
'callbackUrl'?: string;
'email'?: string;
'reference'?: string;
'product'?: string;
'buyer'?: string;
'key'?: string;
}> {

    return this.registerPaystackPayment$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
'amount'?: number;
'callbackUrl'?: string;
'email'?: string;
'reference'?: string;
'product'?: string;
'buyer'?: string;
'key'?: string;
}>) => r.body as {
'amount'?: number;
'callbackUrl'?: string;
'email'?: string;
'reference'?: string;
'product'?: string;
'buyer'?: string;
'key'?: string;
})
    );
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
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentService.PaystackCallbackPath, 'get');
    if (params) {
      rb.path('paystackId', params.paystackId, {});
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
   * Paystack Callback.
   *
   * Paystack Payment Callback
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paystackCallback$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paystackCallback(params: {
    paystackId: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.paystackCallback$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getExchangeRateByCurrency
   */
  static readonly GetExchangeRateByCurrencyPath = '/exchange-rate';

  /**
   * Get Exchange Rate.
   *
   * Get Exchange Rate by Currency
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getExchangeRateByCurrency()` instead.
   *
   * This method doesn't expect any request body.
   */
  getExchangeRateByCurrency$Response(params: {
    paystackId: string;
    currency?: 'NGN' | 'EUR' | 'GBP' | 'JPY' | 'ZAR' | 'CNY';
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Currency>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentService.GetExchangeRateByCurrencyPath, 'get');
    if (params) {
      rb.path('paystackId', params.paystackId, {});
      rb.query('currency', params.currency, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Currency>;
      })
    );
  }

  /**
   * Get Exchange Rate.
   *
   * Get Exchange Rate by Currency
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getExchangeRateByCurrency$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getExchangeRateByCurrency(params: {
    paystackId: string;
    currency?: 'NGN' | 'EUR' | 'GBP' | 'JPY' | 'ZAR' | 'CNY';
  },
  context?: HttpContext

): Observable<Currency> {

    return this.getExchangeRateByCurrency$Response(params,context).pipe(
      map((r: StrictHttpResponse<Currency>) => r.body as Currency)
    );
  }

  /**
   * Path part for operation addExchangeRate
   */
  static readonly AddExchangeRatePath = '/exchange-rate';

  /**
   * Add Exchange Rate.
   *
   * Add Exchange Rate i.e. how much of your currency amounts to 1 dollar. For example 721.0 naira makes a dollar, so I will pass 721 as exchangeRate and NGN as currency
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addExchangeRate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addExchangeRate$Response(params: {
    paystackId: string;
    body?: Currency
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentService.AddExchangeRatePath, 'post');
    if (params) {
      rb.path('paystackId', params.paystackId, {});
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
   * Add Exchange Rate.
   *
   * Add Exchange Rate i.e. how much of your currency amounts to 1 dollar. For example 721.0 naira makes a dollar, so I will pass 721 as exchangeRate and NGN as currency
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addExchangeRate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addExchangeRate(params: {
    paystackId: string;
    body?: Currency
  },
  context?: HttpContext

): Observable<void> {

    return this.addExchangeRate$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAllExchangeRates
   */
  static readonly GetAllExchangeRatesPath = '/exchange-rate/all';

  /**
   * Get All Exchange Rates.
   *
   * Get All Exchange Rates
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllExchangeRates()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllExchangeRates$Response(params?: {
    currency?: 'NGN' | 'EUR' | 'GBP' | 'JPY' | 'ZAR' | 'CNY';
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Currency>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentService.GetAllExchangeRatesPath, 'get');
    if (params) {
      rb.query('currency', params.currency, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Currency>;
      })
    );
  }

  /**
   * Get All Exchange Rates.
   *
   * Get All Exchange Rates
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllExchangeRates$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllExchangeRates(params?: {
    currency?: 'NGN' | 'EUR' | 'GBP' | 'JPY' | 'ZAR' | 'CNY';
  },
  context?: HttpContext

): Observable<Currency> {

    return this.getAllExchangeRates$Response(params,context).pipe(
      map((r: StrictHttpResponse<Currency>) => r.body as Currency)
    );
  }

}
