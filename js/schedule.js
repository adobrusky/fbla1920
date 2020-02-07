function hiddenSelection() {
  $('.hiddenSelect').each(function() {
    $(this).siblings().children('span').html($(this).find('.active').html());
  })
};

$('.flightInfo p').click(function() {
  if(!$(this).closest('div').hasClass('activeDrop')) {
    $('.hiddenSelect, .passengerSelect').closest('div').removeClass('activeDrop');
    $(this).closest('div').addClass('activeDrop');
  } else {
    $(this).closest('div').removeClass('activeDrop');
  }
});

function setDates() {
  let today = new Date();
  let parseToday = today.toString().split(' ');
  today = parseToday[1] + ". " + parseToday[2] + " " + parseToday[3];
  $('.dateContainer input').each(function() {
    $(this).val(today);
  });
}

$('.hiddenSelect li').each(function() {
  $(this).click(function() {
    if(!$(this).hasClass('active')) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      $(this).closest('.hiddenSelect').siblings().children('span').fadeOut(300);
      setTimeout(function () {
        hiddenSelection();
        hiddenSelectionWidth();
        makePrice();
      }, 300);
      $(this).closest('.hiddenSelect').siblings().children('span').fadeIn(300);
    }
  });
});

function hiddenSelectionWidth() {
  $('.flightInfo ul').each(function() {
    let test = $(this).siblings('p').outerWidth();
    $(this).animate({width : test });
  });
}

let passengers = 1;
$('i.fa.fa-plus').click(function() {
  if(passengers < 9) {
    passengers++;
    passengerSelection();
    makePrice();
  }
});

let price = 0;

function makePrice() {
  price = 0;
  price += passengers * 25;
  let trip = $('.tripType li').index('.active');
  if(trip == 1) {
    price += 100;
  } else {
    price += 50;
  }

  let economyChildren = $('.economyType li').length;
  let activeEconomy = "";
  for(let i = 1; i <= economyChildren; i++) {
    if($('.economyType li:nth-child(' + i + ')').hasClass('active')) {
      activeEconomy = $('.economyType li:nth-child(' + i + ')').html();
    }
  }

  switch (activeEconomy){
    case "Economy":
      price += 50;
      break;
    case "Premium Economy":
      price += 75;
      break;
    case "Business Class":
      price += 100;
      break;
    case "First Class":
      price += 150;
      break;
  }
  $('.bookContainer p span').html(price);
}

$('i.fa.fa-minus').click(function() {
  if(passengers > 1) {
    passengers--;
    passengerSelection();
    makePrice();
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
  setDates();
  makePrice();
  passengerSelection();
  hiddenSelectionWidth();
});
