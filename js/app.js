$('.nav').hover(function(){
  $('.nav').removeClass('active');
  $(this).addClass('active');

  $('.content-block').removeClass('active');
  $('#' + $(this).attr('data-target')).addClass('active');
});

$(document).ready(function(){
  $.getJSON('https://api.github.com/users/Eddy0402/repos', function(data){
    data.sort(function(a,b){
      return b.stargazers_count - a.stargazers_count;
    });
    data.forEach(function(repo){
      let container = $('#content-github');
      let html = $([
        '<div class="github-item">',
          '<div class="right">',
            repo.stargazers_count, '☆',
          '</div>',
          '<div class="title">',
            repo.name,
          '</div>',
          '<div class="description">',
            repo.description,
          '</div>',
        '</div>',
      ].join(""));
      container.append(html);
    });
  });
});

