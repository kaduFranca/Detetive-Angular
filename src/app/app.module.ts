import { PeaceService } from './game/peace/service/peace.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabuleiroComponent } from './game/tabuleiro/tabuleiro.component';
import { PeaceComponent } from './game/peace/peace.component';

@NgModule({
  declarations: [
    AppComponent,
    TabuleiroComponent,
    PeaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PeaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
