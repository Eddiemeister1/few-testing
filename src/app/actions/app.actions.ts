import { createAction } from '@ngrx/store';

//Event "just saying this happened"
export const applicationStarted = createAction(
    '[app] application started'
);