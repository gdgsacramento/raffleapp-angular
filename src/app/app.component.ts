import { Component } from '@angular/core';
import {RaffleService} from "./raffle.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  raffles: Observable<any[]>;

  constructor(public service: RaffleService) {
    this.raffles = service.getRaffles();
  }
}
