import { MetaReducer } from '@ngrx/store';
import { State } from '../reducers';


export const metaReducers: (envProd: boolean) => MetaReducer<State>[] = (envProd: boolean) => envProd ? [] : [];

