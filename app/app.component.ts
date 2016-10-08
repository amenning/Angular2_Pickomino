import { Component } from '@angular/core';

@Component({
    selector: 'pickomino-app',
    template: `
        <h1>{{title}}</h1>
        <game-body></game-body>`
})

export class AppComponent { 
    title = 'Pickomino';
}
