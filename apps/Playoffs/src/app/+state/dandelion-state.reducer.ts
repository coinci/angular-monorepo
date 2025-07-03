import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as DandelionStateActions from './dandelion-state.actions';
import { DandelionStateEntity } from './dandelion-state.models';

export const DANDELION_STATE_FEATURE_KEY = 'dandelionState';

export interface DandelionStateState extends EntityState<DandelionStateEntity> {
  selectedId?: string | number; // which DandelionState record has been selected
  loaded: boolean; // has the DandelionState list been loaded
  error?: string | null; // last known error (if any)
}

export interface DandelionStatePartialState {
  readonly [DANDELION_STATE_FEATURE_KEY]: DandelionStateState;
}

export const dandelionStateAdapter: EntityAdapter<DandelionStateEntity> =
  createEntityAdapter<DandelionStateEntity>();

export const initialDandelionStateState: DandelionStateState =
  dandelionStateAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialDandelionStateState,
  on(DandelionStateActions.initDandelionState, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    DandelionStateActions.loadDandelionStateSuccess,
    (state, { dandelionState }) => {
      console.log('......in reducer');
      return dandelionStateAdapter.setAll(dandelionState, {
        ...state,
        loaded: true,
      });
    }
  ),
  on(DandelionStateActions.loadDandelionStateFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function dandelionStateReducer(
  state: DandelionStateState | undefined,
  action: Action
) {
  return reducer(state, action);
}
