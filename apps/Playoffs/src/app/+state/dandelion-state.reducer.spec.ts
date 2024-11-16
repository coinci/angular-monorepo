import { Action } from '@ngrx/store';

import * as DandelionStateActions from './dandelion-state.actions';
import { DandelionStateEntity } from './dandelion-state.models';
import {
  DandelionStateState,
  initialDandelionStateState,
  dandelionStateReducer,
} from './dandelion-state.reducer';

describe('DandelionState Reducer', () => {
  const createDandelionStateEntity = (
    id: string,
    name = ''
  ): DandelionStateEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid DandelionState actions', () => {
    it('loadDandelionStateSuccess should return the list of known DandelionState', () => {
      const dandelionState = [
        createDandelionStateEntity('PRODUCT-AAA'),
        createDandelionStateEntity('PRODUCT-zzz'),
      ];
      const action = DandelionStateActions.loadDandelionStateSuccess({
        dandelionState,
      });

      const result: DandelionStateState = dandelionStateReducer(
        initialDandelionStateState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = dandelionStateReducer(initialDandelionStateState, action);

      expect(result).toBe(initialDandelionStateState);
    });
  });
});
