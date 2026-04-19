// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Select all sections we want to animate
  const sections = document.querySelectorAll(".reveal");

  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // If the section comes into view
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // Optional: Stop observing once revealed so it doesn't animate out and in again
        // observer.unobserve(entry.target); 
      }
    });
  }, {
    // Triggers when 15% of the element is visible
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px" 
  });

  // Attach the observer to each section
  sections.forEach((section) => {
    observer.observe(section);
  });
});
// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // 1. Dark Mode Toggle Logic
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlTag = document.documentElement; // Targets the <html> tag

  // Check local storage for saved theme preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  
  if (savedTheme === 'dark') {
    htmlTag.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent ;
  } else {
    themeToggleBtn.textContent =''; 
  }

  // Toggle themes on click
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDarkMode = htmlTag.getAttribute('data-theme') === 'dark';

      if (isDarkMode) {
        // Switch to Light Mode
        htmlTag.removeAttribute('data-theme');
        localStorage.setItem('portfolio-theme', 'light');
        themeToggleBtn.textContent = '' ;
      } else {
        // Switch to Dark Mode
        htmlTag.setAttribute('data-theme', 'dark');
        localStorage.setItem('portfolio-theme', 'dark');
        themeToggleBtn.textContent = '' ;
      }
    });
  }

  // ==========================================
  // 2. Scroll Reveal Animation Logic
  // ==========================================
  // Select all sections we want to animate
  const sections = document.querySelectorAll(".reveal");

  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // If the section comes into view
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // Optional: Stop observing once revealed so it doesn't animate out and in again
        // observer.unobserve(entry.target); 
      }
    });
  }, {
    // Triggers when 15% of the element is visible
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px" 
  });

  // Attach the observer to each section
  sections.forEach((section) => {
    observer.observe(section);
  });
});
