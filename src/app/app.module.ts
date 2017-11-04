import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { EntryService } from './entry.service';
import { EntriesComponent } from './entries/entries.component';
import {MatButtonModule, MatChipsModule, MatInputModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    UserEntryComponent,
    EntriesComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    BrowserAnimationsModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
