$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 10)
      $(".MenuBar").addClass("sticky");
    else
      $(".MenuBar").removeClass("sticky");
  });
})

