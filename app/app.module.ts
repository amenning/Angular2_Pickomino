import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { GameBodyComponent }   from './game-body.component';
import { GameLoginComponent }   from './game-login.component';
import { GameRegistrationComponent }   from './game-registration.component';
import { GameSetupComponent }   from './game-setup.component';
import { GameBoardComponent }   from './game-board.component';
import { GameGrillWormsComponent }   from './game-grill-worms.component';
import { GamePlayerOptionsComponent }   from './game-player-options.component';
import { GameActiveDiceComponent }   from './game-active-dice.component';
import { GameFrozenDiceComponent }   from './game-frozen-dice.component';
import { GamePlayerWormsComponent }   from './game-player-worms.component';
import { GameHeaderComponent }   from './game-header.component';
import { CommonFooterComponent }   from './common-footer.component';

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule,
        HttpModule 
    ],
    declarations: [ 
        AppComponent,
        GameBodyComponent,
        GameLoginComponent,
        GameRegistrationComponent,
        GameSetupComponent,
        GameBoardComponent,
        GameGrillWormsComponent,
        GamePlayerOptionsComponent,
        GameActiveDiceComponent,
        GameFrozenDiceComponent,
        GamePlayerWormsComponent,
        GameHeaderComponent,
        CommonFooterComponent
    ],
    providers:    [        
    ],
    bootstrap:    [ 
        AppComponent
    ]
})

export class AppModule { }
