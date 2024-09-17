import { eventsReducer } from "../events.reducer";
import { saintsReducer } from "../Saints/saints.reducer";

export const AppState = {
    events:eventsReducer,
    saints:saintsReducer
}