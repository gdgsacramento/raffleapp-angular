import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { EntriesComponent } from './entries/entries.component';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatInputModule, MatListModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RaffleService } from './raffle.service';
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { KeysPipe } from './keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserEntryComponent,
    EntriesComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [RaffleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
