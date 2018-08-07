/* SHOW/HIDE NAV */
$(".navToggle").on('click',function(){
  $("nav").toggleClass('open');
  $(".navToggle").toggleClass("is-active");
  $("main").on('click',function(e){
    $("nav").removeClass('open');
    $(".navToggle").toggleClass("is-active");
    $("main").off();
    e.stopPropagation();
  });

});
