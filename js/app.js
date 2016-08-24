$(document).foundation();

$(document).ready(function() {
  $('.hero-text').css('visibility', 'visible').hide().fadeIn(2000);

  $('.menu-small').click(function() {
    $('.menu-small-list').toggleClass('open');
    $('.menu-small-list ul').fadeToggle('fast');
  });

  $('.menu-small-list a').click(function() {
    $('.menu-small-list').removeClass('open');
    $('.menu-small-list ul').removeAttr('style');
  });
});
