import { createSelector } from "@ngrx/store";
import { GitState } from "../reducer/git.reducer"

const getError = (state: GitState): string => state.error
const getData = (state: GitState): string => state.data

const getStateError = createSelector(
    (state: any) => state.rootState,
    getError
)

const getStateData = createSelector(
    (state: any) => state.gitState,
    getData
)

export { getStateError, getStateData }