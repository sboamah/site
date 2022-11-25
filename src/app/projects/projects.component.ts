import { Component, OnInit } from '@angular/core';
import { Projects } from './projects';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Projects[] = [];
  constructor(private projectService: ProjectsService) { }


  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void{
    this.projectService.getProjects().subscribe(projects => (this.projects = projects));
  }

}
