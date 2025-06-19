window.addEventListener("load", function () {
  setTimeout(function () {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    setTimeout(function () {
      preloader.style.display = "none";
    }, 500); // matches the CSS transition
  }, 0); // No artificial delay
});

function toggleNav() {
  document.querySelector(".nav-links").classList.toggle("show");
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".nav-links").classList.remove("show");
  });
});

const navbar = document.querySelector(".navbar"); // Adjust selector as needed
document.documentElement.style.setProperty(
  "--navbar-height",
  navbar.offsetHeight + "px"
);
