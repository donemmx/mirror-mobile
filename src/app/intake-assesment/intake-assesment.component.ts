import { Component } from '@angular/core';
import { BaseComponent } from '../pages/base/base.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-intake-assesment',
  templateUrl: './intake-assesment.component.html',
  styleUrls: ['./intake-assesment.component.css'],
})
export class IntakeAssesmentComponent extends BaseComponent {
  questions = 0;
  form: FormGroup

  question1 = [{

  }]

  constructor(data: DataService, router: Router, private formBuilder: FormBuilder){
    super(data, router)
  }

  ngOnInit(): void {
      super.ngOnInit()

      this.form = this.formBuilder.group({
        
      })
  }

  previous() {
    if (this.questions > 1) {
      this.questions -= 1;
    }
  }

  next(type: any, value: boolean) {
    this.questions += 1;
  }
}
