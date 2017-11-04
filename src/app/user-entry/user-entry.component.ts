import { Component, OnInit } from '@angular/core';
import {EntryService} from "../entry.service";

@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css']
})
export class UserEntryComponent implements OnInit {

  constructor(private service: EntryService) {
  }



  ngOnInit() {
  }

}
