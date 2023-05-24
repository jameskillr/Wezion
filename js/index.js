// updated var to const
const navLinks = document.querySelector(".nav-links");
const menuBtn = document.getElementById("menu_btn");
const links = navLinks.querySelectorAll("a");

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

// prevents the mobile menu from showing in desktop view
function handleResize() {
  if (window.innerWidth >= 480) {
    showMenu();
  } else {
    hideMenu();
  }
}

function closeMenu(event) {
  // Check the viewport width
  if (window.innerWidth < 480) {
    hideMenu();

    if (window.innerWidth >= 480) {
      menuBtn.style.display = "none";
    }
  }
}

window.addEventListener("resize", handleResize);

handleResize();

// closes the mobile menu when a link is clicked
links.forEach(function (link) {
  link.addEventListener("click", closeMenu);
});



// toggle light and dark modes
const icons = document.getElementsByClassName("icon");

if (localStorage.getItem("mode") == null) {
  localStorage.setItem("mode", "light");
}

let localData = localStorage.getItem("mode");

if (localData == "light") {
  for (let i = 0; i < icons.length; i++) {
    icons[i].src = "./icons/moon.png";
  }
  document.body.classList.remove("dark-mode");
} else if (localData == "dark") {
  for (let i = 0; i < icons.length; i++) {
    icons[i].src = "./icons/sun.png";
  }
  document.body.classList.add("dark-mode");
}

for (let i = 0; i < icons.length; i++) {
  icons[i].onclick = function () {
    const currentMode = localStorage.getItem("mode");
    if (currentMode == "light") {
      this.src = "./icons/sun.png";
      localStorage.setItem("mode", "dark");
      document.body.classList.add("dark-mode");
    } else if (currentMode == "dark") {
      this.src = "./icons/moon.png";
      localStorage.setItem("mode", "light");
      document.body.classList.remove("dark-mode");
    }
  };
}




// scroll
// window.addEventListener("scroll", function () {
//   var header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 0);
// });
