import {  AfterContentInit, AfterViewInit, Component, Inject, OnInit, } from '@angular/core';
import { PrimeNGConfig} from 'primeng/api';
import * as AOS from "aos";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'themirror';
  lightbox:any;
event: any;
  constructor(
    private primengConfig: PrimeNGConfig,
    @Inject(DOCUMENT) private document: Document,
   ){
  }
  ngOnInit(){
    this.primengConfig.ripple = true;
  }

  ngAfterContentInit(): void {
    AOS.init();
  }




}
