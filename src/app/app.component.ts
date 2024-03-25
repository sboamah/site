import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'personal-site';
  isLoading: boolean = true;
  windowScrolled: boolean = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.scrollY !== 0;
    });
    window.addEventListener('load', () => {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    });
  }
  backToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
