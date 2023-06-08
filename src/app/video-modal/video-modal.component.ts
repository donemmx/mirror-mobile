import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

declare var YT: any;
@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css'],
})
export class VideoModalComponent implements OnInit {
  @Input() open: boolean = false;
  @Input() videoId$: Observable<any>;

  videoUrl: any;
  constructor(private sanitize: DomSanitizer){
  }

  
  ngOnInit(): void {
   this.videoId$.subscribe((res)=> {
    if (res.includes('youtube')) {
      this.getYoutubeId(res);
    } else if (res.includes('youtu.be')) {
      this.getIframLink(res)
    } else {
      this.videoUrl = this.sanitize.bypassSecurityTrustResourceUrl(res);
    }


    })
   
    
  }


  getYoutubeId(value: any) {
    this.videoId$.subscribe((res)=> {
    if (res.includes('=')) {
      const tempLink = value.split('=')[1];
      if (tempLink.includes('&')) {
        this.videoUrl = this.sanitize.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${tempLink.split('&')[0]}`
        );
      } else {
        this.videoUrl = this.sanitize.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${tempLink}`
        );
      }
    } else {
      this.videoUrl = '';
    }
  })
  }

  getIframLink(value: any) {
    this.videoId$.subscribe((res)=> {
    if (res.includes('be/')) {
      const tempLink = value.split('be/')[1];
      console.log(tempLink);
      
      this.videoUrl = this.sanitize.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${tempLink}`
      );
    }})
  }
}
