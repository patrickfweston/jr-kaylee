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
    $('body, html').animate({
      scrollTop: $(id).offset().top
    });

  })
});