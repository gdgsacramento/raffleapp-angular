import { Component } from '@angular/core';
import {RaffleService} from './raffle.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  raffles: Observable<any[]>;
  toolbarClicks = 0;

  constructor(public service: RaffleService) {
    this.raffles = service.getRaffles();
  }

  toolbarClicked() {
    this.toolbarClicks++;
    this.service.isAdmin = (this.toolbarClicks === 5);
  }
}
