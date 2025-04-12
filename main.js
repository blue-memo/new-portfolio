document.addEventListener("DOMContentLoaded", function() {
  // Elements
  const sections = document.querySelectorAll("section");
  const dots = document.querySelectorAll(".timeline-dot");
  const navLinks = document.querySelectorAll(".nav-link");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const contactBtn = document.querySelector("header button");

  // Timeline dot click handler
  dots.forEach(dot => {
      dot.addEventListener("click", function() {
          const targetId = this.getAttribute("data-target");
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: "smooth" });
          }
      });
  });

  // Mobile menu toggle
  menuToggle.addEventListener("click", function() {
      navMenu.classList.toggle("active");
  });

  // Scroll event handler
  window.addEventListener("scroll", function() {
      let currentSection = "";
      
      // Determine current visible section
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop - 100) {
              currentSection = section.getAttribute("id");
          }
      });

      // Update navigation links
      navLinks.forEach(link => {
          link.classList.toggle(
              "active", 
              link.getAttribute("href") === `#${currentSection}`
          );
      });

      // Update timeline dots
      dots.forEach(dot => {
          dot.classList.toggle(
              "active",
              dot.getAttribute("data-target") === currentSection
          );
      });

      // Update contact button
      contactBtn.classList.toggle("active", currentSection === "section5");

      // Show/hide scroll to top button
      scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  // Scroll to top handler
  scrollTopBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Initialize AOS animation library
  AOS.init();
});