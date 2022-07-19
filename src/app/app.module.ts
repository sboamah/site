import { CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentDoingComponent } from './current-doing/current-doing.component';
import { IntroComponent } from './intro/intro.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SkillsComponent } from './skills/skills.component';
import { TempNavComponent } from './temp-nav/temp-nav.component';

@NgModule({
  declarations: [	
    AppComponent,
    NavBarComponent,
    SkillsComponent,
    AboutComponent,
    CurrentDoingComponent,
      TempNavComponent,
      IntroComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
