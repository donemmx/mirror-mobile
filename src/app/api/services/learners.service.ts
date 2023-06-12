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

import { AuthToken } from '../models/auth-token';
import { Course } from '../models/course';
import { Learner } from '../models/learner';
import { Upload } from '../models/upload';


/**
 * Apis for the learners
 */
@Injectable({
  providedIn: 'root',
})
export class LearnersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getLearner
   */
  static readonly GetLearnerPath = '/learner/{learnerId}';

  /**
   * Get Learner.
   *
   * Get a Learner
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLearner()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLearner$Response(params: {
    learnerId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Learner>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.GetLearnerPath, 'get');
    if (params) {
      rb.path('learnerId', params.learnerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Learner>;
      })
    );
  }

  /**
   * Get Learner.
   *
   * Get a Learner
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLearner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLearner(params: {
    learnerId: string;
  },
  context?: HttpContext

): Observable<Learner> {

    return this.getLearner$Response(params,context).pipe(
      map((r: StrictHttpResponse<Learner>) => r.body as Learner)
    );
  }

  /**
   * Path part for operation createLearner
   */
  static readonly CreateLearnerPath = '/learner/{learnerId}';

  /**
   * Create Learner.
   *
   * create a Learner
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createLearner()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createLearner$Response(params: {
    learnerId: string;
    body?: Learner
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.CreateLearnerPath, 'post');
    if (params) {
      rb.path('learnerId', params.learnerId, {});
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
   * Create Learner.
   *
   * create a Learner
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createLearner$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createLearner(params: {
    learnerId: string;
    body?: Learner
  },
  context?: HttpContext

): Observable<void> {

    return this.createLearner$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateLearnerInfo
   */
  static readonly UpdateLearnerInfoPath = '/learner/{learnerId}';

  /**
   * Learner Info Update.
   *
   * update Learner Information
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateLearnerInfo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLearnerInfo$Response(params: {
    learnerId: string;
    body?: {
'country': string;
'state': string;
'coaching': true | false;
'identityComponent': true | false;
'educationComponent': true | false;
'spiritualComponent': true | false;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.UpdateLearnerInfoPath, 'patch');
    if (params) {
      rb.path('learnerId', params.learnerId, {});
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
   * Learner Info Update.
   *
   * update Learner Information
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateLearnerInfo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLearnerInfo(params: {
    learnerId: string;
    body?: {
'country': string;
'state': string;
'coaching': true | false;
'identityComponent': true | false;
'educationComponent': true | false;
'spiritualComponent': true | false;
}
  },
  context?: HttpContext

): Observable<void> {

    return this.updateLearnerInfo$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteLearnerAccount
   */
  static readonly DeleteLearnerAccountPath = '/learner/{learnerId}/delete';

  /**
   * Delete Learner.
   *
   * Delete Learner Account
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteLearnerAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLearnerAccount$Response(params: {
    learnerId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.DeleteLearnerAccountPath, 'patch');
    if (params) {
      rb.path('learnerId', params.learnerId, {});
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
   * Delete Learner.
   *
   * Delete Learner Account
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteLearnerAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLearnerAccount(params: {
    learnerId: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteLearnerAccount$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation reinstateLearnerAccount
   */
  static readonly ReinstateLearnerAccountPath = '/learner/{learnerId}/reinstate';

  /**
   * Reinstate Learner.
   *
   * Reinstate Learner Account
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reinstateLearnerAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  reinstateLearnerAccount$Response(params: {
    learnerId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.ReinstateLearnerAccountPath, 'patch');
    if (params) {
      rb.path('learnerId', params.learnerId, {});
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
   * Reinstate Learner.
   *
   * Reinstate Learner Account
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reinstateLearnerAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reinstateLearnerAccount(params: {
    learnerId: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.reinstateLearnerAccount$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation banLearnerAccount
   */
  static readonly BanLearnerAccountPath = '/learner/{learnerId}/ban';

  /**
   * Ban Learner.
   *
   * Ban Learner Account
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `banLearnerAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  banLearnerAccount$Response(params: {
    learnerId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.BanLearnerAccountPath, 'patch');
    if (params) {
      rb.path('learnerId', params.learnerId, {});
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
   * Ban Learner.
   *
   * Ban Learner Account
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `banLearnerAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  banLearnerAccount(params: {
    learnerId: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.banLearnerAccount$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getLearnerProfile
   */
  static readonly GetLearnerProfilePath = '/learner/{learnerId}/profile';

  /**
   * Get Profile.
   *
   * Get Learner Profile
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLearnerProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLearnerProfile$Response(params: {
    learnerId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
'email': string;
'name': string;
'learnerId'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.GetLearnerProfilePath, 'get');
    if (params) {
      rb.path('learnerId', params.learnerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'email': string;
        'name': string;
        'learnerId'?: string;
        }>;
      })
    );
  }

  /**
   * Get Profile.
   *
   * Get Learner Profile
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLearnerProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLearnerProfile(params: {
    learnerId: string;
  },
  context?: HttpContext

): Observable<{
'email': string;
'name': string;
'learnerId'?: string;
}> {

    return this.getLearnerProfile$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
'email': string;
'name': string;
'learnerId'?: string;
}>) => r.body as {
'email': string;
'name': string;
'learnerId'?: string;
})
    );
  }

  /**
   * Path part for operation logInLearner
   */
  static readonly LogInLearnerPath = '/learner-login';

  /**
   * Learner Log in.
   *
   * Log in a Learner
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logInLearner()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logInLearner$Response(params?: {
    body?: {
'email': string;
'password': string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AuthToken>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.LogInLearnerPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthToken>;
      })
    );
  }

  /**
   * Learner Log in.
   *
   * Log in a Learner
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logInLearner$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logInLearner(params?: {
    body?: {
'email': string;
'password': string;
}
  },
  context?: HttpContext

): Observable<AuthToken> {

    return this.logInLearner$Response(params,context).pipe(
      map((r: StrictHttpResponse<AuthToken>) => r.body as AuthToken)
    );
  }

  /**
   * Path part for operation logOutLearner
   */
  static readonly LogOutLearnerPath = '/learner-logout';

  /**
   * Log Learner Out.
   *
   * Log out a Logged in Learner
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logOutLearner()` instead.
   *
   * This method doesn't expect any request body.
   */
  logOutLearner$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.LogOutLearnerPath, 'patch');
    if (params) {
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
   * Log Learner Out.
   *
   * Log out a Logged in Learner
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logOutLearner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logOutLearner(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.logOutLearner$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation validateOtp
   */
  static readonly ValidateOtpPath = '/user/otp/validate';

  /**
   * Validate-OTP.
   *
   * Validate Learner OTP
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validateOtp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  validateOtp$Response(params?: {
    body?: {
'email': string;
'otp': string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AuthToken>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.ValidateOtpPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthToken>;
      })
    );
  }

  /**
   * Validate-OTP.
   *
   * Validate Learner OTP
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `validateOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  validateOtp(params?: {
    body?: {
'email': string;
'otp': string;
}
  },
  context?: HttpContext

): Observable<AuthToken> {

    return this.validateOtp$Response(params,context).pipe(
      map((r: StrictHttpResponse<AuthToken>) => r.body as AuthToken)
    );
  }

  /**
   * Path part for operation generateOtp
   */
  static readonly GenerateOtpPath = '/user/otp/generate';

  /**
   * Generate OTP.
   *
   * Generate Learner OTP
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generateOtp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generateOtp$Response(params?: {
    body?: {
'email': string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.GenerateOtpPath, 'post');
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
   * Generate OTP.
   *
   * Generate Learner OTP
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `generateOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generateOtp(params?: {
    body?: {
'email': string;
}
  },
  context?: HttpContext

): Observable<void> {

    return this.generateOtp$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation resetOtp
   */
  static readonly ResetOtpPath = '/user/otp/reset';

  /**
   * Reset OTP.
   *
   * Reset Learner OTP
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetOtp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetOtp$Response(params?: {
    body?: {
'email': string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.ResetOtpPath, 'post');
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
   * Reset OTP.
   *
   * Reset Learner OTP
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetOtp(params?: {
    body?: {
'email': string;
}
  },
  context?: HttpContext

): Observable<void> {

    return this.resetOtp$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation changePassword
   */
  static readonly ChangePasswordPath = '/user/password/change';

  /**
   * Change Password.
   *
   * Change User Password
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword$Response(params?: {
    body?: {
'password': string;
'confirmPassword': string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.ChangePasswordPath, 'post');
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
   * Change Password.
   *
   * Change User Password
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword(params?: {
    body?: {
'password': string;
'confirmPassword': string;
}
  },
  context?: HttpContext

): Observable<void> {

    return this.changePassword$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation uploadUserPicture
   */
  static readonly UploadUserPicturePath = '/user/{userId}/add-picture';

  /**
   * Upload User Picture.
   *
   * Upload User Profile Picture
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadUserPicture()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadUserPicture$Response(params: {
    userId: string;
    body?: Upload
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.UploadUserPicturePath, 'patch');
    if (params) {
      rb.path('userId', params.userId, {});
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
   * Upload User Picture.
   *
   * Upload User Profile Picture
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadUserPicture$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadUserPicture(params: {
    userId: string;
    body?: Upload
  },
  context?: HttpContext

): Observable<void> {

    return this.uploadUserPicture$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation retrieveUserPicture
   */
  static readonly RetrieveUserPicturePath = '/user/{userId}/get-picture';

  /**
   * Retrieve User Picture.
   *
   * Retrieve User Profile Picture
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveUserPicture()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveUserPicture$Response(params: {
    userId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.RetrieveUserPicturePath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/octet-stream',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * Retrieve User Picture.
   *
   * Retrieve User Profile Picture
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveUserPicture$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveUserPicture(params: {
    userId: string;
  },
  context?: HttpContext

): Observable<Blob> {

    return this.retrieveUserPicture$Response(params,context).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation getAllLearners
   */
  static readonly GetAllLearnersPath = '/learners';

  /**
   * Get All Learners.
   *
   * Get All Learners
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllLearners()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLearners$Response(params?: {
    skip?: number;
    limit?: number;
    confirmationStatus?: true | false;
    name?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
'totalRecords'?: number;
'data'?: Array<Learner>;
}>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.GetAllLearnersPath, 'get');
    if (params) {
      rb.query('skip', params.skip, {});
      rb.query('limit', params.limit, {});
      rb.query('confirmationStatus', params.confirmationStatus, {});
      rb.query('name', params.name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'totalRecords'?: number;
        'data'?: Array<Learner>;
        }>;
      })
    );
  }

  /**
   * Get All Learners.
   *
   * Get All Learners
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllLearners$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLearners(params?: {
    skip?: number;
    limit?: number;
    confirmationStatus?: true | false;
    name?: string;
  },
  context?: HttpContext

): Observable<{
'totalRecords'?: number;
'data'?: Array<Learner>;
}> {

    return this.getAllLearners$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
'totalRecords'?: number;
'data'?: Array<Learner>;
}>) => r.body as {
'totalRecords'?: number;
'data'?: Array<Learner>;
})
    );
  }

  /**
   * Path part for operation getLearnerPaidCourses
   */
  static readonly GetLearnerPaidCoursesPath = '/paid-courses';

  /**
   * Get Paid Courses.
   *
   * Get User Paid Courses
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLearnerPaidCourses()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLearnerPaidCourses$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Course>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.GetLearnerPaidCoursesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Course>;
      })
    );
  }

  /**
   * Get Paid Courses.
   *
   * Get User Paid Courses
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLearnerPaidCourses$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLearnerPaidCourses(params?: {
  },
  context?: HttpContext

): Observable<Course> {

    return this.getLearnerPaidCourses$Response(params,context).pipe(
      map((r: StrictHttpResponse<Course>) => r.body as Course)
    );
  }

}
