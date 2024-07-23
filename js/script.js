// $(window).scroll(function(){
//   var sticky = $('.sticky'),
//       scroll = $(window).scrollTop();

//   if (scroll >= 100) sticky.addClass('fixed');
//   else sticky.removeClass('fixed');
// });




document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
   let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
     current += increment;
     obj.textContent = current;
     if (current == end) {
      clearInterval(timer);
     }
    }, step);
  }
  counter("count1", 32480, 32651, 1000);
  counter("count2", 9811, 10000, 1000);
  counter("count3", 5400, 5660, 1000);
   counter("count4", 11700, 11859, 1000);
 });
 

 $('#s1').owlCarousel({
  loop:true,
  nav:false,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      }
  }
})
 $('#s2').owlCarousel({
  loop:true,
  nav:false,
  dots:false,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  items:5
})

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 50) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});



$(document).ready(function(){


  var $grid = $('.grid').isotope({
      getSortData: {
          name: '.name', // text from querySelector
          category: '[data-category]', // value of attribute
          weight: function( itemElem ) { // function
          var weight = $( itemElem ).find('.weight').text();
          return parseFloat( weight.replace( /[\(\)]/g, '') );
          }
      }
  });


  //     var $grid = $grid.isotope({
  //         getSortData: {
  //         name: '.name',
  //         symbol: '.symbol',
  //         number: '.number parseInt',
  //         category: '[data-category]',
  //         weight: function( itemElem ) {
  //         var weight = $( itemElem ).find('.weight').text();
  //         return parseFloat( weight.replace( /[\(\)]/g, '') );
  //         }
  //     }
  // });


              // filter items on button click
  $('.filter-button-group').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
  });
});


$('.main_menu > li > a').click(function(){
  $('.main_menu > li > a').removeClass('active');
  $(this).addClass('active');
});