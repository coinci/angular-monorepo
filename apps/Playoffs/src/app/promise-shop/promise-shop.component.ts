import { Component, DestroyRef, inject } from '@angular/core';

@Component({
  selector: 'app-promise-shop',
  imports: [],
  templateUrl: './promise-shop.component.html',
  styleUrl: './promise-shop.component.css'
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
    const myPromise = new Promise((sampleResolver, sampleRejecter) => {
      const success = Math.random() > 0.2;
      if (success) {
        sampleResolver('Item purchased successfully!');
      } else {
        sampleRejecter('Failed to purchase item.');
      }
    });

    let times = 5;
    while (times-- > 0) {
      console.log('###Calling promise, times left:', times);
      myPromise.then(this.sampleResolver).catch(this.sampleRejecter);
    }


  }

  sampleResolver(value:any) {
    console.log('###Promise resolved', value);
  }

  sampleRejecter(value:any) {
    console.log('###Promise rejected', value);
  }

  doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 在完成 Promise 之前的其他操作
      console.log("完成了一些事情");
      // promise 的兑现值
      resolve("https://example.com/");
    }, 200);
  });
}



}
