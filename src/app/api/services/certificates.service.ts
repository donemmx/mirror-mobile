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
export class CertificatesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation generateCourseCertificate
   */
  static readonly GenerateCourseCertificatePath = '/course/course/certificate';

  /**
   * Generate Course Certificate.
   *
   * Generate Course Certificate
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generateCourseCertificate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generateCourseCertificate$Response(params?: {
    body?: {
'learnerName': string;
'courseName': string;
'dateOfCompletion': string;
'serialNumber': string;
'dateIssued': string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CertificatesService.GenerateCourseCertificatePath, 'post');
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
   * Generate Course Certificate.
   *
   * Generate Course Certificate
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `generateCourseCertificate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generateCourseCertificate(params?: {
    body?: {
'learnerName': string;
'courseName': string;
'dateOfCompletion': string;
'serialNumber': string;
'dateIssued': string;
}
  },
  context?: HttpContext

): Observable<void> {

    return this.generateCourseCertificate$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation generateQuizCertificate
   */
  static readonly GenerateQuizCertificatePath = '/course/quiz/certificate';

  /**
   * Generate Quiz Certificate.
   *
   * Generate Quiz Certificate
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generateQuizCertificate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generateQuizCertificate$Response(params?: {
    body?: {
'learnerName': string;
'quizName': string;
'quizScorePercentage'?: number;
'dateOfCompletion': string;
'serialNumber': string;
'dateIssued': string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CertificatesService.GenerateQuizCertificatePath, 'post');
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
   * Generate Quiz Certificate.
   *
   * Generate Quiz Certificate
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `generateQuizCertificate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generateQuizCertificate(params?: {
    body?: {
'learnerName': string;
'quizName': string;
'quizScorePercentage'?: number;
'dateOfCompletion': string;
'serialNumber': string;
'dateIssued': string;
}
  },
  context?: HttpContext

): Observable<void> {

    return this.generateQuizCertificate$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
