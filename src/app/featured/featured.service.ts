import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FEATURES, Features } from './featured.component';

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  constructor() {}

  getFeatures(): Observable<Features[]> {
    const features: Features[] = FEATURES;
    return of(features);
  }
}
