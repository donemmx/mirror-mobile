import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toast: ToastrService) { }

  success(message: any){
    this.toast.success(message)
  }

  error(message: any){
    this.toast.error(message)
  }
  
  warning(message: any){
    this.toast.warning(message)
  }

  info(message: any){
    this.toast.info(message)
  }

}
