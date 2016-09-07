$(document).foundation();

$(document).ready(function() {
  $('.hero-text').css('visibility', 'visible').hide().fadeIn(2000);

  $('.menu-mobile').click(function() {
    $('.menu-mobile-list').toggleClass('open');
    $('.menu-mobile-list ul').fadeToggle('fast');
  });

  $('.menu-mobile-list a').click(function() {
    $('.menu-mobile-list').removeClass('open');
    $('.menu-mobile-list ul').removeAttr('style');
  });

  $('.projects-images img').click(function() {
    getProjectDetails($(this).data('projectName'));
  });
});

var getProjectDetails = function(projectName) {
  $.getJSON('./projects.json', function(data) {
    var project = data.projects[projectName];
    console.dir(project);
  });
};
