import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as DandelionStateActions from './dandelion-state.actions';
import * as DandelionStateFeature from './dandelion-state.reducer';
import { OverviewService } from '../service/overview.service';

@Injectable()
export class DandelionStateEffects {
  private actions$ = inject(Actions);
  private overviewService = inject(OverviewService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DandelionStateActions.initDandelionState),
      switchMap(() =>
        this.overviewService.getAllAccounts().pipe(
          switchMap((accounts) => [
            DandelionStateActions.loadDandelionStateSuccess({
              dandelionState: accounts,
            }),
          ]),
          catchError((error) =>
            of(DandelionStateActions.loadDandelionStateFailure({ error }))
          )
        )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(DandelionStateActions.loadDandelionStateFailure({ error }));
      })
    )
  );
}
