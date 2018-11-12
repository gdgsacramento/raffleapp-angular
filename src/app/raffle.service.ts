import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class RaffleService {

  raffles: Observable<any[]>;
  raffleDb: AngularFireList<any>;
  isAdmin = false;

  constructor(public db: AngularFireDatabase) {
    this.raffleDb = db.list('raffles');
    this.raffles = this.raffleDb.snapshotChanges().pipe(
      map(changes =>  changes.map(c => ({key: c.payload.key, ...c.payload.val()})))
    );
  }

  addEntry(raffle, name) {
    const participantsDb = this.db.list('raffles/' + raffle.key + '/participants');
    participantsDb.push({name : name});
  }

  createRaffle(name) {
    const rafflesDb = this.db.list('raffles');
    rafflesDb.push({name : name});
  }

  getRaffles(): Observable<any[]> {
    return this.raffles;
  }

  drawRaffle(raffle) {
    this.raffleDb.update(raffle.key, {drawn: true});
  }
}
