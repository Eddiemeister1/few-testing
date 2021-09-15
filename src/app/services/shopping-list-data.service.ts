import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ShoppingEntity } from "../reducers/shopping-list.reducer";



@Injectable()
export class ShoppingListDataService {

    readonly baseUrl = environment.apiUrl;

    constructor(private client: HttpClient) { }

    markItemAsPurchased(item: ShoppingEntity) {
        return this.client.post(this.baseUrl + '/shopping-items/purchased', { item });
    }

    getShoppingList(): Observable<ShoppingEntity[]> {
        return this.client.get<GetShoppingResponse>(this.baseUrl + '/shopping-items')
            .pipe(
                map(response => response.data)
            )
    }
}

interface GetShoppingResponse {
    data: ShoppingEntity[],

}