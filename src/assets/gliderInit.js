// new Glider(document.querySelector('.glider'), {
//     slidesToShow: 5,
//     slidesToScroll: 5,
//     draggable: true,
//     dots: '.dots',
//     arrows: {
//       prev: '.glider-prev',
//       next: '.glider-next'
//     }
//   });

new Glider(document.querySelector('.glider'), {
  slidesToScroll: 1,
  slidesToShow: 2,
  draggable: false,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});