import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ShoppingListDataService } from "../services/shopping-list-data.service";
import * as actions from '../actions/shopping-list.actions';
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class ShoppingItemsEffects {

    loadShoppingItems$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.loadShoppingList),
            mergeMap(() => this.service.getShoppingList()
                .pipe(
                    map(payload => actions.loadShoppingListSucceeded({ payload }))
                )
            )
        )
    );

    constructor(private actions$: Actions, private service: ShoppingListDataService) { }
}