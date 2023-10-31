// $(document).ready(function() {
//     $('.button').click(function() {
//       // Remove the "active" class from all buttons
//       $('.button').removeClass('active');
  
//       // Add the "active" class to the clicked button
//       $(this).addClass('active');
//     });
//   });

$(document).ready(function() {
    $('.button').click(function() {
      // Remove the "active" class from all buttons
      $('.button').removeClass('active');
  
      // Add the "active" class to the clicked button
      $(this).addClass('active');
  
      // Hide all divs
      $('.test-tab').hide();
  
      // Show the corresponding div based on the button index
      let index = $(this).index();
      $('#content' + (index + 1)).show();
    });
  });

  $(document).ready(function() {
    // When the "Start" button is clicked
    $(".start-test").click(function() {
      // Change display property of testframe1 to "none"
      $("#testframe1").css("display", "none");
      // Change display property of testframe2 to "flex"
      $("#testframe2").css("display", "flex");
      
    });
  });
  $(document).ready(function() {
    // When the "Start" button is clicked
    $(".pre").click(function() {
      // Change display property of testframe1 to "none"
      $("#testframe1").css("display", "flex");
      // Change display property of testframe2 to "flex"
      $("#testframe2").css("display", "none");
      
    });
  });