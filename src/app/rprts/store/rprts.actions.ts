import {Action} from '@ngrx/store';
import {Rprt} from '../shared/rprt';

export const GET_RPRTS = '[ALL] Villains';
export const GET_RPRTS_SUCCESS = '[ALL] Villains Success';
export const GET_RPRTS_ERROR = '[ALL] Villains Error';

export const GET_RPRT = '[GET] Villain';
export const GET_RPRT_SUCCESS = '[GET] Villains Success';
export const GET_RPRT_ERROR = '[GET] Villains Error';

export const CREATE_RPRT = '[CREATE] Rprt';
export const CREATE_RPRT_SUCCESS = '[CREATE] Rprt Success';
export const CREATE_RPRT_ERROR = '[CREATE] Rprt Error';


export const DELETE_RPRT = '[DELETE] Villain';
export const DELETE_RPRT_SUCCESS = '[DELETE] Villain Success';
export const DELETE_RPRT_ERROR = '[DELETE] Villain Error';

/****************************************
 * GET all the villains
 ****************************************/
export class GetAllRprts implements Action {
  readonly type = GET_RPRTS;
}

export class GetAllRprtsSuccess implements Action {
  readonly type = GET_RPRTS_SUCCESS;

  constructor(public payload: Rprt[]) {
  }
}

export class GetAllRprtsError implements Action {
  readonly type = GET_RPRTS_ERROR;

  constructor(public payload: Error) {
  }
}

/****************************************
 * GET villain by id
 ****************************************/
export class GetRprt implements Action {
  readonly type = GET_RPRT;

  constructor(public payload: number) {
  }
}

export class GetRprtSuccess implements Action {
  readonly type = GET_RPRT_SUCCESS;

  constructor(public payload: Rprt) {
  }
}

export class GetRprtError implements Action {
  readonly type = GET_RPRT_ERROR;

  constructor(public payload: Error) {
  }
}
/****************************************
 * ADD new hero
 ****************************************/
export class AddRprt implements Action {
  readonly type = CREATE_RPRT;

  constructor(public payload: Rprt) {
  }
}

export class AddRprtSuccess implements Action {
  readonly type = CREATE_RPRT_SUCCESS;

  constructor(public payload: number) {
  }
}

export class AddRprtError implements Action {
  readonly type = CREATE_RPRT_ERROR;

  constructor(public payload: Error) {
  }
}
/****************************************
 * REMOVE a villain by id
 ****************************************/
export class RemoveRprt implements Action {
  readonly type = DELETE_RPRT;

  constructor(public payload: number) {
  }
}

export class RemoveRprtSuccess implements Action {
  readonly type = DELETE_RPRT_SUCCESS;

  constructor(public payload: Rprt) {
  }
}

export class RemoveRprtError implements Action {
  readonly type = DELETE_RPRT_ERROR;

  constructor(public payload: Error) {
  }
}
