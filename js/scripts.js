let navBtn = document.querySelector(".nav-btn");
let btMenuCheckbox = document.querySelector(".nav-btn input");
let menuContent = document.querySelector(".navbar > .nav-items");
var body = document.getElementsByTagName('body')

navBtn.addEventListener("click", function (evt) {
  if (btMenuCheckbox.checked) {
    openMenu();
  } else {
    closeMenu();
  }
});

function closeMenu() {
  if (screen.width <= 600) {
    menuContent.style.visibility = "hidden";
    menuContent.style.opacity = 0;
  }
}

function openMenu() {
  menuContent.style.visibility = "visible";
  menuContent.style.opacity = 1;
}

menuContent.addEventListener("click", function (evt) {
  closeMenu();
});

function goto(section) {
  let item = document.querySelector(`.${section}`);
  if (screen.width <= 600) {
    window.scrollTo(0, item.offsetTop);
  } else if (screen.width > 600) {
    window.scrollTo(0, item.offsetTop - 77);
  }
  closeMenu();
}

function gotoHome() {
  window.scrollTo(0, 0);
  closeMenu();
}

let images = document.querySelectorAll(".images");
images.forEach(i => {
  new Viewer(i, {
    inline: false
  });
});

function showDetailsProject(projectName) {
  let info = document.querySelector(`#${projectName} .info`);
  let button = document.querySelector(`#${projectName} button i`);

  if (info.classList.contains("hide")) {
    info.classList.remove("hide");
    info.classList.add("show");

    button.classList.remove("fa-plus");
    button.classList.add("fa-minus");
  } else if (info.classList.contains("show")) {
    info.classList.remove("show");
    info.classList.add("hide");

    button.classList.remove("fa-minus");
    button.classList.add("fa-plus");
  }
}

function typeText(text, idElement, speed) {
  var i = 0;
  typeWriter()
  function typeWriter() {
    if (i < text.length) {
      document.getElementById(idElement).innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
}

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  let floatingSession = document.getElementById('floating-session');
  if (scroll > 0) {
    floatingSession.style.display = "none";
  }
  if (scroll < 40) {
    floatingSession.style.display = "block";
  }
});

window.onload = function () {
  typeText('<Desenvolvedor Web/>', 'dev-web', 60);
};

