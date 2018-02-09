import {Component, Input} from '@angular/core';
import {RaffleService} from '../raffle.service';

@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css']
})
export class UserEntryComponent {

  constructor(public service: RaffleService) { }

  @Input()
  raffle;

  onClick(name) {
    this.service.addEntry(this.raffle, name);
  }

}
