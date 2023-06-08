/* tslint:disable */
/* eslint-disable */
export interface Learner {
  age?: number;
  ageGroup?: 'children' | 'young adult' | 'adult';
  coaching?: true | false;
  confirmPassword: string;
  country?: string;
  courses?: Array<any>;
  creatorId?: string;
  dateOfBirth: string;
  educationComponent?: true | false;
  email: string;
  gender: 'male' | 'female';
  identityComponent?: true | false;
  learnerId?: string;
  name: string;
  password: string;
  pictureId?: string;
  platform: 'web' | 'ios' | 'android';
  signUpDate?: string;
  spiritualComponent?: true | false;
  state?: string;
}
