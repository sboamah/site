import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  firebaseConfig = {
    apiKey: "AIzaSyBvNkIOBt2JqNUT1rPsWZpyuLs9dxp1q1w",
    authDomain: "personal-website-d6d11.firebaseapp.com",
    projectId: "personal-website-d6d11",
    storageBucket: "personal-website-d6d11.appspot.com",
    messagingSenderId: "833256554012",
    appId: "1:833256554012:web:4fb0a3b2166747d7e969d9",
    measurementId: "G-37M0FBKZMC"
  };
  
  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);

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
