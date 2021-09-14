import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempConverterComponent } from './components/temp-converter/temp-converter.component';
import { ConvertersService } from './services/converters.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEntryComponent } from './components/shopping-entry/shopping-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingListItemComponent } from './components/shopping-list-item/shopping-list-item.component';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from "./effects/app.effects";
import { StoresEffects } from './effects/stores.effects';
import { ShoppingItemsEffects } from './effects/shopping-items.effects';
import { StoresDataService } from './services/stores-data.service';
import { ShoppingListDataService } from './services/shopping-list-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TempConverterComponent,
    NavigationComponent,
    HomeComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingEntryComponent,
    ShoppingListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AppEffects, StoresEffects, ShoppingItemsEffects])
  ],
  providers: [ConvertersService,
    StoresDataService,
    ShoppingListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
