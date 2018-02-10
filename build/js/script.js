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

    $('.remove-item').click(function () {
      $(this).parent().hide(300);
  });

    $('.view__cart').click(function () {
      $(".overflow").show(0);
      $(".overflow").animate({opacity: 1},300);
      $(".header__modal-cart").slideToggle(300);
  });
    $('.overflow').click(function () {      
      $(".overflow").animate({opacity: 0},300);
      $(this).hide(300);
      $(".header__modal-cart").slideUp(300);
  });
  $( "#search__input" ).focus(function() {     
      $(this).addClass('open');
      $(".overflow2").show(0);
      $(".overflow2").animate({opacity: 0.5},300);
      $(".clear-input").show(0);
  });
    $( "#search__input" ).keyup(function() {    
      $(".autosearch").slideDown(300);
  });
    $('.overflow2').click(function () {    
      $("#search__input").removeClass( "open" );  
      $(".overflow2").animate({opacity: 0},300);
      $(this).hide(300); 
      $(".autosearch").slideUp(50);
      $(".clear-input").hide(0);
  });

    $('.clear-input').click(function () {    
      $("#search__input").val('');
  });
});




