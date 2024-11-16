import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as DandelionStateActions from './dandelion-state.actions';
import * as DandelionStateFeature from './dandelion-state.reducer';

@Injectable()
export class DandelionStateEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DandelionStateActions.initDandelionState),
      switchMap(() =>
        of(
          DandelionStateActions.loadDandelionStateSuccess({
            dandelionState: [],
          })
        )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(DandelionStateActions.loadDandelionStateFailure({ error }));
      })
    )
  );
}
