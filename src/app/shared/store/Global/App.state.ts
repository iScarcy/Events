import { routerReducer } from "@ngrx/router-store";
import { eventsReducer } from "../events.reducer";
 
export const AppState = {
    events:eventsReducer,
    router:routerReducer
}