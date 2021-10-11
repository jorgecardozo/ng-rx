import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { GitService } from '../services/git.services'
import { ApiGetData, ApiGetDataError, ApiError, ApiSuccess } from '../action/git.action'
import { catchError, map, mergeMap, tap } from 'rxjs/operators'
import { of } from 'rxjs'

@Injectable()
export class GitEffects {
    constructor(private actions$: Actions, private gitApi: GitService){}

    getGitDataEffect$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(ApiGetData),//dispara este effect ////se dispara el log  //Escucha por [Action - ApiGetData]
            tap(() => { console.log("Git APi in queue")}),
            mergeMap((action) => {
                console.log("Git Api in proccess")
                return this.gitApi.gitUser(action.id).pipe(
                    map(res => ApiSuccess({data: res})),
                        catchError(error => of(ApiError({ error }))),
                        tap(()=> { console.log('Git End') })
                )
            })
        )
    })

    getGitDataError$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(ApiGetDataError),//dispara este effect ////se dispara el log  //Escucha por [Action - ApiGetData]
            tap(() => { console.log("Git APi Error in queue")}),
            mergeMap((action) => {
                console.log("GitDataErrorEffect running")
                return this.gitApi.gitError().pipe(
                    map(res => ApiSuccess({data: res})),
                        catchError(error => of(ApiError({ error }))),
                        tap(()=> { console.log('GitDataErrorEffect Finished') })
                )
            })
        )
    })
}