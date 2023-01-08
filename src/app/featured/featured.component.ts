import { Component, OnInit } from '@angular/core';
import { FeaturesService } from './featured.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  features: Features[] = [];
  constructor(private featuresService: FeaturesService) { }

  ngOnInit() {
    this.getFeatures();
  }

  getFeatures(): void{
    this.featuresService.getFeatures().subscribe(features => (this.features = features))
  }
}


export class Features {
  id!: number;
  title = '';
  description = '';
  img = '';
  link = '';
}

export const FEATURES: Features[] = [
  {
    id: 1,
    title: 'Student Awards',
    description: "During my time at Stevens, I won the Social Justice Advocate Award and Program of the Year for Advocacy in 2021. In 2022, I won the Waldo Shumway Award, which is an award for Dean's List students who make an impact in the campus community (me pictured with the award on the left).",
    img: 'assets/WaldoShumway.jpg',
    link: 'https://www.stevens.edu/campus-life/student-affairs/student-awards'
  },
]