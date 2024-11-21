import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromDandelionState from './+state/dandelion-state.reducer';
import { DandelionStateEffects } from './+state/dandelion-state.effects';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideEffects(DandelionStateEffects),
    provideState(
      fromDandelionState.DANDELION_STATE_FEATURE_KEY,
      fromDandelionState.dandelionStateReducer
    ),
    provideEffects(),
    provideStore(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes), provideAnimationsAsync(), provideAnimationsAsync(),
  ],
};
