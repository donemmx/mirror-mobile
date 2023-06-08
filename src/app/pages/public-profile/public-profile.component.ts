import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent extends BaseComponent {

  label: any
  ngOnInit(): void {
      super.ngOnInit()

      this.label = this.message.user.name.split(' ')[0][0]
  }
}
