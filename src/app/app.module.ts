import { CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtComponent } from './art/art.component';
import { FeaturedComponent } from './featured/featured.component';
import { IntroComponent } from './home/intro/intro.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LaunchHobokenComponent } from './projects/project/launch-hoboken/launch-hoboken.component';
import { PositiveAffirmationGeneratorComponent } from './projects/project/positive-affirmation-generator/positive-affirmation-generator.component';
import { ProjectShadowComponent } from './projects/project/project-shadow/project-shadow.component';
import { RecollectComponent } from './projects/project/recollect/recollect.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from "./home/about/contact/contact.component";
import { PurpalComponent } from './projects/project/purpal/purpal.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [	
        AppComponent,
        NavBarComponent,
        AboutComponent,
        IntroComponent,
        ProjectsComponent,
        FeaturedComponent,
        ArtComponent,
        LaunchHobokenComponent,
        RecollectComponent,
        PositiveAffirmationGeneratorComponent,
        ProjectShadowComponent,
        HomeComponent,
        ContactComponent, 
        PurpalComponent,
      FooterComponent
   ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
       
    ]
})
export class AppModule { }
