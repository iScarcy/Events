import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { LOAD_SAINTS, loadsaintssuccess } from "./saints.actions";
import { exhaustMap, map } from "rxjs";
import { SaintsService } from "src/app/services/saints.service";
 

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
                    })
                )
            })
        )
    );
}