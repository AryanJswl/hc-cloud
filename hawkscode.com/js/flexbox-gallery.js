(function($) {
  $.fn.flexgal = function(){
 
    $(this).addClass('flex-gallery');
    $('img', this).parent().addClass('image-rate');

   // $('.image-rate').click(function() {
   //   $('img', this).clone().prependTo('#fullimage');
   //   $( "#fullimage" ).fadeIn("slow");
   // });

   // $('#fullimage').click(function() {
   //   $(this).fadeOut( "slow", function() {
   //     $('img',this).remove();
   //   });
   // });
 }
}(jQuery));
