function hiddenSelection() {
    $('.hiddenSelect').each(function() {
      $(this).siblings().children('span').html($(this).find('.active').html());
    })

    $('.flightInfo p').click(function() {
      if(!$(this).closest('div').hasClass('activeDrop')) {
        $(this).closest('div').siblings('div').removeClass('activeDrop');
        $(this).closest('div').addClass('activeDrop');
      } else {
        $(this).closest('div').removeClass('activeDrop');
      }
    });
};

function hiddenSelectionWidth() {
  $('.flightInfo ul').each(function() {
    $(this).css('width', $(this).siblings('p').outerWidth());
  });
}

let passengers = 1;
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
