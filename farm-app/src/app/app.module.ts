import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FarmsComponent } from './farms/farms.component';
import { FarmListComponent } from './farms/farm-list/farm-list.component';
import { PlotsComponent } from './plots/plots.component';
import { PlotListComponent } from './plots/plot-list/plot-list.component';
import { ProductionsComponent } from './productions/productions.component';
import { ProductionListComponent } from './productions/production-list/production-list.component';
import { AddProductionComponent } from './productions/add-production/add-production.component';
import { AddPlotComponent } from './plots/add-plot/add-plot.component';
import { AddFarmComponent } from './farms/add-farm/add-farm.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmsComponent,
    FarmListComponent,
    PlotsComponent,
    PlotListComponent,
    ProductionsComponent,
    ProductionListComponent,
    AddProductionComponent,
    AddPlotComponent,
    AddFarmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
