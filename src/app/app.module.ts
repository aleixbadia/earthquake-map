import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EarthquakeInfoComponent } from './earthquake-info/earthquake-info.component';
import { EarthquakeInfoPanelComponent } from './earthquake-info-panel/earthquake-info-panel.component';
import { EarthquakeInfoMapComponent } from './earthquake-info-map/earthquake-info-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EarthquakeInfoComponent,
    EarthquakeInfoPanelComponent,
    EarthquakeInfoMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
