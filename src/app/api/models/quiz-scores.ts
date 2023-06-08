/* tslint:disable */
/* eslint-disable */
export interface QuizScores {
  date?: string;
  isPassed?: true | false;
  questionsAttempted: Array<any>;
  questionsPassed: Array<any>;
  quizId: string;
  quizScoreId?: string;
  scorePercentage?: number;
  scorerId?: string;
  totalQuestions: number;
  totalScore?: number;
}
