import { createReducer, on } from "@ngrx/store";
import { loadsaintssuccess, newsaintssuccess } from "./saints.actions";
import { initialState } from "./saints.state";
 

const _saintsReducer = createReducer(
    initialState,
  
    
    on(loadsaintssuccess, (state,action)=>{
         return {
            saints:action.saints
        }
    }),
    on(newsaintssuccess, (state, action)=>{
        
        let newSaints = [...state.saints];
        newSaints.push(action.saint);
        return {
           saints: newSaints
       }
   }),
    
)

export function saintsReducer(state: any, action: any) {
    return _saintsReducer(state, action);
  }