import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

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
import { DeleteFarmComponent } from './farms/delete-farm/delete-farm.component';
import { DeletePlotComponent } from './plots/delete-plot/delete-plot.component';
import { DeleteProductionComponent } from './productions/delete-production/delete-production.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes =[
  { path: '', component: FarmsComponent},
  { path: 'farm-list', component: FarmListComponent},
  { path: 'plots', component: PlotsComponent},
  { path: ':id/plot-list', component: PlotListComponent},
  { path: 'productions', component: ProductionsComponent},
  { path: ':id/production-list', component: ProductionListComponent},
]

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
    AddFarmComponent,
    DeleteFarmComponent,
    DeletePlotComponent,
    DeleteProductionComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
