import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountServiceService {
  // constructor() {}

  getAllAccounts() {
    return [
      {
        id: 'FF001',
        name: 'Account 1',
        acctNumber: 'K8800011',
        regType: 'Savings',
        balance: 1000,
        riskLevel: 1,
        objective: 'Saving',
        isActive: false,
      },
      {
        id: 'FF002',
        name: 'Account 2',
        acctNumber: 'K8800012',
        regType: 'Savings',
        balance: 2000,
        riskLevel: 2,
        objective: 'Investment',
        isActive: true,
      },
      {
        id: 'FF003',
        name: 'Account 3',
        acctNumber: 'K8800013',
        regType: 'Savings',
        balance: 3000,
        riskLevel: 3,
        objective: 'Retirement',
        isActive: true,
      },
    ];
  }
}
