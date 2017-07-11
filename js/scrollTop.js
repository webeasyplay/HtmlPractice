


// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function(){
  $('.menu li>a').click(function() {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    });
  $('#nav-toggle').click(function(){
    let h = parseInt($('.menu ul').css('max-height'));
    if(h>0){
        $('.menu ul').css('max-height','0px');
      }else{
        $('.menu ul').css('max-height','174px');
      }
  });
});
