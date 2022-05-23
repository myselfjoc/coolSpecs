import { Component } from '@angular/core';
import { SpecsDetailsService } from './services/specs-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'coolSpecs';
  products: any;
  constructor(private productData: SpecsDetailsService) {
    productData.products().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  blueIn() {
    let bg = document.querySelector('.color-1');
    bg?.classList.toggle('color-2');
    let img4 = document.querySelector('.home-img');
    img4?.classList.toggle('home-img-blue');

  }

  blueOut() {
    let bg = document.querySelector('.color-1');

    bg?.classList.toggle('color-2');
    let img4 = document.querySelector('.home-img');
    img4?.classList.toggle('home-img-blue');
  }

  pinkIn() {
    let bg2 = document.querySelector('.color-1');
    bg2?.classList.toggle('color-3');
    let img2 = document.querySelector('.home-img');
    img2?.classList.toggle('home-img-pink');
  }
  pinkOut() {
    let bg2 = document.querySelector('.color-1');
    bg2?.classList.toggle('color-3');
    let img3 = document.querySelector('.home-img');
    img3?.classList.toggle('home-img-pink');
  }

  greenIn() {
    let bg3 = document.querySelector('.color-1');
    let img3 = document.querySelector('.home-img');
    bg3?.classList.toggle('color-4');
    img3?.classList.toggle('home-img-green');
  }

  greenOut() {
    let bg3 = document.querySelector('.color-1');
    let img3 = document.querySelector('.home-img');
    bg3?.classList.toggle('color-4');
    img3?.classList.toggle('home-img-green');
  }

  yellowIn() {
    let bg4 = document.querySelector('.color-1');
    bg4?.classList.toggle('color-5');
    let img4 = document.querySelector('.home-img');
    img4?.classList.toggle('home-img-yellow');
  }
  yellowOut() {
    let bg4 = document.querySelector('.color-1');
    bg4?.classList.toggle('color-5');
    let img4 = document.querySelector('.home-img');
    img4?.classList.toggle('home-img-yellow');
  }
}
