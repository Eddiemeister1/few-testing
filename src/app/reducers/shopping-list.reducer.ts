import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/shopping-list.actions';
export interface ShoppingEntity {
    id: string,
    description: string,
    purchased: boolean,
    store?: string
}

export interface ShoppingState extends EntityState<ShoppingEntity> {

}

export const adapter = createEntityAdapter<ShoppingEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
    initialState,
    on(actions.loadShoppingListSucceeded, (s, a) => adapter.setAll(a.payload, s)),
    on(actions.markPurchased, (s, a) => adapter.updateOne({
        id: a.payload.id,
        changes: {
            purchased: true
        }
    }, s))
);

export function reducer(state: ShoppingState = initialState, action: Action): ShoppingState {
    return reducerFunction(state, action);
}



