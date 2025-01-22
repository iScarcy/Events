import { createReducer, on } from "@ngrx/store";
import { loadsaintfail, loadsaintssuccess, newsaintssuccess } from "./saints.actions";
import { initialState } from "./saints.state";
 

const _saintsReducer = createReducer(
    initialState,
  
    
    on(loadsaintssuccess, (state,action)=>{
         return {
            saints:action.saints,
            errormessage:""
        }
    }),
    on(loadsaintfail, (state,action)=>{
        return {
           saints:[],
           errormessage:action.errormessage
       }
   }),
    on(newsaintssuccess, (state, action)=>{
        
        let newSaints = [...state.saints];
        newSaints.push(action.saint);
        return {
           saints: newSaints,
           errormessage:""
       }
   }),
    
)

export function saintsReducer(state: any, action: any) {
    return _saintsReducer(state, action);
  }