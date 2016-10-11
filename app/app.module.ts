import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { GameBodyComponent }   from './game-body.component';
import { GameLoginComponent }   from './game-login.component';

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule,
        HttpModule 
    ],
    declarations: [ 
        AppComponent,
        GameBodyComponent,
        GameLoginComponent
    ],
    providers:    [        
    ],
    bootstrap:    [ 
        AppComponent
    ]
})

export class AppModule { }
