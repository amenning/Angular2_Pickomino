import { Component } from '@angular/core';

@Component({
    selector: 'game-body',
    templateUrl: 'app/game-body.component.html',
    //styleUrls:['app/main.css', 'app/board.css']
})

export class GameBodyComponent { 
	gameLogin = true;
    gameRegistration = true;
    gameSetup = true;
    gameActive = true;

	ngOnInit () {}
}
