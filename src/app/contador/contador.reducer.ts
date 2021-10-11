import { Action, createReducer, on } from "@ngrx/store"
import * as actions from "./contador.action"

export const initial = 0

const _counterReducer = createReducer(
    initial,
    on(actions.inc, state => state + 1),
    on(actions.dec, state => state - 1),
    on(actions.random, state => Math.floor(Math.random() *100)),
    on(actions.saltar, (state, { num }) => num ),
)

export function counterReducer(state: number | undefined, action: Action) {
    return _counterReducer(state, action)
}