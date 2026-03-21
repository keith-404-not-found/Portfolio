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