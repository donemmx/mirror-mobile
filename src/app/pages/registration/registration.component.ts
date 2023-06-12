import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { fadeAnimation, listAnimation } from 'src/app/app.animation';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  CountryService, LearnersService,
} from 'src/app/api/services';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { BaseComponent } from '../base/base.component';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  animations: [fadeAnimation, listAnimation],
})
export class RegistrationComponent extends BaseComponent {
  terms: any = null
  coaching: any
  educationList: any = [
    {
      label: 'I will need the education component',
      value: true,
      icon: 'pi pi-stop-circle'
    },
    {
      label: 'I will not need this component',
      value: false,
      icon: 'pi pi-stop-circle'
    },
  ]
  identityList: any = [
    {
      label: 'I will need the Indentity component',
      value: true,
      icon: 'pi pi-stop-circle'
    },
    {
      label: 'I will not need this component',
      value: false,
      icon: 'pi pi-stop-circle'
    },
  ]
  spiritualList: any = [
    {
      label: 'I will need the Spiritual component',
      value: true,
      icon: 'pi pi-stop-circle'
    },
    {
      label: 'I will not need this component',
      value: false,
      icon: 'pi pi-stop-circle'
    },
  ]
  country: any = null;
  countryId$ = new BehaviorSubject<any>({data: null})
  countries$: Observable<any>;
  state$: Observable<any>;
  learner: any;
  step: any = 1;

  question: FormGroup;
  constructor(data:DataService, router: Router, private formBuilder: FormBuilder, private api: CountryService, private userApi: LearnersService, private auth: AuthService, private http: HttpClient) {
    super(data, router)
  }

  ngOnInit(): void {
    super.ngOnInit()
    this.question = this.formBuilder.group({
      state: new FormControl('', [Validators.required]),
      identityComponent: new FormControl('', [Validators.required]),
      educationComponent: new FormControl('', [Validators.required]),
      spiritualComponent: new FormControl('', [Validators.required]),
    });

    this.countries$ = this.api.getAllCountries();
     this.countryId$.subscribe((res)=> {
      if(res.data !== null){
        this.state$ =  this.api.getAllStatesByCountryId({
          countryId: res.data
        })
      }
     })

     this.learner = this.auth.getUserId()
  }

  next(type: any, value: boolean) {
    this.step += 1;
    switch (type) {
      case 'coaching':
        this.coaching = value;
        break;
        default:
        break
    }
  }

  change(event: any){
    this.country = event.value.name
    this.countryId$.next({data: event.value.countryId})
    console.log(this.country);
  }

  changeTerms(event: any){
      return  this.terms = event.checked
  }

  previous() {
    if (this.step > 1) {
      this.step -= 1;
    }
  }

  acceptTerms(){
      this.userApi.updateLearnerInfo({
        learnerId: this.learner.jti,
        body: {
          country: this.country,
          coaching: this.coaching,
          ...this.question.value
        }
      }).subscribe(()=> {
        this.userApi.getLearner({learnerId: this.learner.jti}).subscribe((res)=> {
          this.message.user = res
          this.message.selected = res.ageGroup
          this.data.changeMessage(this.message)
          this.router.navigateByUrl('/welcome')
        })
      })
  }

}
