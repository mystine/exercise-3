$(function(){
  $('body').removeClass('noscript');
  
  $('.icon-open-btn, .icon-close-btn').click(function(){
    toggleNav();
  });
});

function toggleNav(){

  if($('.site-wrapper').attr('data-state') == 'slide-closed'){
    //Show Nav when closed
    $('.site-wrapper').attr('data-state','slide-open');
  }else{
    //Hide Nav when open
    $('.site-wrapper').attr('data-state','slide-closed');
  }
}