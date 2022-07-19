import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CurrentDoingComponent } from './current-doing/current-doing.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'currently', component: CurrentDoingComponent},
  {path: 'skills', component: SkillsComponent},
  {path: '', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
