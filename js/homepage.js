$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > $(document).height()*0.31) {
         $('body').addClass('changeColor')
      }
      if ($(this).scrollTop() < $(document).height()*0.31) {
         $('body').removeClass('changeColor')
      }
      if ($(this).scrollTop() > $(document).height()*0.66) {
         $('body').addClass('changeColor2')
      }
      if ($(this).scrollTop() < $(document).height()*0.66) {
         $('body').removeClass('changeColor2')
      }
   });
});

