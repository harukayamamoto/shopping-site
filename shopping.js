$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});


  $(document).ready(function(){
  $("#menu_icon").click(function(){
    $(".sp_navi_li").slideToggle();
  });
});

$(window).load(function(){
  $(".list_img img").click(function(){
    var img_src = $(this).attr("src");
    $(".display_img img").attr("src", img_src);
  });
});