import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { Message } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
@Input() source: any;
messages: Message[];
course$: Observable<any>
link$ = new BehaviorSubject<any>('')

pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
constructor(@Inject(DOCUMENT) private document: Document){
}
ngOnInit(){
// this.link$.next(this.pdfSrc)
}

ngAfterViewInit(){
  const iframe: any = this.document.querySelector('iframe')
  console.log(iframe.contentWindow.document);
  
}

next(){
  
}

}
