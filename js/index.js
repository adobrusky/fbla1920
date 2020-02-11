let scroll;

//use screenWidth, large, and medium from ProjectA for retreiving window width and breakpoints
function changeTheme() {
  if(screenWidth > large) {
    if(scroll >= $('.nav').height()) {
      $('.nav').css('backgroundColor', '#0e1221');
      $('.nav-items').css('backgroundColor', 'transparent');
    } else {
      $('.nav').css('backgroundColor', 'rgba(14,18,33,0.56)');
      $('.nav-items').css('backgroundColor', 'transparent');
    }
  } else if(screenWidth > medium && screenWidth < large) {
    if(scroll >= ($('.nav').height() + $('.nav-items').height())) {
      $('.nav').css('backgroundColor', '#0e1221');
      $('.nav-items').css('backgroundColor', '#0e1221');
    } else {
      $('.nav').css('backgroundColor', 'rgba(14,18,33,0.56)');
      $('.nav-items').css('backgroundColor', 'rgba(14,18,33,0.56)');
    }
  } else {
    $('.nav').css('backgroundColor', '#0e1221');
    $('.nav-items').css('backgroundColor', '#0e1221');
  }
};

$('.scrollDown').click(function(){
  let scrollAmount = 0;
  if(screenWidth >= large) {
    scrollAmount = $('.landing').height() - $('.nav').height();
  } else if(screenWidth >= medium) {
    scrollAmount = $('.landing').height();
  } else {
    scrollAmount = $('.landing').height();
  }
  $(window).scrollTop(scrollAmount);
});

$(window).scroll(function() {
  scroll = $(window).scrollTop();
  changeTheme();
});

$(window).resize(function() {
  changeTheme();
});

$(document).ready(function() {
  changeTheme();
});
