var toggle = $('#nav-toggle');
var header = $('.header');

function dropdown(){
  header.toggleClass('nav-open');
};

$(document).on('keyup',function(e){
  if ( e.key == 'Escape' && header.hasClass('nav-open') ){
    header.removeClass('nav-open');
  }
});

toggle.on('click', function(){
  dropdown();
});