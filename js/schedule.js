function hiddenSelection() {
    $('.hiddenSelect').each(function() {
      $(this).siblings().children('span').html($(this).find('.active').html());
    })
};

let passengers = 1;
function passengerSelection() {
  $('.passengerSelect').siblings().children('span').html(passengers);
};

$(document).ready(function() {
  hiddenSelection();
  passengerSelection();
});
