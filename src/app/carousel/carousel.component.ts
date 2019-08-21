import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptloaderService } from '../scriptloader.service';
import { Glider } from 'glider-js'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {

  constructor( private scriptLoader : ScriptloaderService ) { }

  ngOnInit() {
    this.loadScripts();
  //  this.loadScripts();
  // var glider =  Glider(document.querySelector('.glider'), {
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   draggable: true,
  //   dots: '.dots',
  //   arrows: {
  //     prev: '.glider-prev',
  //     next: '.glider-next'
  //   }
  // });
  }
 
  // ngAfterViewInit () {
  //   Glider(document.querySelector('.glider'), {
  //       slidesToShow: 5,
  //       slidesToScroll: 1,
  //       draggable: true,
  //       dots: '.dots',
  //       arrows: {
  //         prev: '.glider-prev',
  //         next: '.glider-next'
  //       }
  //     });
  // }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.scriptLoader.load('gliderjs','gliderInit').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }

  sayHello() {
    console.log('hello there');
  }
}
