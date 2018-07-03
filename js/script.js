$(function() {
   // on click ajouter des addMarkers
   var target = $('#image-wrapper');
   var src_image = $('#source').attr('src');
   console.log('src image : ' + src_image);
   $('img').click(function(e) {
      var target = $('#image-wrapper');
      var offset = $(this).offset();
      var x = e.pageX - offset.left;
      var y = e.pageY - offset.top;
      $('<span id="marker_' + x + '_' + y + '" data-x="' + x + '" data-y="' + y + '" data-message="" class="marker" />').css({
         "top": y,
         "left": x
      }).appendTo(target);
      $('#exampleModal').modal('show');
      var modal = $('#exampleModal');
      modal.find('.modal-body textarea').val();
      modal.find('#x').val(x);
      modal.find('#y').val(y);
      modal.find('#src_image').val(src_image);
   });
   $.ajax({
      method: "GET",
      dataType: "json",
      url: "https://mon-chatbot.com/eko/draw_dot/php/load_marker.php?src_image=" + src_image,
   }).done(function(msg) {
      var coord_data = JSON.parse(msg);
      $.each(coord_data.datas, function(index, value) {
         console.log(value);
         $('<span id="marker_' + value.x + '_' + value.y + '" data-x="' + value.x + '" data-y="' + value.y +
            '" data-message="' + value.message + '" class="marker" />').css({
            "top": value.y,
            "left": value.x
         }).appendTo(target);
      });
   });
});
$(document).on("click", ".marker", function() {
   var src_image = $('#source').attr('src');
   var x = $(this).data('x');
   var y = $(this).data('y');
   var message = $(this).data('message');
   var modal = $('#exampleModal');
   modal.find('.modal-body textarea').val(message);
   $('#exampleModal').modal('show');
   modal.find('#x').val(x);
   modal.find('#y').val(y);
   modal.find('#src_image').val(src_image);
});
$('#exampleModal').on('hidden.bs.modal', function() {
   var modal = $('#exampleModal');
   modal.find('.modal-body textarea').val();
})
$('#delete').on('click', function() {
   var datastring = $("#mon_formulaire").serialize();
   $.ajax({
      method: "GET",
      url: "https://mon-chatbot.com/eko/draw_dot/php/delete_marker.php?" + datastring,
   }).done(function(msg) {
      $('#exampleModal').modal('hide');
      location.reload();
   });
})
$('#validate').on('click', function() {
   // get all the inputs into an array.
   var datastring = $("#mon_formulaire").serialize();
   $.ajax({
      method: "GET",
      url: "https://mon-chatbot.com/eko/draw_dot/php/add_marker.php?" + datastring,
   }).done(function(msg) {
     location.reload();
   });
});
$('#close_button').on('click', function() {
   location.reload();
});
