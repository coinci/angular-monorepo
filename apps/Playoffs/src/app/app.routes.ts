import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'profiles',
    loadComponent: () =>
      import('@xin-feng/profile').then((m) => m.ProfileListComponent),
  },
  {
    path: 'story',
    loadComponent: () =>
      import('@xin-feng/story').then((m) => m.StoryComponent),
  },
];
