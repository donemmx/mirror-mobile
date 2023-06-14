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

import { ChapterItem } from '../models/chapter-item';
import { Question } from '../models/question';
import { Upload } from '../models/upload';


/**
 * Apis for the Course Chapters
 */
@Injectable({
  providedIn: 'root',
})
export class ChaptersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getChapterItemByChapterItemId
   */
  static readonly GetChapterItemByChapterItemIdPath = '/chapter/{chapterItemId}/{chapterItem}';

  /**
   * Get Chapter Item by ID.
   *
   * Get Chapter Item By Chapter Item ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getChapterItemByChapterItemId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChapterItemByChapterItemId$Response(params: {
    chapterItemId: string;
    chapterItem: string;
  }): Observable<StrictHttpResponse<ChapterItem>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.GetChapterItemByChapterItemIdPath, 'get');
    if (params) {
      rb.path('chapterItemId', params.chapterItemId, {});
      rb.path('chapterItem', params.chapterItem, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ChapterItem>;
      })
    );
  }

  /**
   * Get Chapter Item by ID.
   *
   * Get Chapter Item By Chapter Item ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getChapterItemByChapterItemId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChapterItemByChapterItemId(params: {
    chapterItemId: string;
    chapterItem: string;
  }): Observable<ChapterItem> {

    return this.getChapterItemByChapterItemId$Response(params).pipe(
      map((r: StrictHttpResponse<ChapterItem>) => r.body as ChapterItem)
    );
  }

  /**
   * Path part for operation getAllChapterItemsByChapterId
   */
  static readonly GetAllChapterItemsByChapterIdPath = '/chapter/{chapterId}';

  /**
   * Get All Chapter Items.
   *
   * Get All Chapter Items By Chapter ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllChapterItemsByChapterId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllChapterItemsByChapterId$Response(params: {
    chapterId: string;
  }): Observable<StrictHttpResponse<Array<ChapterItem>>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.GetAllChapterItemsByChapterIdPath, 'get');
    if (params) {
      rb.path('chapterId', params.chapterId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ChapterItem>>;
      })
    );
  }

  /**
   * Get All Chapter Items.
   *
   * Get All Chapter Items By Chapter ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllChapterItemsByChapterId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllChapterItemsByChapterId(params: {
    chapterId: string;
  }): Observable<Array<ChapterItem>> {

    return this.getAllChapterItemsByChapterId$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ChapterItem>>) => r.body as Array<ChapterItem>)
    );
  }

  /**
   * Path part for operation getAllQuestionsByQuizId
   */
  static readonly GetAllQuestionsByQuizIdPath = '/quiz/{quizId}/questions';

  /**
   * Get All Quiz Questions.
   *
   * Get All Questions by Quiz ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllQuestionsByQuizId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllQuestionsByQuizId$Response(params: {
    quizId: string;
  }): Observable<StrictHttpResponse<Array<Question>>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.GetAllQuestionsByQuizIdPath, 'get');
    if (params) {
      rb.path('quizId', params.quizId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Question>>;
      })
    );
  }

  /**
   * Get All Quiz Questions.
   *
   * Get All Questions by Quiz ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllQuestionsByQuizId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllQuestionsByQuizId(params: {
    quizId: string;
  }): Observable<Array<Question>> {

    return this.getAllQuestionsByQuizId$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Question>>) => r.body as Array<Question>)
    );
  }

  /**
   * Path part for operation deleteQuestions
   */
  static readonly DeleteQuestionsPath = '/quiz/{quizId}/questions';

  /**
   * Delete Questions.
   *
   * Delete Questions from Quiz
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteQuestions()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  deleteQuestions$Response(params: {
    quizId: string;
    body?: {
'questionIds'?: Array<any>;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.DeleteQuestionsPath, 'delete');
    if (params) {
      rb.path('quizId', params.quizId, {});
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
   * Delete Questions.
   *
   * Delete Questions from Quiz
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteQuestions$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  deleteQuestions(params: {
    quizId: string;
    body?: {
'questionIds'?: Array<any>;
}
  }): Observable<void> {

    return this.deleteQuestions$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation addChapter
   */
  static readonly AddChapterPath = '/course/{courseId}/chapter/{chapterId}';

  /**
   * Add Chapter.
   *
   * Add Course Chapter
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addChapter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addChapter$Response(params: {
    courseId: string;
    chapterId: string;
    body?: {
'title': string;
'description': string;
'tags'?: Array<any>;
'chapterOrder'?: number;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.AddChapterPath, 'post');
    if (params) {
      rb.path('courseId', params.courseId, {});
      rb.path('chapterId', params.chapterId, {});
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
   * Add Chapter.
   *
   * Add Course Chapter
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addChapter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addChapter(params: {
    courseId: string;
    chapterId: string;
    body?: {
'title': string;
'description': string;
'tags'?: Array<any>;
'chapterOrder'?: number;
}
  }): Observable<void> {

    return this.addChapter$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation removeChapter
   */
  static readonly RemoveChapterPath = '/course/{courseId}/chapter/{chapterId}';

  /**
   * Remove Chapter.
   *
   * Remove Course Chapter
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeChapter()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeChapter$Response(params: {
    courseId: string;
    chapterId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.RemoveChapterPath, 'delete');
    if (params) {
      rb.path('courseId', params.courseId, {});
      rb.path('chapterId', params.chapterId, {});
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
   * Remove Chapter.
   *
   * Remove Course Chapter
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `removeChapter$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeChapter(params: {
    courseId: string;
    chapterId: string;
  }): Observable<void> {

    return this.removeChapter$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation switchChapterOrder
   */
  static readonly SwitchChapterOrderPath = '/chapter/switch-order';

  /**
   * Switch Order.
   *
   * Switch Course Chapter Order
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `switchChapterOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  switchChapterOrder$Response(params?: {
    body?: {
'chapterIds': Array<any>;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.SwitchChapterOrderPath, 'patch');
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
   * Switch Order.
   *
   * Switch Course Chapter Order
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `switchChapterOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  switchChapterOrder(params?: {
    body?: {
'chapterIds': Array<any>;
}
  }): Observable<void> {

    return this.switchChapterOrder$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation switchChapterItemOrder
   */
  static readonly SwitchChapterItemOrderPath = '/chapter-item/switch-order';

  /**
   * Switch Chapter Item Order.
   *
   * Switch Course Chapter Items Order In Chapters
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `switchChapterItemOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  switchChapterItemOrder$Response(params?: {
    body?: {
'chapterIds'?: Array<any>;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.SwitchChapterItemOrderPath, 'patch');
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
   * Switch Chapter Item Order.
   *
   * Switch Course Chapter Items Order In Chapters
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `switchChapterItemOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  switchChapterItemOrder(params?: {
    body?: {
'chapterIds'?: Array<any>;
}
  }): Observable<void> {

    return this.switchChapterItemOrder$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation addChapterItemText
   */
  static readonly AddChapterItemTextPath = '/chapter-item/{chapterId}/text';

  /**
   * Add Text.
   *
   * Add Chapter Item Text
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addChapterItemText()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addChapterItemText$Response(params: {
    chapterId: string;
    body?: {
'title': string;
'content': string;
'order'?: number;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.AddChapterItemTextPath, 'post');
    if (params) {
      rb.path('chapterId', params.chapterId, {});
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
   * Add Text.
   *
   * Add Chapter Item Text
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addChapterItemText$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addChapterItemText(params: {
    chapterId: string;
    body?: {
'title': string;
'content': string;
'order'?: number;
}
  }): Observable<void> {

    return this.addChapterItemText$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation addChapterItemLink
   */
  static readonly AddChapterItemLinkPath = '/chapter-item/{chapterId}/link';

  /**
   * Add Link.
   *
   * Add Link Chapter Item
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addChapterItemLink()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addChapterItemLink$Response(params: {
    chapterId: string;
    body?: {
'title': string;
'linkType': 'video link' | 'audio link' | 'pdf link' | 'picture link';
'link': string;
'order'?: number;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.AddChapterItemLinkPath, 'post');
    if (params) {
      rb.path('chapterId', params.chapterId, {});
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
   * Add Link.
   *
   * Add Link Chapter Item
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addChapterItemLink$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addChapterItemLink(params: {
    chapterId: string;
    body?: {
'title': string;
'linkType': 'video link' | 'audio link' | 'pdf link' | 'picture link';
'link': string;
'order'?: number;
}
  }): Observable<void> {

    return this.addChapterItemLink$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation addSectionHeading
   */
  static readonly AddSectionHeadingPath = '/chapter-item/{chapterId}/section-heading';

  /**
   * Add Heading.
   *
   * Add Section Heading Chapter Item
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addSectionHeading()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addSectionHeading$Response(params: {
    chapterId: string;
    body?: {
'heading': string;
'order'?: number;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.AddSectionHeadingPath, 'post');
    if (params) {
      rb.path('chapterId', params.chapterId, {});
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
   * Add Heading.
   *
   * Add Section Heading Chapter Item
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addSectionHeading$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addSectionHeading(params: {
    chapterId: string;
    body?: {
'heading': string;
'order'?: number;
}
  }): Observable<void> {

    return this.addSectionHeading$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation addQuiz
   */
  static readonly AddQuizPath = '/chapter-item/{chapterId}/quiz/{quizId}';

  /**
   * Add Quiz.
   *
   * Add Quiz Chapter Item
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addQuiz()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addQuiz$Response(params: {
    chapterId: string;
    quizId: string;
    body?: {
'title': string;
'tags'?: Array<any>;
'numberOfRetakes': number;
'instructions': string;

/**
 * time in minutes
 */
