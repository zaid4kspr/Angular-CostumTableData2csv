import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ElementComponent } from './element/element.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ElementComponent,
    TableComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, AddComponent]
})
export class AppModule { }
