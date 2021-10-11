import { Action, createReducer, on } from "@ngrx/store";
import * as actions from "../action/mainchar.action"

export interface State {
    speed: number
    w: number
    h: number
    color: string
}

export const initialState: State = {
    speed: 1,
    w: 40,
    h: 80,
    color: 'red'
}

const _mainReducer = createReducer(
    initialState,
    on(actions.normal, (state) => ({speed: 1, w: 50, h: 100, color: 'red'})),
    on(actions.speed, (state, {s}) => ({speed: s, w: 30, h: 180, color: 'blue'})),
    on(actions.slow, (state, {s}) => ({speed: s, w: 60, h: 80, color: 'green'})),
)

export function mainReducer(state: State | undefined, action: Action){
    return _mainReducer(state, action)
}


// import { Action, createReducer, on } from "@ngrx/store"
// import * as actions from "./contador.action"

// export const initial = 0

// const _counterReducer = createReducer(
//     initial,
//     on(actions.inc, state => state + 1),
//     on(actions.dec, state => state - 1),
//     on(actions.random, state => Math.floor(Math.random() *100)),
//     on(actions.saltar, (state, { num }) => num ),
// )

// export function counterReducer(state: number | undefined, action: Action) {
//     return _counterReducer(state, action)
// }