
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
  });