'timeLimit': number;
'showSolutionsToLearner': true | false;
'order'?: number;
'showSolutions'?: 'per attempt' | 'per question';
'performanceMessage'?: string;
'isCertificate'?: true | false;
'cerificateIssueType'?: 'manual' | 'automatic';
'completionPercentage'?: number;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.AddQuizPath, 'post');
    if (params) {
      rb.path('chapterId', params.chapterId, {});
      rb.path('quizId', params.quizId, {});
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
   * Add Quiz.
   *
   * Add Quiz Chapter Item
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addQuiz$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addQuiz(params: {
    chapterId: string;
    quizId: string;
    body?: {
'title': string;
'tags'?: Array<any>;
'numberOfRetakes': number;
'instructions': string;

/**
 * time in minutes
 */
'timeLimit': number;
'showSolutionsToLearner': true | false;
'order'?: number;
'showSolutions'?: 'per attempt' | 'per question';
'performanceMessage'?: string;
'isCertificate'?: true | false;
'cerificateIssueType'?: 'manual' | 'automatic';
'completionPercentage'?: number;
}
  }): Observable<void> {

    return this.addQuiz$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation addQuestionsToQuiz
   */
  static readonly AddQuestionsToQuizPath = '/quiz/{quizId}/add-questions';

  /**
   * Add Questions.
   *
   * Add Questions to Quiz
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addQuestionsToQuiz()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addQuestionsToQuiz$Response(params: {
    quizId: string;
    body?: {
'questions': Array<Question>;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.AddQuestionsToQuizPath, 'post');
    if (params) {
      rb.path('quizId', params.quizId, {});
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
   * Add Questions.
   *
   * Add Questions to Quiz
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addQuestionsToQuiz$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addQuestionsToQuiz(params: {
    quizId: string;
    body?: {
'questions': Array<Question>;
}
  }): Observable<void> {

    return this.addQuestionsToQuiz$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation addQuizSection
   */
  static readonly AddQuizSectionPath = '/chapter-item/{quizId}/quiz/section';

  /**
   * Add Quiz Section.
   *
   * Add Quiz Section
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addQuizSection()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addQuizSection$Response(params: {
    quizId: string;
    body?: {
'subject': string;
'topic': string;
'tags'?: Array<any>;
'questionType': 'single correct option' | 'multiple correct options' | 'fill in the blanks';
'questions': Array<{
'topic': string;
'questionType': 'single correct option' | 'multiple correct options' | 'fill in the blank' | 'subjective';
'questionText': string;
'explanation': string;
'mark': number;
'correctOptions'?: Array<any>;
'incorrectOptions'?: Array<any>;
}>;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.AddQuizSectionPath, 'patch');
    if (params) {
      rb.path('quizId', params.quizId, {});
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
   * Add Quiz Section.
   *
   * Add Quiz Section
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addQuizSection$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addQuizSection(params: {
    quizId: string;
    body?: {
'subject': string;
'topic': string;
'tags'?: Array<any>;
'questionType': 'single correct option' | 'multiple correct options' | 'fill in the blanks';
'questions': Array<{
'topic': string;
'questionType': 'single correct option' | 'multiple correct options' | 'fill in the blank' | 'subjective';
'questionText': string;
'explanation': string;
'mark': number;
'correctOptions'?: Array<any>;
'incorrectOptions'?: Array<any>;
}>;
}
  }): Observable<void> {

    return this.addQuizSection$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation addAssignment
   */
  static readonly AddAssignmentPath = '/chapter-item/{chapterId}/assignment/{assignmentId}';

  /**
   * Add Assignment.
   *
   * Add Chapter Assignment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addAssignment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAssignment$Response(params: {
    chapterId: string;
    assignmentId: string;
    body?: {
'title': string;
'instructions': string;
'order'?: number;
'minimumPassScore': number;
'assignmentDurationInDays': number;
'isAlwaysAvailable'?: boolean;
'availableDateAndTime'?: Array<any>;
'tags'?: Array<any>;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.AddAssignmentPath, 'post');
    if (params) {
      rb.path('chapterId', params.chapterId, {});
      rb.path('assignmentId', params.assignmentId, {});
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
   * Add Assignment.
   *
   * Add Chapter Assignment
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addAssignment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAssignment(params: {
    chapterId: string;
    assignmentId: string;
    body?: {
'title': string;
'instructions': string;
'order'?: number;
'minimumPassScore': number;
'assignmentDurationInDays': number;
'isAlwaysAvailable'?: boolean;
'availableDateAndTime'?: Array<any>;
'tags'?: Array<any>;
}
  }): Observable<void> {

    return this.addAssignment$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation uploadAssignmentTemplate
   */
  static readonly UploadAssignmentTemplatePath = '/chapter-item/assignment/upload-template';

  /**
   * Upload Assignment.
   *
   * Upload Assignment Template
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadAssignmentTemplate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadAssignmentTemplate$Response(params?: {
    body?: Upload & {
'assignmentId': string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.UploadAssignmentTemplatePath, 'patch');
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
   * Upload Assignment.
   *
   * Upload Assignment Template
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uploadAssignmentTemplate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadAssignmentTemplate(params?: {
    body?: Upload & {
'assignmentId': string;
}
  }): Observable<void> {

    return this.uploadAssignmentTemplate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation submitAssignment
   */
  static readonly SubmitAssignmentPath = '/chapter-item/assignment/submit';

  /**
   * Submit Assignment.
   *
   * Submit Assignment Attempt
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `submitAssignment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  submitAssignment$Response(params?: {
    body?: Upload & {
'assignmentId': string;
'learnerId': string;
'comments'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.SubmitAssignmentPath, 'post');
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
   * Submit Assignment.
   *
   * Submit Assignment Attempt
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `submitAssignment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  submitAssignment(params?: {
    body?: Upload & {
'assignmentId': string;
'learnerId': string;
'comments'?: string;
}
  }): Observable<void> {

    return this.submitAssignment$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateAssignmentStatus
   */
  static readonly UpdateAssignmentStatusPath = '/assignment/update/status';

  /**
   * Update Assignment Status.
   *
   * Update Assignment Status
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAssignmentStatus()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAssignmentStatus$Response(params?: {
    body?: {
'assignmentId': string;
'learnerId': string;
'status': 'approved' | 'rejected';
'reason'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.UpdateAssignmentStatusPath, 'patch');
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
   * Update Assignment Status.
   *
   * Update Assignment Status
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateAssignmentStatus$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAssignmentStatus(params?: {
    body?: {
'assignmentId': string;
'learnerId': string;
'status': 'approved' | 'rejected';
'reason'?: string;
}
  }): Observable<void> {

    return this.updateAssignmentStatus$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation uploadChapterItem
   */
  static readonly UploadChapterItemPath = '/chapter-item/upload';

  /**
   * Upload Chapter Item.
   *
   * Upload Chapter Item
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadChapterItem()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadChapterItem$Response(params?: {
    body?: Upload & {
'itemId': string;
'chapterId': string;
'title': string;
'description': string;
'order'?: number;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.UploadChapterItemPath, 'post');
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
   * Upload Chapter Item.
   *
   * Upload Chapter Item
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uploadChapterItem$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadChapterItem(params?: {
    body?: Upload & {
'itemId': string;
'chapterId': string;
'title': string;
'description': string;
'order'?: number;
}
  }): Observable<void> {

    return this.uploadChapterItem$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation retrieveUpload
   */
  static readonly RetrieveUploadPath = '/upload/{uploadId}';

  /**
   * Retrieve Uploads.
   *
   * Retrieve Chapter Items Upload
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveUpload()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveUpload$Response(params: {
    uploadId: string;
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.RetrieveUploadPath, 'get');
    if (params) {
      rb.path('uploadId', params.uploadId, {});
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
   * Retrieve Uploads.
   *
   * Retrieve Chapter Items Upload
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `retrieveUpload$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveUpload(params: {
    uploadId: string;
  }): Observable<Blob> {

    return this.retrieveUpload$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation addQuizScores
   */
  static readonly AddQuizScoresPath = '/learner/quiz/scores';

  /**
   * Add Quiz Scores.
   *
   * Add Quiz Scores
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addQuizScores()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addQuizScores$Response(params?: {
    body?: {
'quizId': string;
'learnerId': string;

/**
 * total number of questions
 */
'totalQuestions': number;
'questionsAttempted': Array<any>;
'questionsPassed': Array<any>;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.AddQuizScoresPath, 'post');
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
   * Add Quiz Scores.
   *
   * Add Quiz Scores
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addQuizScores$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addQuizScores(params?: {
    body?: {
'quizId': string;
'learnerId': string;

/**
 * total number of questions
 */
'totalQuestions': number;
'questionsAttempted': Array<any>;
'questionsPassed': Array<any>;
}
  }): Observable<void> {

    return this.addQuizScores$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation markQuiz
   */
  static readonly MarkQuizPath = '/learner/{learnerId}/mark-quiz';

  /**
   * Mark Quiz.
   *
   * Mark Quiz
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `markQuiz()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  markQuiz$Response(params: {
    learnerId: string;
    body?: {
'quizId'?: string;
'answers': Array<any>;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.MarkQuizPath, 'post');
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
   * Mark Quiz.
   *
   * Mark Quiz
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `markQuiz$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  markQuiz(params: {
    learnerId: string;
    body?: {
'quizId'?: string;
'answers': Array<any>;
}
  }): Observable<void> {

    return this.markQuiz$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getQuizScores
   */
  static readonly GetQuizScoresPath = '/quiz/learner/{learnerId}/scores';

  /**
   * Get Quiz Scores.
   *
   * Get Quiz Scores per Learner ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuizScores()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizScores$Response(params: {
    learnerId: string;
  }): Observable<StrictHttpResponse<Array<{
'quizId'?: string;
'learnerId'?: string;

/**
 * total number of questions
 */
'totalQuestions'?: number;
'questionsAttempted'?: Array<any>;
'questionsPassed'?: Array<any>;

/**
 * total score
 */
'totalScore'?: number;

/**
 * score percentage
 */
'scorePercentage'?: number;
'isPassed'?: true | false;
'date'?: string;
}>>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.GetQuizScoresPath, 'get');
    if (params) {
      rb.path('learnerId', params.learnerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<{
        'quizId'?: string;
        'learnerId'?: string;
        
        /**
         * total number of questions
         */
        'totalQuestions'?: number;
        'questionsAttempted'?: Array<any>;
        'questionsPassed'?: Array<any>;
        
        /**
         * total score
         */
        'totalScore'?: number;
        
        /**
         * score percentage
         */
        'scorePercentage'?: number;
        'isPassed'?: true | false;
        'date'?: string;
        }>>;
      })
    );
  }

  /**
   * Get Quiz Scores.
   *
   * Get Quiz Scores per Learner ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getQuizScores$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizScores(params: {
    learnerId: string;
  }): Observable<Array<{
'quizId'?: string;
'learnerId'?: string;

/**
 * total number of questions
 */
