import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AfmisComponent } from './afmis/afmis.component';
import { EamisComponent } from './eamis/eamis.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
,
    AfmisComponent,
    EamisComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
