import { Route } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DarshboardComponent } from './darshboard/darshboard.component';
import { PromiseShopComponent } from './promise-shop/promise-shop.component';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@xin-feng/profile').then((m) => m.ProfileListComponent),
  },
  {
    path: 'profiles',
    loadComponent: () =>
      import('@xin-feng/profile').then((m) => m.ProfileListComponent),
  },
  {
    path: 'story',
    loadComponent: () =>
      import('@xin-feng/story').then((m) => {
        console.log('###loading story component');
        return m.StoryComponent;
      }),
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'darshboard',
    component: DarshboardComponent,
  },
    {
    path: 'promise',
    component: PromiseShopComponent,
  },
];
