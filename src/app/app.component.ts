import { Component } from '@angular/core';
import { Slide } from './components/carousel/carousel.component';
import { AnimationType } from './components/carousel/carousel.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // animation triggers go here
  ],
})
export class AppComponent {
  animationType = AnimationType.Scale;
  slides: Slide[] = [
    {
      name: 'Fuji TallHero Computers',
      description: 'Fuji TallHero Computers',
      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg',
    },
    {
      name: 'Fuji TallHero Computers',
      description: 'Fuji TallHero Computers',
      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg',
    },
    {
      name: 'Fuji TallHero Computers',
      description: 'Fuji TallHero Computers',
      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg',
    },
    {
      name: 'Fuji TallHero Computers',
      description: 'Fuji TallHero Computers',
      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/PrimeDay/Fuji_TallHero_NonPD_en_US_1x._CB665952513_.jpg',
    },
    {
      name: 'Fuji TallHero Computers',
      description: 'Fuji TallHero Computers',
      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg',
    },
  ];
}
