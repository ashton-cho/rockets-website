let lastScrollTop = 0; // Initial scroll position
const navBar = document.querySelector(".nav-bar"); // Select the nav bar

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // If the user is scrolling down, hide the navbar
  if (currentScroll > lastScrollTop) {
    navBar.style.top = "-80px"; // Hide the navbar (you can adjust this value to the navbar height)
  } else {
    navBar.style.top = "0"; // Show the navbar
  }

  // Update the last scroll position
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll value
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".scroll-section");

  // Use IntersectionObserver to detect when sections enter the viewport
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the 'active' class when the section is in the viewport
          entry.target.classList.add("active");
        } else {
          // Remove the 'active' class when the section is out of the viewport
          entry.target.classList.remove("active");
        }
      });
    },
    {
      threshold: 0.5, // 50% of the section needs to be in the viewport for activation
    }
  );

  // Observe each section
  sections.forEach((section) => {
    observer.observe(section);
  });
});
