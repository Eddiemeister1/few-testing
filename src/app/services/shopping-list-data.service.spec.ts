import { HttpClient } from "@angular/common/http";
import { ShoppingListDataService } from "./shopping-list-data.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
describe('ShoppingListDataService', () => {

    describe('getting the shopping list', () => {

        let httpClient: HttpClient;
        let service: ShoppingListDataService;
        let httpTestingController: HttpTestingController;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                providers: [ShoppingListDataService]
            });

            httpClient = TestBed.inject(HttpClient);
            service = TestBed.inject(ShoppingListDataService);
            httpTestingController = TestBed.inject(HttpTestingController);
        })

        it('can get the data', () => {
            const fakeData = {
                data: [
                    {
                        "id": "1",
                        "description": "Socks",
                        "store": "Target",
                        "purchased": false
                    },
                    {
                        "id": "2",
                        "description": "Hat",
                        "purchased": true
                    }
                ],
                "numberOfItems": 3
            };
            service.getShoppingList().pipe(
                tap(response => expect(response).toEqual(fakeData.data))
            ).subscribe();

            const req = httpTestingController.expectOne(environment.apiUrl + '/shopping-items');
            expect(req.request.method).toBe('GET');

            req.flush(fakeData);
        });
        afterEach(() => {
            httpTestingController.verify();
        })
    });
});