import { createAction, props } from "@ngrx/store";
import { ShoppingEntity } from "../reducers/shopping-list.reducer";

export const loadShoppingList = createAction(
    '[shopping-list] load shopping list'
);

export const loadShoppingListSucceeded = createAction(
    '[shopping-list] loading the shopping list succeeded',
    props<{ payload: ShoppingEntity[] }>()
);

export const markPurchased = createAction(
    '[shopping-list] mark item purchased',
    props<{ payload: ShoppingEntity }>()
)

export const loadShoppingListFailed = createAction(
    '[shopping-list] load shopping list failed',
    props<{ payload: string }>()
);
