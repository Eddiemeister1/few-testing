import { createAction, props } from "@ngrx/store";
import { StoreEntity } from "../reducers/store.reducer";

//Command - "Do this thing"
export const loadStores = createAction(
    '[stores] load stores'
);

export const loadStoresSucceeded = createAction(
    '[stores] loading the stores succeeded',
    props<{ payload: StoreEntity[] }>()
);

export const loadStoresFailed = createAction(
    '[stores] loading the stores failed',
    props<{ payload: string }>()
);
