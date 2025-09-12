import { Component, DestroyRef, inject } from '@angular/core';

@Component({
  selector: 'app-promise-shop',
  imports: [],
  templateUrl: './promise-shop.component.html',
  styleUrl: './promise-shop.component.css',
})
export class PromiseShopComponent {
  constructor() {
    console.log('PromiseShopComponent initialized');

    inject(DestroyRef).onDestroy(() => {
      console.log('PromiseShopComponent destroyed');
    });

    this.startShoping();
  }

  startShoping() {
    console.log('##startShoping called');
    const myPromise = this.getPromise_msg();

    let times = 5;
    while (times-- > 0) {
      console.log('###Calling promise, times left:', times);
      myPromise.then(this.sampleResolver).catch(this.sampleRejecter);
    }
  }

  sampleResolver(value: any) {
    console.log('###Promise resolved', value);
  }

  sampleRejecter(value: any) {
    console.log('###Promise rejected', value);
  }

  // promise section
  getPromise_msg() {
    return new Promise((resolver, rejecter) => {
      const randomValue = Math.random();
      console.log('###Random value generated:', randomValue);
      // Simulate a success or failure based on random value
      const success = randomValue > 0.2;
      if (success) {
        resolver('Item purchased successfully!');
      } else {
        rejecter('Failed to purchase item.');
      }
    });
  }
}
