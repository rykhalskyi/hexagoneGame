import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HexagonComponent } from './hexagon/hexagon.component';
import { PlayfieldComponent } from './playfield/playfield.component';
import { PlayerDashboardComponent } from './player-dashboard/player-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HexagonComponent,
    PlayfieldComponent,
    PlayerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
