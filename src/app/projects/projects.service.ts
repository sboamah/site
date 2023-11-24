import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Projects, PROJECTS } from './projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  getProjects(): Observable<Projects[]> {
    const projects: Projects[] = PROJECTS;
    return of(projects);
  }

  getProject(key: string): Observable<Projects> {
    const projects: Projects[] = PROJECTS.filter((a) => a.key === key);
    return of(projects[0]);
  }
}
