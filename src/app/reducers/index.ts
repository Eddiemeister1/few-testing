import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromStores from './store.reducer';
import * as fromShoppingList from './shopping-list.reducer';
import * as fromApp from './app.reducer';
import { ShoppingListItemModel } from "../models";

export interface AppState {
    stores: fromStores.StoreState,
    shoppingList: fromShoppingList.ShoppingState,
    app: fromApp.ApplicationLevelState
}

export const reducers: ActionReducerMap<AppState> = {
    stores: fromStores.reducer,
    shoppingList: fromShoppingList.reducer,
    app: fromApp.reducer
}

//Selector Function per branch
export const _selectStoresBranch = (state: AppState) => state.stores;
export const _selectShoppingListBranch = (state: AppState) => state.shoppingList;
export const _selectAppBranch = (state: AppState) => state.app;

export const _selectShoppingListItemArray = fromShoppingList.adapter.getSelectors(_selectShoppingListBranch).selectAll;
export const { selectEntities: _selectStoresEntities } = fromStores.adapter.getSelectors(_selectStoresBranch);


//TODO: Need a selector that returns an array of ShoppingListItemModel[]
export const selectShoppingListItemModel = createSelector(
    _selectShoppingListItemArray,
    _selectStoresEntities,
    (items, stores) => {
        return items.map(item => ({
            ...item,
            store: item.store ? stores[item.store]?.name : 'Unknown'
        } as ShoppingListItemModel))
    }
)

export const selectHasError = createSelector(
    _selectAppBranch,
    b => b.hasError
)

export const selectErrorMessage = createSelector(
    _selectAppBranch,
    b => b.errorMessage
)