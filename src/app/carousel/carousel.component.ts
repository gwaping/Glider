import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptloaderService } from '../scriptloader.service';
// import { Glider } from '../../../src/assets/js/glider.min.js';
// declare const Glider : any
// import { Glider} from 'glider-js';
// declare var $:JQueryStatic;
// import * as glider from 'glider-js';
import $ from 'jquery';

declare const Glider : any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})



export class CarouselComponent implements OnInit {

  //  glider = new glider ('.glider');

  listOfDates = [ 
    { date : 3},
    { date : 4},
    { date : 5},
    { date : 6},
    { date : 7},
    { date : 8},
    { date : 9}
  ]

  constructor( private scriptLoader : ScriptloaderService ) { 
     
  
  }

  ngOnInit() {
    this.loadScripts();
      // this.glider(document.querySelector('.glider'), {
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

  OnRemoveClick() {
  
    this.listOfDates.shift();
  }

  OnAddClick() {
    let d = { date : 10 };

    this.listOfDates.push(d);

    console.log(this.listOfDates);
    // glider.refresh(true);

    $(document).ready(function(){
     
      var glider = new Glider(document.getElementById('glider'), {
        slidesToShow: 1,
        dots: '#dots',
      });

      glider.refresh(true);

    });
    
  }
}
