/* tslint:disable */
/* eslint-disable */
export interface Question {
  correctOptions?: Array<any>;
  explanation: string;
  incorrectOptions?: Array<any>;
  mark: number;
  questionId: string;
  questionNumber: number;
  questionText: string;
  questionType: 'single correct option' | 'multiple correct options' | 'fill in the blank' | 'subjective';
}
