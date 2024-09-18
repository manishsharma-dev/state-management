import { Action } from '@ngrx/store';
import {AddZipcode, ZipcodeActionTypes, ZipcodeActions} from '../actions/zipcode.actions';


export interface ZipcodeState {
    zipcodes: string[];
}

export const initialState: ZipcodeState = {
    zipcodes: []
};

export function zipcodeReducer(state = initialState, action: Action): ZipcodeState {
  switch (action.type) {
      case ZipcodeActionTypes.AddZipcode:
          return {...state, zipcodes: [...state.zipcodes, (action as AddZipcode).zipcode]};
      case ZipcodeActionTypes.RemoveZipcode:
          return {...state, zipcodes: state.zipcodes
                  .filter(item => item !== (action as AddZipcode).zipcode)};
    default:
      return state;
  }
}