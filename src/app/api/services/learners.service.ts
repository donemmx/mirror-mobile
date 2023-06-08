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
  }): Observable<StrictHttpResponse<Learner>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.GetLearnerPath, 'get');
    if (params) {
      rb.path('learnerId', params.learnerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
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
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getLearner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLearner(params: {
    learnerId: string;
  }): Observable<Learner> {

    return this.getLearner$Response(params).pipe(
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
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.CreateLearnerPath, 'post');
    if (params) {
      rb.path('learnerId', params.learnerId, {});
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
   * Create Learner.
   *
   * create a Learner
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createLearner$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createLearner(params: {
    learnerId: string;
    body?: Learner
  }): Observable<void> {

    return this.createLearner$Response(params).pipe(
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
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.UpdateLearnerInfoPath, 'patch');
    if (params) {
      rb.path('learnerId', params.learnerId, {});
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
   * Learner Info Update.
   *
   * update Learner Information
   *
   * This method provides access to only to the response body.
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
  }): Observable<void> {

    return this.updateLearnerInfo$Response(params).pipe(
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
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.DeleteLearnerAccountPath, 'patch');
    if (params) {
      rb.path('learnerId', params.learnerId, {});
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
   * Delete Learner.
   *
   * Delete Learner Account
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteLearnerAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLearnerAccount(params: {
    learnerId: string;
  }): Observable<void> {

    return this.deleteLearnerAccount$Response(params).pipe(
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
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.ReinstateLearnerAccountPath, 'patch');
    if (params) {
      rb.path('learnerId', params.learnerId, {});
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
   * Reinstate Learner.
   *
   * Reinstate Learner Account
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reinstateLearnerAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reinstateLearnerAccount(params: {
    learnerId: string;
  }): Observable<void> {

    return this.reinstateLearnerAccount$Response(params).pipe(
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
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.BanLearnerAccountPath, 'patch');
    if (params) {
      rb.path('learnerId', params.learnerId, {});
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
   * Ban Learner.
   *
   * Ban Learner Account
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `banLearnerAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  banLearnerAccount(params: {
    learnerId: string;
  }): Observable<void> {

    return this.banLearnerAccount$Response(params).pipe(
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
  }): Observable<StrictHttpResponse<{
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
      accept: 'application/json'
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
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getLearnerProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLearnerProfile(params: {
    learnerId: string;
  }): Observable<{
'email': string;
'name': string;
'learnerId'?: string;
}> {

    return this.getLearnerProfile$Response(params).pipe(
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
  }): Observable<StrictHttpResponse<AuthToken>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.LogInLearnerPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
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
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `logInLearner$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logInLearner(params?: {
    body?: {
'email': string;
'password': string;
}
  }): Observable<AuthToken> {

    return this.logInLearner$Response(params).pipe(
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
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.LogOutLearnerPath, 'patch');
    if (params) {
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
   * Log Learner Out.
   *
   * Log out a Logged in Learner
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `logOutLearner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logOutLearner(params?: {
  }): Observable<void> {

    return this.logOutLearner$Response(params).pipe(
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
  }): Observable<StrictHttpResponse<AuthToken>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.ValidateOtpPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
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
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `validateOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  validateOtp(params?: {
    body?: {
'email': string;
'otp': string;
}
  }): Observable<AuthToken> {

    return this.validateOtp$Response(params).pipe(
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
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.GenerateOtpPath, 'post');
    if (params) {
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
   * Generate OTP.
   *
   * Generate Learner OTP
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `generateOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  generateOtp(params?: {
    body?: {
'email': string;
}
  }): Observable<void> {

    return this.generateOtp$Response(params).pipe(
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
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.ResetOtpPath, 'post');
    if (params) {
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
   * Reset OTP.
   *
   * Reset Learner OTP
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `resetOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetOtp(params?: {
    body?: {
'email': string;
}
  }): Observable<void> {

    return this.resetOtp$Response(params).pipe(
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
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.ChangePasswordPath, 'post');
    if (params) {
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
   * Change Password.
   *
   * Change User Password
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `changePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword(params?: {
    body?: {
'password': string;
'confirmPassword': string;
}
  }): Observable<void> {

    return this.changePassword$Response(params).pipe(
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
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.UploadUserPicturePath, 'patch');
    if (params) {
      rb.path('userId', params.userId, {});
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
   * Upload User Picture.
   *
   * Upload User Profile Picture
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uploadUserPicture$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadUserPicture(params: {
    userId: string;
    body?: Upload
  }): Observable<void> {

    return this.uploadUserPicture$Response(params).pipe(
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
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.RetrieveUserPicturePath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/octet-stream'
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
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `retrieveUserPicture$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveUserPicture(params: {
    userId: string;
  }): Observable<Blob> {

    return this.retrieveUserPicture$Response(params).pipe(
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
  }): Observable<StrictHttpResponse<{
'totalRecords'?: number;
'data'?: Array<any>;
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
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'totalRecords'?: number;
        'data'?: Array<any>;
        }>;
      })
    );
  }

  /**
   * Get All Learners.
   *
   * Get All Learners
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllLearners$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLearners(params?: {
    skip?: number;
    limit?: number;
    confirmationStatus?: true | false;
    name?: string;
  }): Observable<{
'totalRecords'?: number;
'data'?: Array<any>;
}> {

    return this.getAllLearners$Response(params).pipe(
      map((r: StrictHttpResponse<{
'totalRecords'?: number;
'data'?: Array<any>;
}>) => r.body as {
'totalRecords'?: number;
'data'?: Array<any>;
})
    );
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
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.RegisterPaystackPaymentPath, 'post');
    if (params) {
      rb.path('paystackId', params.paystackId, {});
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
   * Register Payment.
   *
   * Register Paystack Payment
   *
   * This method provides access to only to the response body.
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
  }): Observable<void> {

    return this.registerPaystackPayment$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
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
  }): Observable<StrictHttpResponse<Course>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.GetLearnerPaidCoursesPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
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
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getLearnerPaidCourses$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLearnerPaidCourses(params?: {
  }): Observable<Course> {

    return this.getLearnerPaidCourses$Response(params).pipe(
      map((r: StrictHttpResponse<Course>) => r.body as Course)
    );
  }

  /**
   * Path part for operation addCourseProgress
   */
  static readonly AddCourseProgressPath = '/course-progress';

  /**
   * Add Course Progress.
   *
   * Add Learner Course Progress
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCourseProgress()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCourseProgress$Response(params?: {
    body?: {
'courseId'?: string;
'chapterId'?: string;
'chapterItemId'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.AddCourseProgressPath, 'post');
    if (params) {
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
   * Add Course Progress.
   *
   * Add Learner Course Progress
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addCourseProgress$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCourseProgress(params?: {
    body?: {
'courseId'?: string;
'chapterId'?: string;
'chapterItemId'?: string;
}
  }): Observable<void> {

    return this.addCourseProgress$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getCourseProgress
   */
  static readonly GetCourseProgressPath = '/course-progress/{courseId}';

  /**
   * Get Course Progress.
   *
   * Get Learner's Course Progress
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCourseProgress()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourseProgress$Response(params: {
    courseId: string;
  }): Observable<StrictHttpResponse<{
'learnerId'?: string;
'courseId'?: string;
'dateEnrolledInCourse'?: string;
'courseProgress'?: Array<{
'chapterId'?: string;
'chapterItemName'?: 'assignment' | 'audio' | 'link' | 'pdf' | 'picture' | 'quiz' | 'heading' | 'text';
'chapterItemId'?: string;
'date'?: string;
}>;
'lastAssessedItem'?: Array<any>;
'statusHistory'?: Array<any>;
'status'?: 'enrolled' | 'in progress' | 'completed' | 'certificated';
}>> {

    const rb = new RequestBuilder(this.rootUrl, LearnersService.GetCourseProgressPath, 'get');
    if (params) {
      rb.path('courseId', params.courseId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'learnerId'?: string;
        'courseId'?: string;
        'dateEnrolledInCourse'?: string;
        'courseProgress'?: Array<{
        'chapterId'?: string;
        'chapterItemName'?: 'assignment' | 'audio' | 'link' | 'pdf' | 'picture' | 'quiz' | 'heading' | 'text';
        'chapterItemId'?: string;
        'date'?: string;
        }>;
        'lastAssessedItem'?: Array<any>;
        'statusHistory'?: Array<any>;
        'status'?: 'enrolled' | 'in progress' | 'completed' | 'certificated';
        }>;
      })
    );
  }

  /**
   * Get Course Progress.
   *
   * Get Learner's Course Progress
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCourseProgress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourseProgress(params: {
    courseId: string;
  }): Observable<{
'learnerId'?: string;
'courseId'?: string;
'dateEnrolledInCourse'?: string;
'courseProgress'?: Array<{
'chapterId'?: string;
'chapterItemName'?: 'assignment' | 'audio' | 'link' | 'pdf' | 'picture' | 'quiz' | 'heading' | 'text';
'chapterItemId'?: string;
'date'?: string;
}>;
'lastAssessedItem'?: Array<any>;
'statusHistory'?: Array<any>;
'status'?: 'enrolled' | 'in progress' | 'completed' | 'certificated';
}> {

    return this.getCourseProgress$Response(params).pipe(
      map((r: StrictHttpResponse<{
'learnerId'?: string;
'courseId'?: string;
'dateEnrolledInCourse'?: string;
'courseProgress'?: Array<{
'chapterId'?: string;
'chapterItemName'?: 'assignment' | 'audio' | 'link' | 'pdf' | 'picture' | 'quiz' | 'heading' | 'text';
'chapterItemId'?: string;
'date'?: string;
}>;
'lastAssessedItem'?: Array<any>;
'statusHistory'?: Array<any>;
'status'?: 'enrolled' | 'in progress' | 'completed' | 'certificated';
}>) => r.body as {
'learnerId'?: string;
'courseId'?: string;
'dateEnrolledInCourse'?: string;
'courseProgress'?: Array<{
'chapterId'?: string;
'chapterItemName'?: 'assignment' | 'audio' | 'link' | 'pdf' | 'picture' | 'quiz' | 'heading' | 'text';
'chapterItemId'?: string;
'date'?: string;
}>;
'lastAssessedItem'?: Array<any>;
'statusHistory'?: Array<any>;
'status'?: 'enrolled' | 'in progress' | 'completed' | 'certificated';
})
    );
  }

}
