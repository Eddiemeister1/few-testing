import { TestBed } from "@angular/core/testing";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { TestScheduler } from "rxjs/testing";
import { ShoppingListDataService } from "../services/shopping-list-data.service";
import { ShoppingItemsEffects } from "./shopping-items.effects";
import { provideMockActions } from "@ngrx/effects/testing";
import { loadShoppingList } from "../actions/shopping-list.actions";
import * as actions from '../actions/shopping-list.actions';
import * as appActions from '../actions/app.actions';
describe('ShoppingItemsEffects', () => {

    let effects: ShoppingItemsEffects;
    let actions$: Observable<Action>;
    let testScheduler: TestScheduler;
    let spyService: jasmine.SpyObj<ShoppingListDataService>;

    beforeEach(() => {
        actions$ = new Observable<Action>();
        spyService = jasmine.createSpyObj('ShoppingDataService', ['getShoppingList', 'markItemAsPurchased'])
        TestBed.configureTestingModule({
            providers: [ShoppingItemsEffects,
                provideMockActions(() => actions$),
                { provide: ShoppingListDataService, useValue: spyService }
            ]
        });
        effects = TestBed.inject(ShoppingItemsEffects);
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        })
    })

    it('can create the effect', () => {
        expect(effects).not.toBeNull();
    });

    it('loadShoppingList -> LoadShoppingSucceeded', () => {
        testScheduler.run(({ hot, cold, expectObservable }) => {
            actions$ = hot('-a', { a: actions.loadShoppingList() });

            spyService.getShoppingList.and.returnValue(
                cold('--b', { b: [{ id: '1', description: 'Beer', purchased: false }] })
            );

            expectObservable(effects.loadShoppingItems$).toBe('---c', { c: actions.loadShoppingListSucceeded({ payload: [{ id: '1', description: 'Beer', purchased: false }] }) })
        })
    });

    it('http call fails loadShoppingList => applicationError', () => {
        testScheduler.run(({ hot, cold, expectObservable }) => {
            actions$ = hot('-a', { a: actions.loadShoppingList() }); // what kicks off the effect we are testing?

            spyService.getShoppingList.and.returnValue( //set up the service to return either something real (above) or an error.
                cold('--#', undefined, { status: 404 })
            )
            expectObservable(effects.loadShoppingItems$).toBe('---c', {
                c: appActions.applicationError({ source: 'Shopping', message: 'Cannot Load Shopping List' })
            })
        })
    });
});