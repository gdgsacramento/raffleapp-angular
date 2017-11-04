import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase} from "angularfire2/database-deprecated";

@Injectable()
export class RaffleService {

  raffles: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.raffles = db.list('raffles');
  }

  getRaffles(): Observable<any[]> {
    return this.raffles;
  }
}
