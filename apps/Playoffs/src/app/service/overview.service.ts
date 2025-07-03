import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  DandelionStateEntity,
  ObjectiveType,
} from '../+state/dandelion-state.models';

@Injectable({
  providedIn: 'root',
})
export class OverviewService {
  // constructor() {}

  getAllAccounts(): Observable<DandelionStateEntity[]> {
    console.log('in service ........');
    const result: DandelionStateEntity[] = [
      {
        id: 'FF001',
        name: 'Account 1',
        acctNumber: 'K8800011',
        regType: 'Savings',
        balance: 1000,
        riskLevel: 1,
        objective: ObjectiveType.Saving,
        isActive: false,
      },
      {
        id: 'FF002',
        name: 'Account 2',
        acctNumber: 'K8800012',
        regType: 'Savings',
        balance: 2000,
        riskLevel: 2,
        objective: ObjectiveType.Retirement,
        isActive: true,
      },
      {
        id: 'FF003',
        name: 'Account 3',
        acctNumber: 'K8800013',
        regType: 'Savings',
        balance: 3000,
        riskLevel: 3,
        objective: ObjectiveType.Investment,
        isActive: true,
      },
    ];

    return of(result);
  }
}
