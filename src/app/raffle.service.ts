import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {map, tap} from 'rxjs/internal/operators';
import {getValues} from './keys.pipe';

@Injectable()
export class RaffleService {

  participants$: Observable<any[]>;
  participants: string[];
  participantsDb: AngularFireList<any>;
  isAdmin = false;

  constructor(public db: AngularFireDatabase) {
    this.participantsDb = this.db.list('participants');
    this.participants$ = this.participantsDb.valueChanges().pipe(
      map(entries => entries.map(entry => entry.name)),
      tap(participants => this.participants = participants)
    );
  }

  addEntry(name: string) {
    this.participantsDb.push({name : name});
  }

  resetRaffle() {
    this.participantsDb.remove();
  }

  getParticipants(): Observable<any[]> {
    return this.participants$;
  }

  drawRaffle(): string[] {
    console.log(this.participants);
    const winners = this.shuffle(this.participants);
    console.log('Winners:', winners);
    return winners;
  }

  private shuffle<T>(a: T[]): T[] {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
