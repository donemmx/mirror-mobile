import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentAuthSubject: BehaviorSubject<any>;
  public currentAuth: Observable<any>;



  constructor(private router: Router) {
    this.start()

    const auth = localStorage.getItem('auth') ?? '{}';
    this.currentAuthSubject = new BehaviorSubject<any>(
      JSON.parse(auth)
    );
    this.currentAuth = this.currentAuthSubject.asObservable();

  }

  saveAuthentication(auth: any) {
    localStorage.setItem('auth', JSON.stringify(auth));
    this.currentAuthSubject.next(auth);
  }

  getUserId() {
    var decoded = jwt_decode(this.currentAuthValue.token);
    return decoded
  }


  private start(): void {
    window.addEventListener("storage", this.storageEventListener.bind(this));
  }

  private storageEventListener(event: StorageEvent) {
    if (event.storageArea == localStorage) {
      if (event?.key && event.key == 'logout-event') {
        console.log("🔥 ~ storageEventListener ~ event", event.newValue)
        this.logout()
      }
      else if (event?.key && event.key == 'login-event') {
        console.log("🔥 ~ storageEventListener ~ event", event.newValue)
      }
    }
  }

  public get currentAuthValue(): any {
    if (this.currentAuthSubject.value) {
      const auth = this.currentAuthSubject.value;
    }
    return this.currentAuthSubject.value;
  }

  isUserLoggedIn(): boolean {
    if (this.currentAuthValue.token) {
      return true;
    }
    return false;
  }

  getToken() {
    return this.isUserLoggedIn() ? this.currentAuthSubject.value.token : ''
  }

  logout() {
    sessionStorage.removeItem('message')
    localStorage.clear();
    this.currentAuthSubject.next({});
    this.router.navigateByUrl('/login');
  }

   // Handle active listeners when onDestroy
   private stop(): void {
    window.removeEventListener("storage", this.storageEventListener.bind(this));
  }

  ngOnDestroy() {
    this.stop()
  }

}
