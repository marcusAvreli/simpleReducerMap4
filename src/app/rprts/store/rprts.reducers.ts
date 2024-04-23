import * as rprtActions from './rprts.actions';
import {AppAction} from '../../app.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';

import {Rprt} from '../shared/rprt';

export interface State {
 
  data: Rprt[];
  
  selected: Rprt;
  action: string;
  done: boolean;
  error?: Error;
}

const initialState: State = {
  data: [],
  
  selected: null,
  
  action: null,
  done: false,
  error: null
};

export function reducer(state = initialState, action: AppAction): State {
  // ...state create immutable state object
  console.log("reducer called.action:"+action.type);
  switch (action.type) {
    /*************************
     * GET all villains actions
     ************************/
    case rprtActions.GET_RPRTS:
	 console.log("get val check");
      return {...state, action: rprtActions.GET_RPRTS, done: false};
    case rprtActions.GET_RPRTS_SUCCESS:
	console.log("get val check");
      return {...state, data: action.payload, done: true};
    case rprtActions.GET_RPRTS_ERROR:
	console.log("get val check");
      return {...state, done: false, error: action.payload};

    /*************************
     * GET villain by id actions
     ************************/
    case rprtActions.GET_RPRT:
      return {...state, action: rprtActions.GET_RPRT, done: false};
    case rprtActions.GET_RPRT_SUCCESS:
      return {...state, selected: action.payload, done: true};
    case rprtActions.GET_RPRT_ERROR:
      return {...state, selected: null, done: false, error: action.payload};

	/*************************
     * create rprt by id actions
     ************************/
    case rprtActions.CREATE_RPRT:
	console.log("crete rpr");
      return {...state, action: rprtActions.CREATE_RPRT, done: false};
    case rprtActions.CREATE_RPRT_SUCCESS:
      return {...state, selected: action.payload, done: true};
    case rprtActions.CREATE_RPRT_ERROR:
      return {...state, selected: null, done: false, error: action.payload};

    /*************************
     * DELETE villain actions
     ************************/
    case rprtActions.DELETE_RPRT: {
      const selected = state.data.find(h => h.id === action.payload);
      return {...state, selected, action: rprtActions.DELETE_RPRT, done: false};
    }
    case rprtActions.DELETE_RPRT_SUCCESS: {
      const data = state.data.filter(h => h.id !== state.selected.id);
      return {...state, data, selected: null, done: true};
    }
    case rprtActions.DELETE_RPRT_ERROR:
      return {...state, selected: null, done: false, error: action.payload};
  }
  return state;
}

/*************************
 * SELECTORS
 ************************/
export const getRprtState = createFeatureSelector<State>('rprts');
export const getAllRprts = createSelector(getRprtState, (state: State) => state.data);
export const getVillain = createSelector(getRprtState, (state: State) => {
  if (state.action === rprtActions.GET_RPRT && state.done) {
    return state.selected;
  } else {
    return null;
  }

});
export const isDeleted = createSelector(getRprtState, (state: State) => state.action === rprtActions.DELETE_RPRT && state.done);

export const getDeleteError = createSelector(getRprtState, (state: State) => {
  return state.action === rprtActions.DELETE_RPRT ? state.error : null;
});

export const getRprtsError = createSelector(getRprtState, (state: State) => {
  return state.action === rprtActions.GET_RPRTS || state.action === rprtActions.GET_RPRT ? state.error : null;
});

export const getRprtError = createSelector(getRprtState, (state: State) => {
  return state.action === rprtActions.GET_RPRT ? state.error : null;
});
