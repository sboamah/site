import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from '../projects';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Projects = new Projects();

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const key = params['key'];
      this.projectService.getProject(key).subscribe(
        project => {
          if (project === undefined){
            this.router.navigateByUrl('404');
            return;
          }
          this.project = project;
          console.log(this.project);
        }
      )
    })
  }

}
