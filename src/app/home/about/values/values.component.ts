import { Component, OnInit } from '@angular/core';
import { Values } from './values';
import { ValuesService } from './values.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  values: Values[] = [];
  constructor(private valueService: ValuesService) { }


  ngOnInit() {
    this.getValues();
  }

  getValues(): void{
    this.valueService.getValues().subscribe(values => (this.values = values));
  }

}
