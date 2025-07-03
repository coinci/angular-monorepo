import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import * as fromDandelionState from './+state/dandelion-state.reducer';
import { DandelionStateEffects } from './+state/dandelion-state.effects';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideStore(),
    provideState(
      fromDandelionState.DANDELION_STATE_FEATURE_KEY,
      fromDandelionState.dandelionStateReducer
    ),
    provideEffects(DandelionStateEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      name: 'NgRx Standalone App',
      trace: true,
      traceLimit: 75,
    }),

    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
  ],
};
