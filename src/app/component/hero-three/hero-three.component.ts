import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/pages/base/base.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-hero-three',
  templateUrl: './hero-three.component.html',
  styleUrls: ['./hero-three.component.css']
})
export class HeroThreeComponent extends BaseComponent {
  @Input() course: any
  constructor(data: DataService, router: Router){
    super(data, router)
  }
  ngOnInit(): void {
      super.ngOnInit()


  }
}
