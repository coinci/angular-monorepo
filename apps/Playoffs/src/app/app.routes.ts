import { Route } from '@angular/router';
import { DarshboardComponent } from './darshboard/darshboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { myGuardGuard } from './my-guard.guard';
import { PromiseShopComponent } from './promise-shop/promise-shop.component';
import { SpaceLabComponent } from './space-lab/space-lab.component';

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
  {
    path: 'Labs',
    redirectTo: 'Labs/0',
  },
   {
    path: 'Labs/:id',
    component: SpaceLabComponent,
    data: { title: 'Space Labs' },
    canActivate: [myGuardGuard],

  },
];
