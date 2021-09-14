import * as fromStores from './store.reducer';
import * as actions from '../actions/stores.action';
describe('The Stores Reducer', () => {

    it('has an empty initial state', () => {
        expect(fromStores.initialState).toEqual({
            ids: [],
            entities: {}
        })
    });
    it('allows up to set all the data', () => {
        const payload: fromStores.StoreEntity[] = [
            { id: '99', name: 'Tesco' },
            { id: '42', name: 'Speedway' }
        ];
        const action = actions.loadStoresSucceeded({ payload })

        const newInitialState: fromStores.StoreState = {
            ids: ['12'],
            entities: {
                12: { id: '12', name: 'Circle K' }
            }
        }

        const newState = fromStores.reducer(newInitialState, action);

        expect(newState).toEqual({
            ids: ['99', '42'],
            entities: {
                99: { id: '99', name: 'Tesco' },
                42: { id: '42', name: 'Speedway' }
            }
        })
    });
});
