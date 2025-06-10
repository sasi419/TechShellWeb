
 window.addEventListener("scroll", function() {
        var navbar = document.querySelector("nav.navbar");
        
        // Check if scroll is more than 50px
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#ffffff";
            navbar.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.backgroundColor = "transparent";
            navbar.style.boxShadow = "none";
        }
    });
    
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      duration: 500,       // animation duration in ms
      once: true,          // animation triggers once
      easing: 'ease-in-out'
    });
  });;

 function animateCounter(element, target, duration) {
        let start = 0;
        const stepTime = Math.abs(Math.floor(duration / target));
        const timer = setInterval(function () {
            start += 1;
            element.textContent = start;
            if (start === target) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    document.addEventListener("DOMContentLoaded", () => {
        const counter = document.querySelector('.timer');
        if (counter) {
            const target = parseInt(counter.getAttribute('data-to'));
            const speed = parseInt(counter.getAttribute('data-speed'));
            animateCounter(counter, target, speed);
        }
    });


 document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.brand-style-one-carousel', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      loop: true,
      speed: 4000, // Smooth speed for ticker
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      freeMode: true,
      freeModeMomentum: false,
      grabCursor: true,
    });
  });


document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function () {
            // Toggle the hovered class
            this.classList.toggle('hovered');

            // Close others
            document.querySelectorAll('.service-card').forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.remove('hovered');
                }
            });
        });
    });

    // Optional: Remove hovered class when clicked outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.service-card')) {
            document.querySelectorAll('.service-card').forEach(card => {
                card.classList.remove('hovered');
            });
        }
    });


 
    function animateCounter(el, to, speed) {
        let start = 0;
        const increment = to / (speed / 16); // Based on ~60fps

        function update() {
            start += increment;
            if (start < to) {
                el.textContent = Math.floor(start);
                requestAnimationFrame(update);
            } else {
                el.textContent = to;
            }
        }

        update();
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function startCounters() {
        const counters = document.querySelectorAll('.timer');
        counters.forEach(counter => {
            const to = parseInt(counter.getAttribute('data-to'), 10);
            const speed = parseInt(counter.getAttribute('data-speed'), 10);

            // Only animate if not already started
            if (!counter.classList.contains('animated') && isInViewport(counter)) {
                animateCounter(counter, to, speed);
                counter.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', startCounters);
    window.addEventListener('load', startCounters);

function showFadeInAnimations() {
    const elements = document.querySelectorAll('.fun-fact.fade');
    elements.forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', showFadeInAnimations);
window.addEventListener('load', showFadeInAnimations);

