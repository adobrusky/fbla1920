let scroll;

function slideRight() {

}

//use screenWidth, large, and medium from ProjectA for retreiving window width and breakpoints
function changeTheme() {
  if(screenWidth > large) {
    if(scroll >= $('.nav').height()) {
      $('.nav').css('backgroundColor', '#11172b');
      $('.nav-items').css('backgroundColor', 'transparent');
    } else {
      $('.nav').css('backgroundColor', 'rgba(17,23,43,0.56)');
      $('.nav-items').css('backgroundColor', 'transparent');
    }
  } else if(screenWidth > medium && screenWidth < large) {
    if(scroll >= ($('.nav').height() + $('.nav-items').height())) {
      $('.nav').css('backgroundColor', '#11172b');
      $('.nav-items').css('backgroundColor', '#11172b');
    } else {
      $('.nav').css('backgroundColor', 'rgba(17,23,43,0.56)');
      $('.nav-items').css('backgroundColor', 'rgba(17,23,43,0.56)');
    }
  } else {
    $('.nav').css('backgroundColor', '#11172b');
    $('.nav-items').css('backgroundColor', '#11172b');
  }
};

$(window).scroll(function() {
  scroll = $(window).scrollTop();
  changeTheme();
  console.log(scroll);
});

$(window).resize(function() {
  changeTheme();
});

$(document).ready(function() {
  changeTheme();
});
