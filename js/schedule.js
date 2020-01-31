function hiddenSelection() {
  $('.hiddenSelect').each(function() {
    $(this).siblings().children('span').html($(this).find('.active').html());
  })
};

$('.flightInfo p').click(function() {
  if(!$(this).closest('div').hasClass('activeDrop')) {
    $(this).closest('div').siblings('div').removeClass('activeDrop');
    $(this).closest('div').addClass('activeDrop');
  } else {
    $(this).closest('div').removeClass('activeDrop');
  }
});

$('.hiddenSelect li').each(function() {
  $(this).click(function() {
    if(!$(this).hasClass('active')) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      $(this).closest('.hiddenSelect').siblings().children('span').fadeOut(300);
      setTimeout(function () {
        hiddenSelection();
        hiddenSelectionWidth();
      }, 300);
      $(this).closest('.hiddenSelect').siblings().children('span').fadeIn(300);
    }
  });
});

function hiddenSelectionWidth() {
  $('.flightInfo ul').each(function() {
    let test = $(this).siblings('p').outerWidth();
    $(this).animate({width : test });
    // finish fixing this bug
  });
}

let passengers = 1;
$('i.fa.fa-plus').click(function() {
  if(passengers < 9) {
    passengers++;
    passengerSelection();
  }
});

$('i.fa.fa-minus').click(function() {
  if(passengers > 1) {
    passengers--;
    passengerSelection();
  }
});

function passengerSelection() {
  $('.passengerSelect').siblings().children('span').html(passengers);
};

$(window).resize(function() {
  hiddenSelectionWidth();
});

$(document).ready(function() {
  hiddenSelection();
  passengerSelection();
  hiddenSelectionWidth();
});
