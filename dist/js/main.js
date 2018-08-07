/* SHOW/HIDE NAV */
$("#navToggle").on('click',function(){
  console.log("clicked!");

  $("nav").slideToggle();
  $("#navToggle").toggleClass("is-active")
});
