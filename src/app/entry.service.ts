import { Injectable } from '@angular/core';

@Injectable()
export class EntryService {

  entries: string[] = [];

  constructor() { }

  addEntry(userName) {
    console.log('New entry added', userName);
    this.entries.push(userName);
  }

}