'totalQuestions'?: number;
'questionsAttempted'?: Array<any>;
'questionsPassed'?: Array<any>;

/**
 * total score
 */
'totalScore'?: number;

/**
 * score percentage
 */
'scorePercentage'?: number;
'isPassed'?: true | false;
'date'?: string;
}>> {

    return this.getQuizScores$Response(params).pipe(
      map((r: StrictHttpResponse<Array<{
'quizId'?: string;
'learnerId'?: string;

/**
 * total number of questions
 */
'totalQuestions'?: number;
'questionsAttempted'?: Array<any>;
'questionsPassed'?: Array<any>;

/**
 * total score
 */
'totalScore'?: number;

/**
 * score percentage
 */
'scorePercentage'?: number;
'isPassed'?: true | false;
'date'?: string;
}>>) => r.body as Array<{
'quizId'?: string;
'learnerId'?: string;

/**
 * total number of questions
 */
'totalQuestions'?: number;
'questionsAttempted'?: Array<any>;
'questionsPassed'?: Array<any>;

/**
 * total score
 */
'totalScore'?: number;

/**
 * score percentage
 */
'scorePercentage'?: number;
'isPassed'?: true | false;
'date'?: string;
}>)
    );
  }

  /**
   * Path part for operation getQuizScoresByQuizId
   */
  static readonly GetQuizScoresByQuizIdPath = '/quiz/{quizId}/scores';

  /**
   * Get Quiz Scores.
   *
   * Get Quiz Scores per Quiz ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuizScoresByQuizId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizScoresByQuizId$Response(params: {
    quizId: string;
  }): Observable<StrictHttpResponse<Array<{
'quizId'?: string;
'learnerId'?: string;

/**
 * total number of questions
 */
