
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

    $(".threetreesecondary").hover(function() {
      $('.threetreesecondary #CommercialDropdown').css('color',"#E5B250")
      $('.threetreesecondary #CommercialDropdown').addClass('show')
      $('.threetreesecondary #CommercialDropdown').attr("aria-expanded", "true")
      $('.threetreesecondary  .threetree').addClass('show')
      $('.threetreesecondary  .threetree').attr("data-bs-popper", "static")
      
  }, function() {
      $('.threetreesecondary #CommercialDropdown').css('color',"#FFFFFF")
      $('.threetreesecondary #CommercialDropdown').removeClass('show')
      $('.threetreesecondary #CommercialDropdown').attr("aria-expanded", "false")
      $('.threetreesecondary  .threetree').removeClass('show')
      $('.threetreesecondary  .threetree').attr("data-bs-popper", "")

  });


      // Function to hide all sections and reset button classes
      function hideAllSectionsAndResetButtons() {
        $(".residentialRow, .commercialRow, .plotRow").addClass("hide-section");
        $(".residentailButton, .commercialButton, .plotButton").removeClass("button1").addClass("button2");
      }
    
      // Button click event for "Residential"
      $(".residentailButton").on("click", function() {
        hideAllSectionsAndResetButtons();
        $(this).removeClass("button2").addClass("button1");
        $(".residentialRow").removeClass("hide-section");
      });
    
      // Button click event for "Commercial"
      $(".commercialButton").on("click", function() {
        hideAllSectionsAndResetButtons();
        $(this).removeClass("button2").addClass("button1");
        $(".commercialRow").removeClass("hide-section");
      });
    
      // Button click event for "Plot"
      $(".plotButton").on("click", function() {
        hideAllSectionsAndResetButtons();
        $(this).removeClass("button2").addClass("button1");
        $(".plotRow").removeClass("hide-section");
      });

      
      
      // layout master and unnits toggle


$("#planSection .unitsLayoutButton").on("click", function() {
    // Toggle the button classes
    $(".masterPlanButton").removeClass("button3").addClass("button2");
    $(this).removeClass("button2").addClass("button3");

    // Hide masterplansection and show unitslayoutsection
    $("#planSection .masterplansection").addClass("hide-section");
    $("#planSection .unitslayoutsection").removeClass("hide-section");
});

$("#planSection .masterPlanButton").on("click", function() {
    // Toggle the button classes
    $(".unitsLayoutButton").removeClass("button3").addClass("button2");
    $(this).removeClass("button2").addClass("button3");

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
    autoplayTimeout: 4000,
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
        autoplayTimeout: 1500,
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
        autoplayTimeout: 1500,
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
        autoplayTimeout: 1500,  
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
        autoplayTimeout: 1500,
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
    autoplayTimeout: 2500, 
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
    autoplayTimeout: 2500,
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
    autoplay: true, 
    autoplaySpeed: 1500, 
    responsive: {
      0: {
        items: 1 
      },
      768: {
        items: 3 
      }
    }
  });

  $(' .whiteLillyResidencyanimicarousel').owlCarousel({
    items: 3, // Number of items to display
    loop: true, // Infinite loop
    margin: 15, 
    nav: true,
    navText: [
        // '<img src="images/whitelily-residency/leftarrow.png" alt="Previous" style="width:32px;height:21px">',
        // '<img src="images/whitelily-residency/rightarrow.png" alt="Previous" style="width:32px;height:21px">',
        '<i class="fa fa-solid fa-arrow-left" style="width:32px;height:21px"></i>',
        '<i class="fa fa-solid fa-arrow-right" style="width:32px;height:21px"></i>'
        ],
    rtl: false, 
    autoplay: true, 
    autoplayTimeout: 1500, 
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
      '<i class="fa fa-solid fa-arrow-left" style="width:32px;height:21px"></i>',
      '<i class="fa fa-solid fa-arrow-right" style="width:32px;height:21px"></i>'
        ],
    rtl: false, 
    autoplay: true, 
    autoplayTimeout: 3000, 
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
$('.whitelilyresidencyunitslayout').owlCarousel({
  items: 4, 
  loop: true, 
  nav: true, 
  navText: [
    '<i class="fa fa-solid fa-arrow-left" style="width:32px;height:21px"></i>',
    '<i class="fa fa-solid fa-arrow-right" style="width:32px;height:21px"></i>'
      ],
  rtl: false, 
  autoplay: true, 
  autoplayTimeout: 3500,
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
$('.barrestrocarousel').owlCarousel({
  items: 4, 
  loop: true, 
  nav: true, 
  navText: [
    '<i class="fa fa-solid fa-arrow-left" style="width:32px;height:21px"></i>',
    '<i class="fa fa-solid fa-arrow-right" style="width:32px;height:21px"></i>'
      ],
  rtl: false, 
  autoplay: true, 
  autoplayTimeout: 2500, 
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
$('.residentialRowCarousel').owlCarousel({
    items: 3, 
    loop: true,
    margin:10,
    nav: true,
    navText: [
        // '<img src="images/whitelily/leftarrow.png" alt="Previous" style="width:32px;height:21px">',
        // '<img src="images/whitelily/rightarrow.png" alt="Previous" style="width:32px;height:21px">',
        '<i class="fa fa-solid fa-arrow-left" style="width:32px;height:21px"></i>',
        '<i class="fa fa-solid fa-arrow-right" style="width:32px;height:21px"></i>'
        ],
    dots: false,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3 
      },
      992: {
        items: 3 
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





// Function to hide all sections and reset button classes
function hideAllSectionsAndResetButtons() {
    $(".residencymasterplansection, .highriselayoutsection, .lowriselayoutsection").addClass("hide-section");
    $(".residencymasterPlanButton, .highriseLayoutButton, .lowriseLayoutButton").removeClass("button3").addClass("button2");
  }
  
  // Initially hide all sections except the first one
  $(".highriselayoutsection, .lowriselayoutsection").addClass("hide-section");
  
  // Button click event for "MASTER PLAN"
  $(".residencymasterPlanButton").on("click", function() {
    hideAllSectionsAndResetButtons();
    $(".residencymasterplansection").removeClass("hide-section");
    $(this).removeClass("button2").addClass("button3");
  });
  
  // Button click event for "HIGH RISE FLOOR PLAN"
  $(".highriseLayoutButton").on("click", function() {
    hideAllSectionsAndResetButtons();
    $(".highriselayoutsection").removeClass("hide-section");
    $(this).removeClass("button2").addClass("button3");
  });
  
  // Button click event for "LOW RISE FLOOR PLAN"
  $(".lowriseLayoutButton").on("click", function() {
    hideAllSectionsAndResetButtons();
    $(".lowriselayoutsection").removeClass("hide-section");
    $(this).removeClass("button2").addClass("button3");
  });
  

      




  // ENQUIRY CLICK


   // Show the popup when the "Enquire Now" button is clicked
   $('.openenquiry').click(function() {
    $('.popup').fadeIn();
  });

  // Hide the popup when the "Close" icon is clicked
  $('.closeenquirypopup').click(function() {
    $('.popup').fadeOut();
  });

