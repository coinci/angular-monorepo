import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  DANDELION_STATE_FEATURE_KEY,
  DandelionStateState,
  dandelionStateAdapter,
} from './dandelion-state.reducer';

// Lookup the 'DandelionState' feature state managed by NgRx
export const selectDandelionStateState =
  createFeatureSelector<DandelionStateState>(DANDELION_STATE_FEATURE_KEY);

const { selectAll, selectEntities } = dandelionStateAdapter.getSelectors();

export const selectDandelionStateLoaded = createSelector(
  selectDandelionStateState,
  (state: DandelionStateState) => state.loaded
);

export const selectDandelionStateError = createSelector(
  selectDandelionStateState,
  (state: DandelionStateState) => state.error
);

export const selectAllDandelionState = createSelector(
  selectDandelionStateState,
  (state: DandelionStateState) => selectAll(state)
);

export const selectDandelionStateEntities = createSelector(
  selectDandelionStateState,
  (state: DandelionStateState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectDandelionStateState,
  (state: DandelionStateState) => state.selectedId
);

export const selectEntity = createSelector(
  selectDandelionStateEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
