import { Component, Input, OnInit } from '@angular/core';
import { markPurchased } from 'src/app/actions/shopping-list.actions';
import { ShoppingListItemModel } from 'src/app/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent {

  @Input() item!: ShoppingListItemModel;
  constructor(private store: Store<AppState>) { }

  markPurchased(item: ShoppingListItemModel) {
    this.store.dispatch(markPurchased({ payload: item }))
  }

}
