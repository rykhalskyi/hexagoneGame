import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HexagonComponent } from './hexagon/hexagon.component';
import { PlayfieldComponent } from './playfield/playfield.component';
import { PlayerDashboardComponent } from './player-dashboard/player-dashboard.component';
import { PlayersComponent } from './players/players.component';
import { ActivePlayerComponent } from './active-player/active-player.component';
import { ActivePlayerButtonComponent } from './active-player-button/active-player-button.component';
import { GameControlComponent } from './game-control/game-control.component';
import { DiceThrowComponent } from './dice-throw/dice-throw.component';

import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HexagonComponent,
    PlayfieldComponent,
    PlayerDashboardComponent,
    PlayersComponent,
    ActivePlayerComponent,
    ActivePlayerButtonComponent,
    GameControlComponent,
    DiceThrowComponent
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
