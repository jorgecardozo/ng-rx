import { createAction, props } from "@ngrx/store"

export const inc = createAction("Incrementar")
export const dec = createAction("Decrementar")
export const random = createAction("Random")
export const saltar = createAction("Saltar", 
    props<{ num: number }>()
)
