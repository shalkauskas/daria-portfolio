
//____________________ Arrows slide_________________________//
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      event.preventDefault();
      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});

// ---------------------Fade In-----------------------------//
$(document).ready(function() {
  /*! Fades in page on load */
  $('.fadein').css('display', 'none');
  $('.fadein').fadeIn(1000);
});
// ----------------------Modal---------------------------------//
$('.modal-image').on('click', function() {
  console.log('obj');
  $('#img01').attr('src', $(this).attr('src'));
  $('#myModal').show();
  $(window).click(function(event) {
    if (event.target.id == "myModal") {
      $("#myModal").hide();
    }
  });
});
$(".close").on('click', (function() {
  $("#myModal").hide();
}));
