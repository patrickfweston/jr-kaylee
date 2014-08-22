$(document).ready(function() {
  $('.navigation__hamburger').click(function(e) {
    e.preventDefault();
    $('.navigation__wrapper').toggleClass('isDisplayed');
  });

  $('.navigation__wrapper a').click(function(e) {
    e.preventDefault();

    if ($('.navigation__wrapper').hasClass('isDisplayed')) {
      $('.navigation__wrapper').toggleClass('isDisplayed');
    }

    var id = $(this).attr("href");
    var offset = 0;
    if ($('.navigation').css('position') === 'fixed') {
      offset = $('.navigation').height();
    }
    $('body, html').animate({
      scrollTop: $(id).offset().top - offset
    });
  });

  // Get the countdown until the weddin'
  countdown();
  setInterval(countdown, 1000);
  function countdown () {
  var now = moment(), // get the current moment
    // May 28, 2013 @ 12:00AM
    then = moment("05/24/15 05:00PM", "MM/DD/YY hh:mmA"),
    // get the difference from now to then in ms
    ms = then.diff(now, 'milliseconds', true);

    // update the duration in ms
    ms = then.diff(now, 'milliseconds', true);
    // get the duration as months and round down
    months = Math.floor(moment.duration(ms).asMonths());
 
    // subtract months from the original moment (not sure why I had to offset by 1 day)
    then = then.subtract('months', months).subtract('days', 1);
    // update the duration in ms
    ms = then.diff(now, 'milliseconds', true);
    days = Math.floor(moment.duration(ms).asDays());
 
    then = then.subtract('days', days);
    // update the duration in ms
    ms = then.diff(now, 'milliseconds', true);
    hours = Math.floor(moment.duration(ms).asHours());
 
    then = then.subtract('hours', hours);
    // update the duration in ms
    ms = then.diff(now, 'milliseconds', true);
    minutes = Math.floor(moment.duration(ms).asMinutes());
 
    then = then.subtract('minutes', minutes);
    // update the duration in ms
    ms = then.diff(now, 'milliseconds', true);
    seconds = Math.floor(moment.duration(ms).asSeconds());
    
    diff = '<span class="num">' + months + '</span> months <span class="num">' + days + '</span> days <span class="num">' + hours + '</span> hours <span class="num">' + minutes + '</span> minutes <span class="num">' + seconds + '</span> seconds';
    $('.countdown').html(diff);
  }
});

$(window).load(function() {
    $('.slider').flexslider({
      selector: ".slider__wrapper > li",
      controlNav: false,
      prevText: "",
      nextText: "",
      controlsContainer: ".slider__controls"
    });

    $('.flex-prev').addClass('fontawesome-angle-left');
    $('.flex-next').addClass('fontawesome-angle-right');
});