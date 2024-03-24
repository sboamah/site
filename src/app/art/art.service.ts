import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ART, Art } from './art.component';

@Injectable({
  providedIn: 'root',
})
export class ArtService {
  constructor() {}

  getArt(): Observable<Art[]> {
    const art: Art[] = ART;
    return of(art);
  }
}
