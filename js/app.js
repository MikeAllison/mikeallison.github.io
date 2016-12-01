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

  populateSkills();
});

var populateSkills = function() {
  $.getJSON('./data/skills.json')
    .done(function(data) {
      var skills = data.skills;
      var fragment = document.createDocumentFragment();

      $.each(skills, function(key, value) {
        var timeframe = value.years === '1' ? 'Year' : 'Years';

        $('<p>' + key +
          '<span class="show-for-small-only"><small> - ' + value.years + ' ' + timeframe + '</small></span>' +
          '<span class="pull-right show-for-medium"><small>' + value.years + ' ' + timeframe + '</small></span>' +
          '<progress max="5" value="" aria-valuetext=""/>' +
        '</p>')
          .find('progress')
            .attr('value', value.years)
            .attr('aria-valuetext', value.years + ' ' + timeframe)
          .end()
          .appendTo(fragment);
      });

      $('.skills-progress div').append(fragment);
    });
};

var setProjectDetails = function(projectName) {
  $.getJSON('./data/projects.json')
    .done(function(data) {
      var project = data.projects[projectName];

      $('#projectsModal .project-image').attr('src', project.image);
      $('#projectsModal .project-image').attr('alt', project.imageAlt);
      $('#projectsModal .project-name').text(project.name);
      $('#projectsModal .project-short-description').text(project.shortDescription);
      $('#projectsModal .project-github').text(project.github);
      $('#projectsModal .project-github').attr('href', project.github);
      $('#projectsModal .project-website').text(project.website);
      $('#projectsModal .project-website').attr('href', project.website);
      $('#projectsModal .project-long-description').empty();
      $.each(project.longDescription, function(index, value) {
        $('#projectsModal .project-long-description').append("<p>" + value + "</p>");
      });
      $('#projectsModal .project-key-technologies').text(project.keyTechnologies);
    });
};
