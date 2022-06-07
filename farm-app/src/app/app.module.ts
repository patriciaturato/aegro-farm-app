import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FarmsComponent } from './farms/farms.component';
import { FarmListComponent } from './farms/farm-list/farm-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmsComponent,
    FarmListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
