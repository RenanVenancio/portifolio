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

let images = document.querySelectorAll('.images');

images.forEach(i => {
  new Viewer(i, {
    inline: false
  });
})

const viewer = new Viewer(document.getElementById("images"), {
  inline: false
});


function showDetailsProject(projectName){
  let project = document.querySelector(`#${projectName} .info`);
  let button = document.querySelector(`#${projectName} button i`);

  if (project.getAttribute('expanded') == 'false'){
    project.style.display = 'inline';
    button.classList.remove('fa-plus') 
    button.classList.add('fa-minus');    
    project.setAttribute('expanded', 'true');
  }else{
    project.style.display = 'none';
    project.style.transition = "all 2s";
    button.classList.remove('fa-minus');
    button.classList.add('fa-plus') 
    project.setAttribute('expanded', 'false');
  }
}