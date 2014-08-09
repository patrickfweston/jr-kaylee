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

  })
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