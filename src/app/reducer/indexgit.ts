import { ApiError, ApiSuccess, ApiGetData, ApiGetDataError } from "../action/git.action"
import { GitEffects } from "../effect/git.effect"
import { gitReducer } from './git.reducer'
import { getStateError, getStateData } from "../selector/git.selector"


export const fromRoot = {
    ApiError, 
    ApiSuccess, 
    ApiGetData, 
    ApiGetDataError,
    
    GitEffects,

    gitReducer,

    getStateError, 
    getStateData
}