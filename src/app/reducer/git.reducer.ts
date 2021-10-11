import { Action, createReducer, on } from "@ngrx/store";
import { ApiError, ApiSuccess } from "../action/git.action"

export interface GitState {
    error: any,
    data: any
}

/* Los Reducers se utilizan para inixializar el State*/
const initialState: GitState = {
    error: null,
    data: null
}

export const gitReducer = createReducer(
    initialState,
    on(ApiError, (state, action) => ({ error: action.error, data: null})),
    on(ApiSuccess, (state, action) => ({ data: action.data, error: null}))
)