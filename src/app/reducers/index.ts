import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { zipcodeReducer, ZipcodeState } from './zipcode.reducer';
//import {zipcodeReducer, ZipcodeState} from './zip-codes.reducer';

export interface State {
  zipcodes: ZipcodeState
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: zipcodeReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];