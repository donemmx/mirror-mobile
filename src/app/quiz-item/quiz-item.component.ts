import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.css'],
})
export class QuizItemComponent {
  @Input() item: any;
  quiz: boolean = false;
  questions: any;
  selectedQuestions: any[] = [];

  openModal() {
    this.quiz = !this.quiz;
  }

  startQuiz(item: any) {
    this.questions = item;
    this.openModal();
  }

  submitQuiz() {
    let answers:any = []
    let data = this.selectedQuestions.sort(
      (a, b) => a.questionId - b.questionId
    );

    data.forEach((res)=> {
      answers.push(res.answer)
    })

    console.log(answers);
    
  }
}
