import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { StoreModule } from "@ngrx/store"

import { counterReducer } from './contador/contador.reducer';
import { CounterComponent } from './counter/counter.component';

import { GameComponent } from './game/game.component';
import { mainReducer} from './reducer/mainchar.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    // StoreModule.forRoot({ count: counterReducer, mainChar: mainReducer }),
    StoreModule.forRoot({ mainChar: mainReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
