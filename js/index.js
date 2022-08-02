var navLinks = document.getElementById("navLinks");
var menuBtn = document.getElementById("menu_btn");

function showMenu() {
  navLinks.style.right = "0%";
  navLinks.style.display = "block";
  menuBtn.style.display = "none";
}

function hideMenu() {
  navLinks.style.right = "-100%";
  navLinks.style.display = "none";
  menuBtn.style.display = "block";
}

var icon = document.getElementById("icon");

if (localStorage.getItem("mode") == null) {
  localStorage.setItem("mode", "light");
}

let localData = localStorage.getItem("mode");

if (localData == "light") {
  icon.src = "./icons/moon.png";
  document.body.classList.remove("dark-mode");
} else if (localData == "dark") {
  icon.src = "./icons/sun.png";
  document.body.classList.add("dark-mode");
}

icon.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "./icons/sun.png";
    localStorage.setItem("mode", "dark");
  } else {
    icon.src = "./icons/moon.png";
    localStorage.setItem("mode", "light");
  }
};

// scroll
// window.addEventListener("scroll", function () {
//   var header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 0);
// });
