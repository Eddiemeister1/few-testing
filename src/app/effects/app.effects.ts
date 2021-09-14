import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as appActions from '../actions/app.actions';
import * as storeActions from '../actions/stores.action';
import * as shoppingListActions from '../actions/shopping-list.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {

    loadStores$ = createEffect(() =>
        this.actions$.pipe(
            ofType(appActions.applicationStarted),
            map(() => storeActions.loadStores())
        )
    );

    loadShoppingList$ = createEffect(() => // when the application starts, tell the shopping list to load
        this.actions$.pipe(
            ofType(appActions.applicationStarted),
            map(() => shoppingListActions.loadShoppingList())
        )
    );

    constructor(private actions$: Actions) { }
}