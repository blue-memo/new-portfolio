document.addEventListener("DOMContentLoaded", function() {

  const sections = document.querySelectorAll("section");
  const dots = document.querySelectorAll(".timeline-dot");
  const navLinks = document.querySelectorAll(".nav-link");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const contactBtn = document.querySelector("header button");

  dots.forEach(dot => {
      dot.addEventListener("click", function() {
          const targetId = this.getAttribute("data-target");
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: "smooth" });
          }
      });
  });

  menuToggle.addEventListener("click", function() {
      navMenu.classList.toggle("active");
  });

  window.addEventListener("scroll", function() {
      let currentSection = "";
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop - 100) {
              currentSection = section.getAttribute("id");
          }
      });

      navLinks.forEach(link => {
          link.classList.toggle(
              "active", 
              link.getAttribute("href") === `#${currentSection}`
          );
      });

      dots.forEach(dot => {
          dot.classList.toggle(
              "active",
              dot.getAttribute("data-target") === currentSection
          );
      });

      contactBtn.classList.toggle("active", currentSection === "section5");
      scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  scrollTopBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });

  AOS.init();
});
