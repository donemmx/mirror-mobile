/* tslint:disable */
/* eslint-disable */
export interface SubmittedAssignment {
  assignmentId?: string;
  comments?: string;
  creatorId?: string;
  reason: string;
  score: number;
  status?: 'pending' | 'approved' | 'rejected' | 'scored';
  statusHistory?: Array<any>;
  submittedAssignmentId?: string;
}
