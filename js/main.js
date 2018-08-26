/* SHOW/HIDE NAV + EVENTHANDLERS*/
$(".navToggle").on('click',function(){
  $("nav").toggleClass('open');
    $("nav").attr('aria-hidden', !$("nav").attr('aria-hidden') );
  //$("nav").attr('aria-hidden','false');
  $(".navToggle").toggleClass("is-active");

  $("main").on('click',function(e){
    $("nav").toggleClass('open');
    $("nav").attr('aria-hidden','true');
    $("nav").removeClass('open');
    $(".navToggle").toggleClass("is-active");
    $("main").off();
    e.stopPropagation();
  });

  /*$(".navbar-menuitem").on('click',function(e){
    e.preventDefault();
    $("nav").toggleClass('open');
    $("nav").attr('aria-hidden','true');
    $("nav").removeClass('open');
    $(".navToggle").toggleClass("is-active");
    var $id = $(e.target.hash);
    console.log(e.target.hash);
    if (e.target.hash === "#top")
    {
        var pos = 0;
    }
    else
    {
      var vh = $(window).height();
      console.log(vh + ' ' + 'vh * 0.15= ' + vh *0.15)
      var pos = $id.offset().top - (vh * 0.15) - 10;
    }

    $('html, body').animate({
    scrollTop: pos }, 700);

    $("main").off();
    $(".navbar-menuitem").off();
    e.stopPropagation();
  });*/
});
/* EVENTHANDLERS voor NAV ZONDER NAVTOGGLE */
$(".navbar-menuitem").on('click',function(e){
  e.preventDefault();
  $("nav").toggleClass('open');
  $("nav").attr('aria-hidden','true');
  $("nav").removeClass('open');
  $(".navToggle").toggleClass("is-active");
  var $id = $(e.target.hash);
  console.log(e.target.hash);
  if (e.target.hash === "#top")
  {
      var pos = 0;
  }
  else
  {
    var vh = $(window).height();
    console.log(vh + ' ' + 'vh * 0.15= ' + vh *0.15)
    var pos = $id.offset().top - (vh * 0.15) - 10;
  }

  $('html, body').animate({
  scrollTop: pos }, 700);

  $("main").off();
  //$(".navbar-menuitem").off();
  e.stopPropagation();
});

/* LOAD THE CORRECT ARTICLE */
function loadArticle() {
  //$(".image-gallery-container").hide();
  console.log(window.location.href);
  let url = window.location.href;
  let requestedPage = url.split("=")[1];
  console.log(requestedPage);
  if (requestedPage === "home")
    {
      return false;
    }
  if(!requestedPage) {return false;}

  $("article").load("articles/"+requestedPage+"/index.html",function(response,status,xhr){
    if ( status == "error" )
    {
    var msg = "Sorry but there was an error: ";
    console.log( msg + xhr.status + " " + xhr.statusText );
    // $("main").css("height",'75%');
    $("article").load("articles/404/index.html",function(response,status,xhr){
      if ( status =="error") {console.log("error!"); return false;}
      $("main").css("height",'75%')
    });
    }
    else {
      $("nav div ul").hide();
      $("nav div").append('<a href="?page=home"> << Get back home!</a>')
      console.log("initializing lazyLoader!")
      $(".lazy").Lazy({
          visibleOnly:true,
          afterLoad: function(element){ console.log("Loaded: " + $(element).attr('src'))},
        });
      //  $(".image-gallery-container").show();
  //
    }
  });

}

/* EVENTS FOR MAIN MENU */
  $(".category").on('click',function(e){
    console.log(e.target);
    $(e.target).find(".sub-category").show();
  })
