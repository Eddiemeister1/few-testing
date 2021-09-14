import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StoresDataService } from "../services/stores-data.service";
import * as actions from '../actions/stores.action';
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class StoresEffects {

    loadStores$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.loadStores),
            mergeMap(() => this.service.getStores()
                .pipe(
                    map(payload => actions.loadStoresSucceeded({ payload })))
            )
        )
    );

    constructor(private actions$: Actions, private service: StoresDataService) { }
}