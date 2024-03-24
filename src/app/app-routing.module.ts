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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: '', component: AboutComponent }],
  },
  { path: 'about', component: AboutComponent },
  { path: 'projects/recollect', component: RecollectComponent },
  { path: 'projects/project-shadow', component: ProjectShadowComponent },
  { path: 'projects/launch-hoboken', component: LaunchHobokenComponent },
  {
    path: 'projects/positive-affirmation-generator',
    component: PositiveAffirmationGeneratorComponent,
  },
  { path: 'projects/merfash-website', component: MerfashWebsiteComponent },
  { path: 'projects/path-pioneer', component: PathPioneerComponent },
  { path: 'art', component: ArtComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
