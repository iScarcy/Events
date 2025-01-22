import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { LOAD_SAINTS, loadsaintfail, loadsaintssuccess, NEW_SAINT, newsaintssuccess } from "./saints.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { SaintsService } from "src/app/services/saints.service";
import { INewSaintStoreRequestModel } from "./saints.model";
 

@Injectable()
export class SaintEffects{
    constructor( private action$: Actions, private saintsService: SaintsService){

    }

    loadEffects$ = createEffect(() =>   
        this.action$.pipe(
            ofType(LOAD_SAINTS),
            exhaustMap(()=>{
                return this.saintsService.getSaints().pipe(
                    map((data) => {
                        return loadsaintssuccess({saints:data})
                    }),
                    catchError((_error)=>of(loadsaintfail({errormessage:_error.message})))
                )
            })
        )
    );

    newSaint$ = createEffect(() => 
        this.action$.pipe(
            ofType(NEW_SAINT),
            exhaustMap((request:INewSaintStoreRequestModel)=>{
                
                return this.saintsService.addSaint({
                    description: request.data.description,
                    date: request.data.date
                }).pipe(
                    map((data) => {
                        return newsaintssuccess({saint:data})
                    })
                )
            })
        )
    );
}