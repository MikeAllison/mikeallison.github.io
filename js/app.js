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
    setProjectDetails($(this).data('projectName'));
  });
});

var setProjectDetails = function(projectName) {
  $.getJSON('./data/projects.json', function(data) {
    var project = data.projects[projectName];

    $('#projectsModal .project-name').text(project.name);
    $('#projectsModal .project-short-description').text(project.shortDescription);
    $('#projectsModal .project-github').text(project.github);
    $('#projectsModal .project-github').attr('href', project.github);
    $('#projectsModal .project-website').text(project.website);
    $('#projectsModal .project-website').attr('href', project.website);
    $.each(project.longDescription, function(index, value) {
      $('#projectsModal .project-long-description').append("<p>" + value + "</p>");
    });
  });
};
