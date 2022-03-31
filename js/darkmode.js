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

// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }

// var app = document.getElementsByTagName("BODY")[0];
// if (localStorage.lightMode == "dark") {
//   app.setAttribute("data-light-mode", "dark");
// }

// function toggle_light_mode() {
//   var app = document.getElementsByTagName("BODY")[0];
//   if (localStorage.lightMode == "dark") {
//     localStorage.lightMode = "light";
//     app.setAttribute("data-light-mode", "light");
//   } else {
//     localStorage.lightMode = "dark";
//     app.setAttribute("data-light-mode", "dark");
//   }
//   console.log("lightMode = " + localStorage.lightMode);
// }
