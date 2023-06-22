/* tslint:disable */
/* eslint-disable */
export interface Course {
  ageTag: 'children' | 'young adult' | 'adult';
  certificateIssueType?: 'manual' | 'automatic';
  completionPercentage?: number;
  description: string;
  duration?: number;
  howToUse?: string;
  instructor: string;
  isCertificate?: true | false;
  learningOutcomes: Array<{
'heading': string;
'details': string;
}>;
  level: 'beginner' | 'advanced' | 'proficiency';
  mustCompleteSequentially?: true | false;
  mustCompleteVideoInChapter?: true | false;
  tags: Array<any>;
  title: string;
}
