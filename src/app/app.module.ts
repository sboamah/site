import { CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentDoingComponent } from './current-doing/current-doing.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SkillsComponent,
    AboutComponent,
    CurrentDoingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
