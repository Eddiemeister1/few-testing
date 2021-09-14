import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/stores.action';

export interface StoreEntity {
    id: string,
    name: string
}

export interface StoreState extends EntityState<StoreEntity> {

}

export const adapter = createEntityAdapter<StoreEntity>();

export const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
    initialState,
    on(actions.loadStoresSucceeded, (s, a) => adapter.setAll(a.payload, s))
);

export function reducer(state: StoreState = initialState, action: Action): StoreState {
    return reducerFunction(state, action);
}



