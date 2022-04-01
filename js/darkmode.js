function myFunction() {
  let darkMode = document.getElementsByClassName("dark-mode-btn");
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    let icon = document.getElementById("icon");
    icon.src = "./images/icons/lightmode-sun.png";
  } else {
    icon.src = "./images/icons/darkmode-moon.png";
  }

  if (document.body.classList.contains("dark-mode")) {
    let logo = document.getElementById("logo");
    logo.src = "./images/icons/logo-white.png";
  } else {
    logo.src = "./images/icons/logo.png";
  }
}
