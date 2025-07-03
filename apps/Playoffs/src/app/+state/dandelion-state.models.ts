/**
 * Interface for the 'DandelionState' data
 */
export interface DandelionStateEntity {
  id: string; // Primary ID
  name: string;
  acctNumber: string;
  regType: string;
  balance: number;
  riskLevel: number;
  objective: ObjectiveType;
  isActive: boolean;
}

export enum ObjectiveType {
  'Saving',
  'Investment',
  'Retirement',
}
