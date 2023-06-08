import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
@Output() update: EventEmitter<any> = new EventEmitter();
ngOnInit(): void {
  this.count()
}

count(){
  setInterval(()=> 
  {
    this.loaded()
  }
 , 2000)
}

loaded(){
  this.update.emit('loaded')
}
}
