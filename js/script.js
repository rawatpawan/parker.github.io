
  $(document).ready(function() {
    const lightbox = GLightbox({
        touchNavigation: true, // Enable swipe gestures on touch-enabled devices
        loop: true, // Enable looping through the gallery
      });

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

      // layout master and unnits toggle


 $("#planSection .unitsLayoutButton").on("click", function() {
      // Toggle the button classes
      $(".masterPlanButton").removeClass("button1").addClass("button2");
      $(this).removeClass("button2").addClass("button1");

      // Hide masterplansection and show unitslayoutsection
      $("#planSection .masterplansection").addClass("hide-section");
      $("#planSection .unitslayoutsection").removeClass("hide-section");
    });

    $("#planSection .masterPlanButton").on("click", function() {
      // Toggle the button classes
      $(".unitsLayoutButton").removeClass("button1").addClass("button2");
      $(this).removeClass("button2").addClass("button1");

      // Hide unitslayoutsection and show masterplansection
      $("#planSection .unitslayoutsection").addClass("hide-section");
      $("#planSection .masterplansection").removeClass("hide-section");
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
  

   $('.first').owlCarousel({
    loop:true,
    // margin:10,
    nav:true,
    navText :false,
    dots:true,
    autoplay:true,
    autoplayTimeout: 200000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
    $('.second').owlCarousel({
        // loop:true,
        // margin:10,
        nav: true,
        navText: [
        '<i class="fa fa-solid fa-arrow-left"></i>',
        '<i class="fa fa-solid fa-arrow-right"></i>'
        ],
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })
    $('.third').owlCarousel({
        // loop:true,
        // margin:10,
        nav: true,
        navText: [
        '<i class="fa fa-solid fa-arrow-left"></i>',
        '<i class="fa fa-solid fa-arrow-right"></i>'
        ],
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })
    $('.four').owlCarousel({
        // loop:true,
        // margin:10,
        nav: true,
        navText: [
        '<i class="fa fa-solid fa-arrow-left"></i>',
        '<i class="fa fa-solid fa-arrow-right"></i>'
        ],
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })

$('.two').owlCarousel({
        // loop:false,
        // margin:46,
        nav: true,
        navText: [
        '<img src="images/icons/leftangel.png" alt="Previous" style="width:2rem;height:3.8rem">',
        '<img src="images/icons/rightangel.png" alt="Previous" style="width:2rem;height:3.8rem">',
        ],
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:6
            }
        }
    })
    $('.banner_banks').owlCarousel({
        // loop:true,
        // margin:20,
        nav: true,
        navText: [
        '<i class="fa fa-solid fa-arrow-left"></i>',
        '<i class="fa fa-solid fa-arrow-right"></i>'
        ],
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:5
            }
        }
    });
            
$('.overviewFirst').owlCarousel({
    items: 4, 
    loop: true, 
    nav: true, 
    rtl: true, 
    autoplay: true, 
    autoplaySpeed: 500, 
    responsive: {
        0: {
        items: 1 
        },
        768: {
        items: 1
        },
        992: {
        items: 1 
        }
    }
});
$('.overviewSecond').owlCarousel({
    items: 4, 
    loop: true, 
    nav: true, 
    rtl: false, 
    autoplay: true, 
    autoplaySpeed: 500, 
    responsive: {
        0: {
        items: 1 
        },
        768: {
        items: 1
        },
        992: {
        items: 1 
        }
    }
});

$('.animicarousel').owlCarousel({
    items: 3, // Number of items to display
    loop: true, // Infinite loop
    margin: 15, 
    nav: true,
    navText: [
        '<img src="images/whitelily/leftarrow.png" alt="Previous" style="width:32px;height:21px">',
        '<img src="images/whitelily/rightarrow.png" alt="Previous" style="width:32px;height:21px">',
        ],
    rtl: false, 
    autoplay: false, 
    autoplaySpeed: 2000, 
    responsive: {
      0: {
        items: 1 
      },
      768: {
        items: 3 
      }
    }
  });
  $('.unitslayout').owlCarousel({
    items: 4, 
    loop: true, 
    nav: true, 
    navText: [
        '<img src="images/icons/leftarrow.png" alt="Previous" style="width:32px;height:21px">',
        '<img src="images/icons/rightarrow_1.png" alt="Previous" style="width:32px;height:21px">',
        ],
    rtl: false, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    responsive: {
        0: {
        items: 1 
        },
        768: {
        items: 1
        },
        992: {
        items: 1 
        }
    }
});
$(".rectangleDiv a").on("click", function(event) {
if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate({
    scrollTop: $(hash).offset().top
    }, 800);
}
});

// Change background on link click
$(".rectangleDiv .rectangle ").on("click", function() {
$(".rectangleDiv .rectangle ").removeClass("active-link");
$(this).addClass("active-link");
});






      
