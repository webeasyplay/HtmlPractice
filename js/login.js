// <script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>

document.write('<script src="https://code.jquery.com/jquery-3.2.1.js"><\/script>')
    // $(function(){
    //   alert('123123');



// });


$(document).ready(function() {

    $('#register').bind("click", function() {
        $('.login').fadeOut(0);
        $('.register').fadeIn();
        
    });
      $('#login').bind("click", function() {
        $('.login').fadeIn();
        $('.register').fadeOut();
    });


});
