import { Component, Injectable, OnInit } from '@angular/core';
import { Projects } from '../projects';
import { ProjectsService } from '../projects.service';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-project-nav',
  templateUrl: './project-nav.component.html',
  styleUrls: ['./project-nav.component.css'],
})
export class ProjectNavComponent implements OnInit {
  projects: Projects[] = [];
  currentLocation: string = window.location.href;

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe(
        (projects) =>
          (this.projects = projects.filter(
            (a) => this.currentLocation.indexOf(a.key) == -1,
          )),
      );
  }
}
