import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Store } from "@ngrx/store";
import { provideMockStore } from "@ngrx/store/testing";
import { ShoppingState } from "src/app/reducers/shopping-list.reducer";
import { StoreState } from "src/app/reducers/store.reducer";
import { ShoppingListComponent } from "./shopping-list.component";
import { cold } from 'jasmine-marbles';
import { selectShoppingListItemModel } from "src/app/reducers";
describe('ShoppingListComponent', () => {

    let component: ShoppingListComponent;
    let fixture: ComponentFixture<ShoppingListComponent>;
    let store: Store<any>;

    const initialState: ShoppingState = {
        ids: ['1'],
        entities: {
            1: { id: '1', description: 'Beer', purchased: false },
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ShoppingListComponent],
            providers: [provideMockStore({ initialState })]
        })
        store = TestBed.inject(Store);
        fixture = TestBed.createComponent(ShoppingListComponent);
        component = fixture.componentInstance;
    });

    it('calls select', () => {
        const fakeStore = jasmine.createSpyObj('Store', ['select']);
        const comp = new ShoppingListComponent(fakeStore);
        comp.ngOnInit();
        fixture.detectChanges();
        expect(fakeStore.select).toHaveBeenCalledWith(selectShoppingListItemModel);
    });

    xit('it selects and assigns to the items$ field', () => {
        component.ngOnInit();
        fixture.detectChanges();
        const expected = cold('a', { a: [{ id: '1', description: 'Beer', purchased: false, store: 'Unknown' }] });
        expect(component.items$).toBeObservable(expected);
    });
});