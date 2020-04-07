import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HexagonComponent } from './hexagon/hexagon.component';
import { PlayfieldComponent } from './playfield/playfield.component';

@NgModule({
  declarations: [
    AppComponent,
    HexagonComponent,
    PlayfieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
