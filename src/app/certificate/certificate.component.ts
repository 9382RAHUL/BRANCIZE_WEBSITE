import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent {
  // constructor() {}

  slides = [
    { image: 'assets/CERTIFICATE3.jpg' },
    { image: 'assets/CERTIFICATE1.jpg' },
    { image: 'assets/CERTIFICATE2.jpg' },
  ];

  currentSlide = 0;

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
