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
import { AuthToken } from '../models/auth-token';
import { Learner } from '../models/learner';


/**
 * Apis for the Adiministrators
 */
@Injectable({
  providedIn: 'root',
})
export class AdminService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation makeLearnerAnAdmin
   */
  static readonly MakeLearnerAnAdminPath = '/learner/{learnerId}/make-admin';

  /**
   * Make Learner Admin.
   *
   * Make Learner An Administrator
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `makeLearnerAnAdmin()` instead.
   *
   * This method doesn't expect any request body.
   */
  makeLearnerAnAdmin$Response(params: {
    learnerId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.MakeLearnerAnAdminPath, 'patch');
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
   * Make Learner Admin.
   *
   * Make Learner An Administrator
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `makeLearnerAnAdmin$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  makeLearnerAnAdmin(params: {
    learnerId: string;
  }): Observable<void> {

    return this.makeLearnerAnAdmin$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAdmin
   */
  static readonly GetAdminPath = '/admin/{adminId}';

  /**
   * Get Admin.
   *
   * Get an Admin
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAdmin()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdmin$Response(params: {
    adminId: string;
  }): Observable<StrictHttpResponse<Admin>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.GetAdminPath, 'get');
    if (params) {
      rb.path('adminId', params.adminId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Admin>;
      })
    );
  }

  /**
   * Get Admin.
   *
   * Get an Admin
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAdmin$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdmin(params: {
    adminId: string;
  }): Observable<Admin> {

    return this.getAdmin$Response(params).pipe(
      map((r: StrictHttpResponse<Admin>) => r.body as Admin)
    );
  }

  /**
   * Path part for operation registerAdmin
   */
  static readonly RegisterAdminPath = '/admin/{adminId}';

  /**
   * Register Admin.
   *
   * Register an Admin
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerAdmin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerAdmin$Response(params: {
    adminId: string;
    body?: Admin
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.RegisterAdminPath, 'post');
    if (params) {
      rb.path('adminId', params.adminId, {});
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
   * Register Admin.
   *
   * Register an Admin
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `registerAdmin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerAdmin(params: {
    adminId: string;
    body?: Admin
  }): Observable<void> {

    return this.registerAdmin$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteAdmin
   */
  static readonly DeleteAdminPath = '/admin/{adminId}';

  /**
   * Delete Admin.
   *
   * Delete Admin
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAdmin()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAdmin$Response(params: {
    adminId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.DeleteAdminPath, 'delete');
    if (params) {
      rb.path('adminId', params.adminId, {});
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
   * Delete Admin.
   *
   * Delete Admin
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteAdmin$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAdmin(params: {
    adminId: string;
  }): Observable<void> {

    return this.deleteAdmin$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation assignAdminRole
   */
  static readonly AssignAdminRolePath = '/admin/{adminId}';

  /**
   * Assign Admin Role.
   *
   * Assign Role to Admin
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `assignAdminRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  assignAdminRole$Response(params: {
    adminId: string;
    body?: {
'role': 'super admin' | 'editor' | 'mentor' | 'instructor';
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.AssignAdminRolePath, 'patch');
    if (params) {
      rb.path('adminId', params.adminId, {});
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
   * Assign Admin Role.
   *
   * Assign Role to Admin
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `assignAdminRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  assignAdminRole(params: {
    adminId: string;
    body?: {
'role': 'super admin' | 'editor' | 'mentor' | 'instructor';
}
  }): Observable<void> {

    return this.assignAdminRole$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation assignMenteesToAdmin
   */
  static readonly AssignMenteesToAdminPath = '/admin/{adminId}/mentees';

  /**
   * Assign Mentees to Admin.
   *
   * Assign Mentees to Admin
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `assignMenteesToAdmin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  assignMenteesToAdmin$Response(params?: {
    body?: {
'mentees': Array<any>;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.AssignMenteesToAdminPath, 'patch');
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
   * Assign Mentees to Admin.
   *
   * Assign Mentees to Admin
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `assignMenteesToAdmin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  assignMenteesToAdmin(params?: {
    body?: {
'mentees': Array<any>;
}
  }): Observable<void> {

    return this.assignMenteesToAdmin$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getMentees
   */
  static readonly GetMenteesPath = '/admin/mentees';

  /**
   * Get Mentees.
   *
   * Get Mentees Assigned To Admin
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMentees()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMentees$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Learner>>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.GetMenteesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Learner>>;
      })
    );
  }

  /**
   * Get Mentees.
   *
   * Get Mentees Assigned To Admin
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getMentees$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMentees(params?: {
  }): Observable<Array<Learner>> {

    return this.getMentees$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Learner>>) => r.body as Array<Learner>)
    );
  }

  /**
   * Path part for operation logInAdmin
   */
  static readonly LogInAdminPath = '/admin-login';

  /**
   * Admin Log in.
   *
   * Log in a Admin
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logInAdmin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logInAdmin$Response(params?: {
    body?: {
'email': string;
'password': string;
}
  }): Observable<StrictHttpResponse<AuthToken>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.LogInAdminPath, 'post');
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
   * Admin Log in.
   *
   * Log in a Admin
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `logInAdmin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logInAdmin(params?: {
    body?: {
'email': string;
'password': string;
}
  }): Observable<AuthToken> {

    return this.logInAdmin$Response(params).pipe(
      map((r: StrictHttpResponse<AuthToken>) => r.body as AuthToken)
    );
  }

  /**
   * Path part for operation logOutAdmin
   */
  static readonly LogOutAdminPath = '/admin-logout';

  /**
   * Log Admin Out.
   *
   * Log out a Logged in Admin
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logOutAdmin()` instead.
   *
   * This method doesn't expect any request body.
   */
  logOutAdmin$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.LogOutAdminPath, 'patch');
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
   * Log Admin Out.
   *
   * Log out a Logged in Admin
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `logOutAdmin$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logOutAdmin(params?: {
  }): Observable<void> {

    return this.logOutAdmin$Response(params).pipe(
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

    const rb = new RequestBuilder(this.rootUrl, AdminService.ValidateOtpPath, 'post');
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

    const rb = new RequestBuilder(this.rootUrl, AdminService.GenerateOtpPath, 'post');
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

    const rb = new RequestBuilder(this.rootUrl, AdminService.ResetOtpPath, 'post');
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

    const rb = new RequestBuilder(this.rootUrl, AdminService.ChangePasswordPath, 'post');
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
   * Path part for operation getAllAdmins
   */
  static readonly GetAllAdminsPath = '/admins';

  /**
   * Get All Admins.
   *
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

    const rb = new RequestBuilder(this.rootUrl, AdminService.GetAllAdminsPath, 'get');
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
   * Get All Admins.
   *
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

}
