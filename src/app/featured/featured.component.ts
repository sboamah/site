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
    title: "Sylvia Boamah ’22 Masters the Art of User Experience",
    description: "When Sylvia Boamah ’22 discovered that front-end web development offered an outlet for her creative talents, she knew she had found her passion...",
    img: 'assets/BoamahSylvia_Landscape.JPG',
    link: 'https://www.stevens.edu/news/sylvia-boamah-22-masters-the-art-of-user-experience'
  },
  {
    id: 2,
    title: 'Student Awards',
    description: "During my time at Stevens, I won the Social Justice Advocate Award and Program of the Year for Advocacy in 2021. In 2022, I won the Waldo Shumway Award, which is an award for Dean's List students who make an impact in the campus community.",
    img: 'assets/WaldoShumway.jpg',
    link: 'https://www.stevens.edu/campus-life/student-affairs/student-awards'
  },
]