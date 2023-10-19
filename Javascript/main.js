$(document).ready(function () {
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });
});


$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


var typed= new Typed("#element",{
    strings:["Frontend Developer","Web Developer", "Data Analyst"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
// Check if the window width is below a certain threshold (e.g., 500px)
if (window.innerWidth <= 501) {
    // Select the element you want to remove
    var elementToRemove = document.getElementById("remove");
  
    // Check if the element exists before attempting to remove it
    if (elementToRemove) {
      elementToRemove.remove(); // Use remove() to delete the element
    }
  }
  // Function to remove the element in landscape mode
function removeElementInLandscape() {
    const elementToRemove = document.getElementById("remove");
    if (elementToRemove && window.innerWidth >= 700) {
      elementToRemove.remove();
    }
  }
  
  // Call the function when the page loads and on window resize
  removeElementInLandscape();
  window.addEventListener("resize", removeElementInLandscape);
  
  