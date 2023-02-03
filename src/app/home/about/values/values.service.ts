import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Values, VALUES } from './values'

@Injectable({
  providedIn: 'root'
})
export class ValuesService {


constructor() { }

getValues() : Observable<Values[]>{
    const values: Values[] = VALUES;
    return of (values)
  }

  getValue(key: string): Observable<Values> {
    const values: Values[] = VALUES.filter(a => a.key === key);
    return of(values[0]);
  }
}
