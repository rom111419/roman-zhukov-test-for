import { environment } from '../../environments/environment';
import { devEnv } from './ngrx-store.module';

describe('environment.production', () => {
  it('should return environment.production  depending on environment', () => {
    environment.production = true;
    devEnv(environment.production);
  });
});
