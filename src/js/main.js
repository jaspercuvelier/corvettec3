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

/* LOAD THE CORRECT ARTICLE */
function loadArticle() {
  console.log(window.location.href);
  let url = window.location.href;
  let requestedPage = url.split("=")[1];
  console.log(requestedPage);
  if(!requestedPage) {return false;}
  $("article").load("articles/"+requestedPage+"/index.html",function(response,status,xhr){
    if ( status == "error" )
    {
    var msg = "Sorry but there was an error: ";
    console.log( msg + xhr.status + " " + xhr.statusText );
    // $("main").css("height",'75%');
    }
    else {

  //
    }
  });

}

/* EVENTS FOR MAIN MENU */
  $(".category").on('click',function(e){
    console.log(e.target);
    $(e.target).find(".sub-category").show();
  })
