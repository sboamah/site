import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchHobokenComponent } from './projects/project/launch-hoboken/launch-hoboken.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { SkillsComponent } from './home/skills/skills.component';
import { RecollectComponent } from './projects/project/recollect/recollect.component';
import { ProjectShadowComponent } from './projects/project/project-shadow/project-shadow.component';
import { PositiveAffirmationGeneratorComponent } from './projects/project/positive-affirmation-generator/positive-affirmation-generator.component';
import { PurpalComponent } from './projects/project/purpal/purpal.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children:[
    {path: '', component: AboutComponent},
    {path: 'skills', component: SkillsComponent}
  ]},
  {path: 'about', component: AboutComponent},
  {path: 'recollect', component: RecollectComponent},
  {path: 'project-shadow', component: ProjectShadowComponent},
  {path: 'launch-hoboken', component: LaunchHobokenComponent},
  {path: 'positive-affirmation-generator', component: PositiveAffirmationGeneratorComponent},
  {path: 'purpal', component: PurpalComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
