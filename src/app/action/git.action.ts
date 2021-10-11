import { createAction, props } from "@ngrx/store";

/* Tenemos que crear 4 actions y tengo dos Estados*/

//2 que va disparar el Component(va a estar enviado el user(id)=) -> va al store 
export const ApiGetData = createAction('[GIT] API Get Data', props<{ id: string}>())
export const ApiGetDataError = createAction('[GIT] API Get Data Error', props<{id: string}>())

//2 que los va a leer el Effect -> va al service
export const ApiError = createAction('[GIT] API Error', props<{error: any}>())
export const ApiSuccess = createAction('[GIT] API Success', props<{data: any}>())
