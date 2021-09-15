import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ShoppingListItemModel } from "src/app/models";
import { ShoppingListItemComponent } from "./shopping-list-item.component";

describe('ShoppingListItemComponent', () => {

    describe('Unpurchased Item With No Store', () => {
        let testHostFixture: ComponentFixture<UnpurchasedTestHostComponent>;
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
            TestBed.configureTestingModule({
                declarations: [UnpurchasedTestHostComponent, ShoppingListItemComponent]
            });
            testHostFixture = TestBed.createComponent(UnpurchasedTestHostComponent);



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
            TestBed.configureTestingModule({
                declarations: [TestHostComponent, ShoppingListItemComponent]
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