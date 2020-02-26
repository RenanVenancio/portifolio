let navBtn = document.querySelector(".nav-btn");
let btMenuCheckbox = document.querySelector(".nav-btn input");
let menuContent = document.querySelector(".navbar > .nav-items");
navBtn.addEventListener("click", function(evt) {
  if (btMenuCheckbox.checked) {
    openMenu();
  } else {
    closeMenu();
  }
});

function closeMenu() {
  menuContent.style.visibility = "hidden";
  menuContent.style.opacity = 0;
}

function openMenu() {
  menuContent.style.visibility = "visible";
  menuContent.style.opacity = 1;
}

menuContent.addEventListener("click", function(evt) {
  if (screen.width <= 600) {
    closeMenu();
    btMenuCheckbox.checked = false;
  }
});

let projects = document.querySelector(".projects");
function gotoProjects() {
  if (screen.width <= 600) {
    window.scrollTo(0, projects.offsetTop);
  } else if (screen.width > 600) {
    window.scrollTo(0, projects.offsetTop - 77);
    console.log(projects.offsetTop);
  }
}

function gotoHome() {
  window.scrollTo(0, 0);
}

// View an image
const viewer = new Viewer(document.getElementById("images"), {
  inline: false
});
// Then, show the image by click it, or call `viewer.show()`.

// View a list of images
const gallery = new Viewer(document.getElementById("images"));
// Then, show one image by click it, or call `gallery.show()`.
