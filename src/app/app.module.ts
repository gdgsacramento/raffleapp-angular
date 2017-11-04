import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { EntryService } from './entry.service';

@NgModule({
  declarations: [
    AppComponent,
    UserEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
