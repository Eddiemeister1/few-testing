import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ShoppingEntity } from "../reducers/shopping-list.reducer";




@Injectable()
export class ShoppingListDataService {



    getShoppingList(): Observable<ShoppingEntity[]> {
        return of([
            { id: '1', description: 'Beer', purchased: false },
            { id: '2', description: 'Chips', purchased: true },
            { id: '3', description: 'Shampoo', purchased: false, store: '1' }
        ])
    }
}