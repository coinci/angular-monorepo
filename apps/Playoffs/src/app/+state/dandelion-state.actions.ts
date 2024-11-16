import { createAction, props } from '@ngrx/store';
import { DandelionStateEntity } from './dandelion-state.models';

export const initDandelionState = createAction('[DandelionState Page] Init');

export const loadDandelionStateSuccess = createAction(
  '[DandelionState/API] Load DandelionState Success',
  props<{ dandelionState: DandelionStateEntity[] }>()
);

export const loadDandelionStateFailure = createAction(
  '[DandelionState/API] Load DandelionState Failure',
  props<{ error: any }>()
);
