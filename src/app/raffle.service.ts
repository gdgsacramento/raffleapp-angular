import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable()
export class RaffleService {

  raffles: Observable<any[]>;
  raffleDb: AngularFireList<any>;

  constructor(public db: AngularFireDatabase) {
    this.raffleDb = db.list('raffles');
    this.raffles = this.raffleDb.snapshotChanges().map(changes =>  {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });
  }

  addEntry(raffle, name) {
    const participantsDb = this.db.list('raffles/' + raffle.key + '/participants');
    participantsDb.push({name : name});
  }

  getRaffles(): Observable<any[]> {
    return this.raffles;
  }

  drawRaffle(raffle) {
    this.raffleDb.update(raffle.key, {drawn: true});
  }
}
