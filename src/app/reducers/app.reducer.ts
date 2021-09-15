import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/app.actions';
export interface ApplicationLevelState {
    errorMessage?: string;
    source?: string;
    hasError: boolean;
}

const initialState: ApplicationLevelState = {
    hasError: false
}

const reducerFunction = createReducer(
    initialState,
    on(actions.applicationError, (s, a) => ({ errorMessage: a.message, source: a.source, hasError: true }))
)

export function reducer(state: ApplicationLevelState = initialState, action: Action): ApplicationLevelState {
    return reducerFunction(state, action);
}