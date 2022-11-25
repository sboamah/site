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
    description: 'Social Justice Advocate Award, Program of the Year for Advocacy 2021, & Waldo Shumway Award 2022',
    img: 'assets/WaldoShumway.jpg',
    link: 'https://www.stevens.edu/campus-life/student-affairs/student-awards'
  },

  {
    id: 2,
    title: 'Stevens For Solidarity',
    description: 'Quotes from students demanding justice & social change',
    img: 'assets/S4S.jpg',
    link: 'https://www.instagram.com/p/CBjcK_-jHkS/'
  }
]