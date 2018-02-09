$(document).ready(function(){
    
  $('.parent-elem').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('ul.second-level',this).stop(true,true).slideDown(250);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('ul.second-level',this).stop(true,true).hide(250);
    }, this), 50));
  });

    $('.parent-item').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('ul.third-level',this).stop(true,true).show(250);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('ul.third-level',this).stop(true,true).hide(250);
    }, this), 50));
  });


});




