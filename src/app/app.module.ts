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

@NgModule({
  declarations: [
    AppComponent,
    TempConverterComponent,
    NavigationComponent,
    HomeComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ConvertersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
