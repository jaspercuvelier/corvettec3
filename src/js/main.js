/* SHOW/HIDE NAV */
$("#navToggle").on('click',function(){
  $("nav").slideToggle();
  $("#navToggle").toggleClass("is-active")
});
