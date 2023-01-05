$(document).ready(function () {
  $(window).resize(function(){
    location.reload();
  });
  $('.port').each(function(){
    var height = $(this).outerWidth()/4*3;
    $(this).innerHeight(height);
    $('.folio', this).innerHeight(height);
  });

  $('.diagram').each(function(){
    var height = $(this).width();
    $(this).height(height);
  });

  $('.chart').each(function(index){
      $(this).delay(index*200).fadeIn();
  });

  $('.port').click(function(){
    var url = $('.folio', this).attr('data-url');
    $('#preview').append('<img src="'+url+'">');
    $('#portfolio').fadeIn();
  });

  $('.close').click(function(){
    $('#preview').empty();
    $(this).parent().hide();
  });
});