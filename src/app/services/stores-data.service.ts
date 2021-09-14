import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { StoreEntity } from "../reducers/store.reducer";

@Injectable()
export class StoresDataService {
    getStores(): Observable<StoreEntity[]> {
        //replace this with an http call later.
        return of([
            { id: '1', name: 'Target' },
            { id: '2', name: 'Giant Eagle' },
            { id: '3', name: 'Heinen\'s' }
        ]);
    }
}