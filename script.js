// ==================== Mobile Navigation ====================

// Get the hamburger button
const menuToggle = document.getElementById("menu-toggle");

// Get the navigation menu
const nav = document.getElementById("nav");

// When the hamburger button is clicked
menuToggle.addEventListener("click", () => {
  // Add/remove the active class
  nav.classList.toggle("active");
});

// ==================== Scroll Animation ====================

// Select the sections we want to animate
const sections = document.querySelectorAll(
  ".about, .services, .testimonials, .contact",
);

// Create an observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

// Observe each section
sections.forEach((section) => {
  section.classList.add("hidden");

  observer.observe(section);
});
