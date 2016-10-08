import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { GameBodyComponent }   from './game-body.component';
import { RacingDataService } from './racing-data.service'

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule,
        HttpModule 
    ],
    declarations: [ 
        AppComponent,
        GameBodyComponent
    ],
    providers:    [
        RacingDataService
    ],
    bootstrap:    [ 
        AppComponent 
    ]
})

export class AppModule { }