'totalQuestions'?: number;
'questionsAttempted'?: Array<any>;
'questionsPassed'?: Array<any>;

/**
 * total score
 */
'totalScore'?: number;

/**
 * score percentage
 */
'scorePercentage'?: number;
'isPassed'?: true | false;
'date'?: string;
}>>> {

    const rb = new RequestBuilder(this.rootUrl, ChaptersService.GetQuizScoresByQuizIdPath, 'get');
    if (params) {
      rb.path('quizId', params.quizId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<{
        'quizId'?: string;
        'learnerId'?: string;
        
        /**
         * total number of questions
         */
        'totalQuestions'?: number;
        'questionsAttempted'?: Array<any>;
        'questionsPassed'?: Array<any>;
        
        /**
         * total score
         */
        'totalScore'?: number;
        
        /**
         * score percentage
         */
        'scorePercentage'?: number;
        'isPassed'?: true | false;
        'date'?: string;
        }>>;
      })
    );
  }

  /**
   * Get Quiz Scores.
   *
   * Get Quiz Scores per Quiz ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getQuizScoresByQuizId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizScoresByQuizId(params: {
    quizId: string;
  }): Observable<Array<{
'quizId'?: string;
'learnerId'?: string;

/**
 * total number of questions
 */
'totalQuestions'?: number;
'questionsAttempted'?: Array<any>;
'questionsPassed'?: Array<any>;

/**
 * total score
 */
'totalScore'?: number;

/**
 * score percentage
 */
'scorePercentage'?: number;
'isPassed'?: true | false;
'date'?: string;
}>> {

    return this.getQuizScoresByQuizId$Response(params).pipe(
      map((r: StrictHttpResponse<Array<{
'quizId'?: string;
'learnerId'?: string;

/**
 * total number of questions
 */
'totalQuestions'?: number;
'questionsAttempted'?: Array<any>;
'questionsPassed'?: Array<any>;

/**
 * total score
 */
'totalScore'?: number;

/**
 * score percentage
 */
'scorePercentage'?: number;
'isPassed'?: true | false;
'date'?: string;
}>>) => r.body as Array<{
'quizId'?: string;
'learnerId'?: string;

/**
 * total number of questions
 */
'totalQuestions'?: number;
'questionsAttempted'?: Array<any>;
'questionsPassed'?: Array<any>;

/**
 * total score
 */
'totalScore'?: number;

/**
 * score percentage
 */
'scorePercentage'?: number;
'isPassed'?: true | false;
'date'?: string;
}>)
    );
  }

}
