import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FarmsComponent } from './farms/farms.component';
import { FarmListComponent } from './farms/farm-list/farm-list.component';
import { PlotsComponent } from './plots/plots.component';
import { PlotListComponent } from './plots/plot-list/plot-list.component';
import { ProductionsComponent } from './productions/productions.component';
import { ProductionListComponent } from './productions/production-list/production-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmsComponent,
    FarmListComponent,
    PlotsComponent,
    PlotListComponent,
    ProductionsComponent,
    ProductionListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
