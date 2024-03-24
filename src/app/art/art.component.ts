import { Component, OnInit } from '@angular/core';
import { ArtService } from './art.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css'],
})
export class ArtComponent implements OnInit {
  art: Art[] = [];
  digitalArt: Art[] = [];
  logos: Art[] = [];
  constructor(private artService : ArtService) {}

  ngOnInit() {
    this.getArt();
  }

  getArt(): void {
    this.artService
      .getArt()
      .subscribe((art) => (this.art = art));
    this.digitalArt = this.art.filter((art) => art.artType === 'digital');
    this.logos = this.art.filter((art) => art.artType === 'logo');
  }
}

export class Art {
  id!: number;
  title = '';
  description = '';
  img = '';
  artType = '';
}

export const ART: Art[] = [
  {
    id: 1,
    title: 'Nature Girl',
    description: '',
    img: 'assets/darknaturegirl.png',
    artType: 'digital'
  },
  {
    id: 2,
    title: 'Disguise',
    description:
      "",
    img: 'assets/DisguiseL.png',
    artType:'digital'
  },
  {
    id: 3,
    title: 'Ms. Cool',
    description:
      "",
    img: 'assets/Thehighestlowkey2.png',
    artType:'digital'
  },
  {
    id: 4,
    title: 'Under The Sun',
    description:
      "",
    img: 'assets/underthesun.png',
    artType:'digital'
  },
  {
    id: 5,
    title: 'Sade',
    description:
      "",
    img: 'assets/Sade.png',
    artType:'digital'
  },
  {
    id: 6,
    title: 'Mixed Icon',
    description:
      "",
    img: 'assets/mixedicon.png',
    artType:'logo'
  },
  {
    id: 7,
    title: 'Package Direct',
    description:
      "",
    img: 'assets/packagedirect.png',
    artType:'logo'
  },
  {
    id: 8,
    title: 'Recollect',
    description:
      "",
    img: 'assets/recollect_logo.png',
    artType:'logo'
  },
  {
    id: 9,
    title: 'My Logo',
    description:
      "",
    img: 'assets/Logo.png',
    artType:'logo'
  },
];
