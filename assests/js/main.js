document.addEventListener('DOMContentLoaded', function() {
  var navbar = document.getElementById('navbar');
  var lastScrollTop = 0;
  var isAtTop = true;

  window.addEventListener('scroll', function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && isAtTop) {
      navbar.classList.add('sticky');
      isAtTop = false;
    } else if (currentScroll <= 0 && !isAtTop) {
      navbar.classList.remove('sticky');
      isAtTop = true;
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', function() {
      var fromTop = window.scrollY;
      
      navLinks.forEach(function(link) {
          var section = document.querySelector(link.hash);

          if (
              section.offsetTop <= fromTop + 100 &&
              section.offsetTop + section.offsetHeight > fromTop + 100
          ) {
              link.classList.add('active');
          } else {
              link.classList.remove('active');
          }
      });
  });
});
