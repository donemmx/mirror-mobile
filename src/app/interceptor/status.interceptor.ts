import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable()
export class StatusInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const edited = req.clone({
      headers: req.headers.set("ngrok-skip-browser-warning", "69420")
    })
    
    return next.handle(edited);
  }
}
