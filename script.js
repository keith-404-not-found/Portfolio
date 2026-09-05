document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for Back To Top button
  const backToTopBtn = document.querySelector('.back-to-top');
  
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Basic Contact Form Submission Handler
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out! Your message has been sent.');
      contactForm.reset();
    });
  }
});

// Wait for DOM to load fully
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements you want to reveal on scroll
  const reveals = document.querySelectorAll(".reveal");

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add 'active' class when element comes into view
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.15, // Trigger when 15% of the element is visible
    }
  );

  // Attach observer to each reveal target
  reveals.forEach((element) => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize a new Lenis instance (Removed deprecated options)
    const lenis = new Lenis({
        duration: 1.2,       
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        orientation: 'vertical',        // Updated from direction
        gestureOrientation: 'vertical', // Updated from gestureDirection
        touchMultiplier: 2,
    });

    // 2. Create the animation frame loop
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    // 3. Start the loop
    requestAnimationFrame(raf);

    // 4. CRITICAL FIX: Recalculate page height on load and layout changes.
    // This stops the native scrollbar from fighting Lenis across different pages.
    const resizeObserver = new ResizeObserver(() => {
        lenis.resize();
    });
    resizeObserver.observe(document.body);

    window.addEventListener('load', () => {
        lenis.resize();
    });
});
