import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NgModel lives here
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //import the FormsModule efore binding with NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
