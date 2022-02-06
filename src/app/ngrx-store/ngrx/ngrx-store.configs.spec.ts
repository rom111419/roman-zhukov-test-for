import { metaReducers } from './ngrx-store.configs';

describe('ngrx-store configs', () => {
  it('should return metaReducers depending on environment', () => {
    metaReducers(true);
    metaReducers(false);
  });
});
