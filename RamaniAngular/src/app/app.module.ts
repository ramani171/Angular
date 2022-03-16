import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { componentAComponent } from './componentA/componentA.component';
import { componentBComponent } from './componentB/componentB.component';

@NgModule({
  declarations: [AppComponent, componentAComponent, componentBComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
