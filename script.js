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
