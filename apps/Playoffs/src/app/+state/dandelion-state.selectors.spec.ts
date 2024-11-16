import { DandelionStateEntity } from './dandelion-state.models';
import {
  dandelionStateAdapter,
  DandelionStatePartialState,
  initialDandelionStateState,
} from './dandelion-state.reducer';
import * as DandelionStateSelectors from './dandelion-state.selectors';

describe('DandelionState Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getDandelionStateId = (it: DandelionStateEntity) => it.id;
  const createDandelionStateEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DandelionStateEntity);

  let state: DandelionStatePartialState;

  beforeEach(() => {
    state = {
      dandelionState: dandelionStateAdapter.setAll(
        [
          createDandelionStateEntity('PRODUCT-AAA'),
          createDandelionStateEntity('PRODUCT-BBB'),
          createDandelionStateEntity('PRODUCT-CCC'),
        ],
        {
          ...initialDandelionStateState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('DandelionState Selectors', () => {
    it('selectAllDandelionState() should return the list of DandelionState', () => {
      const results = DandelionStateSelectors.selectAllDandelionState(state);
      const selId = getDandelionStateId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = DandelionStateSelectors.selectEntity(
        state
      ) as DandelionStateEntity;
      const selId = getDandelionStateId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectDandelionStateLoaded() should return the current "loaded" status', () => {
      const result = DandelionStateSelectors.selectDandelionStateLoaded(state);

      expect(result).toBe(true);
    });

    it('selectDandelionStateError() should return the current "error" state', () => {
      const result = DandelionStateSelectors.selectDandelionStateError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
