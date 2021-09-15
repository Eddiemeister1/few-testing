import { createAction, props } from '@ngrx/store';

//Event "just saying this happened"
export const applicationStarted = createAction(
    '[app] application started'
);


export const applicationError = createAction(
    '[app] application error',
    props<{ source: string, message: string }>()
);