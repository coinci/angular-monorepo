import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as DandelionStateActions from './dandelion-state.actions';
import { DandelionStateEffects } from './dandelion-state.effects';

describe('DandelionStateEffects', () => {
  let actions: Observable<Action>;
  let effects: DandelionStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DandelionStateEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(DandelionStateEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: DandelionStateActions.initDandelionState() });

      const expected = hot('-a-|', {
        a: DandelionStateActions.loadDandelionStateSuccess({
          dandelionState: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
