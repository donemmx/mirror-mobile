/* tslint:disable */
/* eslint-disable */
export interface CoursePackage {
  ageTag: 'children' | 'young adult' | 'adult';
  courseLevels: Array<{
'beginner': string;
'advance': string;
'proficiency': string;
}>;
  description: string;
  quizId?: string;
  tags: Array<any>;
  title: string;
}
