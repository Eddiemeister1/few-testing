import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Store } from "@ngrx/store";
import { provideMockStore } from '@ngrx/store/testing';
import { ShoppingListItemModel } from "src/app/models";
import { AppState } from "src/app/reducers";
import { ShoppingEntity, ShoppingState } from "src/app/reducers/shopping-list.reducer";
import { ShoppingListItemComponent } from "./shopping-list-item.component";

describe('ShoppingListItemComponent', () => {

    describe('Unpurchased Item With No Store', () => {
        let testHostFixture: ComponentFixture<UnpurchasedTestHostComponent>;
        let store: Store<AppState>;
        @Component({
            template: `<app-shopping-list-item [item]="item"></app-shopping-list-item>`
        })
        class UnpurchasedTestHostComponent {
            item: ShoppingListItemModel = {
                id: '1',
                description: 'Tacos',
                purchased: true
            }
        }



        beforeEach(() => {
            const initialState: ShoppingState = {
                ids: [],
                entities: {}
            }
            TestBed.configureTestingModule({
                declarations: [UnpurchasedTestHostComponent, ShoppingListItemComponent],
                providers: [provideMockStore({ initialState })]
            });
            testHostFixture = TestBed.createComponent(UnpurchasedTestHostComponent);
            store = TestBed.inject(Store);


        });



        it('has the right description', () => {
            testHostFixture.detectChanges();
            expect(testHostFixture.nativeElement.querySelector('[data-shopping-list-item-description]').innerText).toBe('Tacos');
        });



        it('does show the purchase button', () => {
            testHostFixture.detectChanges();
            expect(testHostFixture.nativeElement.querySelector('[data-shopping-list-item-purchased]')).not.toBeNull();
        });

        it('shows unknown for the store since there is no store', () => {
            testHostFixture.detectChanges();
            expect(testHostFixture.nativeElement.querySelector('[data-shopping-list-item-store').innerText).toBe('Unknown');
        });


        it('dispatches the action to the store when the purchase button is clicked', () => {
            const dispatchSpy = spyOn(store, 'dispatch');
            testHostFixture.detectChanges();
            const button = testHostFixture.nativeElement.querySelector('[data-shopping-list-item-purchased] [data-shopping-list-item-purchase-button]');
            //expect(button).not.toBeNull();
            button.click();

            expect(dispatchSpy.calls.count()).toBe(1);
            const actionDispatched = dispatchSpy.calls.first().args[0] as { type: string, payload: ShoppingEntity };
            expect(actionDispatched.payload).toEqual({
                id: '1',
                description: 'Tacos',
                purchased: false
            });
            expect(actionDispatched.type).toEqual('[shopping-list] mark item purchased');
        });



    });

    describe('Purchased Item With No Store', () => {
        let testHostFixture: ComponentFixture<TestHostComponent>;
        @Component({
            template: `<app-shopping-list-item [item]="item"></app-shopping-list-item>`
        })
        class TestHostComponent {
            item: ShoppingListItemModel = {
                id: '1',
                description: 'Tacos',
                purchased: true
            }
        }

        beforeEach(() => {
            const initialState: ShoppingState = {
                ids: [],
                entities: {}
            }
            TestBed.configureTestingModule({
                declarations: [TestHostComponent, ShoppingListItemComponent],
                providers: [provideMockStore({ initialState })]
            });
            testHostFixture = TestBed.createComponent(TestHostComponent);

        });

        it('has the right description', () => {
            testHostFixture.detectChanges();
            expect(testHostFixture.nativeElement.querySelector('[data-shopping-list-item-description]').innerText).toBe('Tacos');
        });

        it('does not show the purchase button', () => {
            testHostFixture.detectChanges();
            expect(testHostFixture.nativeElement.querySelector('[data-shopping-list-item-purchased]')).toBeNull();
            expect(testHostFixture.nativeElement.querySelector('[data-shopping-list-item-purchased] [data-shopping-list-item-purchase-button]')).toBeNull();

        });

    });
});