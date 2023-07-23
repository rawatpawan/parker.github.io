
  $(document).ready(function() {
    // Target the "Residential" link by its ID and the dropdown menu by its class
    $(".secondtreesecondary").hover(function() {
        $('.secondtreesecondary #ResidentialDropdown').css('color',"#E5B250")
        $('.secondtreesecondary #ResidentialDropdown').addClass('show')
        $('.secondtreesecondary #ResidentialDropdown').attr("aria-expanded", "true")
        $('.secondtreesecondary  .secondtree').addClass('show')
        $('.secondtreesecondary  .secondtree').attr("data-bs-popper", "static")
        
    }, function() {
        $('.secondtreesecondary #ResidentialDropdown').css('color',"#FFFFFF")
        $('.secondtreesecondary #ResidentialDropdown').removeClass('show')
        $('.secondtreesecondary #ResidentialDropdown').attr("aria-expanded", "false")
        $('.secondtreesecondary  .secondtree').removeClass('show')
        $('.secondtreesecondary  .secondtree').attr("data-bs-popper", "")

    });



    // When the residential button is clicked
    $(".residentailButton").on("click", function() {
        // Toggle classes
        $(this).removeClass("button2").addClass("button1");
        $(".commercialButton").removeClass("button1").addClass("button2");
        
  
        // Show the residential content and hide the commercial content
        $(".residentialRow").show();
        $(".commercialRow").hide();
      });
  
      // When the commercial button is clicked
      $(".commercialButton").on("click", function() {
        // Toggle classes
        $(this).removeClass("button2").addClass("button1");
        $(".residentailButton").removeClass("button1").addClass("button2");
  
        // Show the commercial content and hide the residential content
        $(".residentialRow").hide();
        $(".commercialRow").show();
      });

      
  });

  $('[data-toggle="slide-collapse"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.animate({
      'width': 'toggle'
    }, 350);
    $(".menu-overlay").fadeIn(500);
  
  });
  $(".menu-overlay").click(function(event) {
    $(".navbar-toggler").trigger("click");
    $(".menu-overlay").fadeOut(500);
  });
  