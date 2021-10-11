import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as mainCharReducer from "../reducer/mainchar.reducer"

export const getSpeedState = createFeatureSelector<mainCharReducer.State>('mainChar')

export const getSpeed = createSelector(
    getSpeedState,
    (state: mainCharReducer.State) => state.speed
)