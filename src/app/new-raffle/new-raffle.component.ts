import {Component} from '@angular/core';
import {RaffleService} from '../raffle.service';

@Component({
  selector: 'app-new-raffle',
  templateUrl: './new-raffle.component.html',
  styleUrls: ['./new-raffle.component.css']
})
export class NewRaffleComponent {

  constructor(public service: RaffleService) { }

  onClick(name) {
    this.service.createRaffle(name);
  }

}
