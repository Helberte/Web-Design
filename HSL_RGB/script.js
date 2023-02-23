$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 500){
      $('#btn-scroll').addClass('active');
    }else{
      $('#btn-scroll').removeClass('active');
    }
  });

  $('#btn-scroll').click(function() {
    $('html').animate({scrollTop: 0});
  });
});