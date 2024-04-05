import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchHobokenComponent } from './projects/project/launch-hoboken/launch-hoboken.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { RecollectComponent } from './projects/project/recollect/recollect.component';
import { ProjectShadowComponent } from './projects/project/project-shadow/project-shadow.component';
import { PositiveAffirmationGeneratorComponent } from './projects/project/positive-affirmation-generator/positive-affirmation-generator.component';
import { MerfashWebsiteComponent } from './projects/project/merfash-website/merfash-website.component';
import { PathPioneerComponent } from './projects/project/path-pioneer/path-pioneer.component';
import { ArtComponent } from './art/art.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TelfarTypographyComponent } from './projects/project/telfar-typography/telfar-typography.component';
const name = "Sylvia Boamah"
const routes: Routes = [
  { path: '', component: HomeComponent, title: name + ' | Home' },
  { path: 'about', component: AboutComponent, title: name + ' | About' },
  { path: 'projects/recollect', component: RecollectComponent, title: name + ' | ReCollect' },
  { path: 'projects/project-shadow', component: ProjectShadowComponent, title: name + ' | Project Shadow' },
  { path: 'projects/launch-hoboken', component: LaunchHobokenComponent, title: name + ' | Launch Hoboken Design Competition' },
  {
    path: 'projects/positive-affirmation-generator',
    component: PositiveAffirmationGeneratorComponent,
    title: name + ' | Positive Affirmation Generator'
  },
  { path: 'projects/merfash-website', component: MerfashWebsiteComponent, title: name + ' | Mercedes Santana Fashion Website' },
  { path: 'projects/path-pioneer', component: PathPioneerComponent, title: name + ' | Path Pioneer Case Study' },
  { path: 'projects/telfar-typography', component: TelfarTypographyComponent, title: name + ' | Animated Typography: Telfar' },
  { path: 'art', component: ArtComponent, title: name + ' | Art' },
  {
    path: '**', pathMatch: 'full',
    component: ErrorPageComponent, title: name + ' | 404'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
