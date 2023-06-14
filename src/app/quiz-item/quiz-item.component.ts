import { Component, Input, OnInit } from '@angular/core';
import { ChaptersService } from '../api/services';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.css'],
})
export class QuizItemComponent implements OnInit {
  @Input() item: any;
  quiz: boolean = false;
  score: boolean = false;
  questions: any;
  value: any;
  selectedQuestions: any[] = [];
  hideQuiz: boolean = false;
  myscore$ = new BehaviorSubject<any>({});
  constructor(
    private api: ChaptersService,
    private auth: AuthService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {}

  openModal() {
    this.quiz = !this.quiz;
  }

  startQuiz(item: any) {
    this.questions = item;
    this.openModal();
  }

  submitQuiz() {
    let answers: any = [];
    let data = this.selectedQuestions.sort(
      (a, b) => a.questionId - b.questionId
    );
    data.forEach((res) => {
      answers.push(res.answer);
    });
    const id: any = this.auth.getUserId();
    this.api
      .markQuiz({
        learnerId: id.jti,
        body: {
          answers: answers,
          quizId: this.item.quizId,
        },
      })
      .subscribe((scores: any) => {
        this.myscore$.next(JSON.parse(scores))
        this.notify.success('Quiz submitted successfully');
        this.hideQuiz = true;
        setTimeout(() => {
          this.score = true;
        }, 5000);
      });
  }

  continue(data: any){
    console.log(data);
    
  }
}
