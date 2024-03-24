import { Component, OnInit } from '@angular/core';
import { Projects } from './projects';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  uxProjects: Projects[] = [];
  swProjects: Projects[] = [];
  artProjects: Projects[] = [];
  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe(
        (project) => (
          (this.uxProjects = project.filter((a) => a.projectType === 'ux')),
          (this.swProjects = project.filter((a) => a.projectType === 'sw')),
          (this.artProjects = project.filter((a) => a.projectType === 'art'))
        ),
      );
  }
}
