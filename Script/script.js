//----------------burgermenu---------------
const hamburger = document.querySelector("#hamburger");
const navmenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
  })
);
window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenvises");
  //tilføjer eventlistener på menu
  document
    .querySelector("#menucontainer")
    .addEventListener("mouseover", menu_mouseover);
  document
    .querySelector("#menucontainer")
    .addEventListener("mouseout", menu_mouseout);
  document
    .querySelector("#knapmenu")
    .addEventListener("mouseover", menu_mouseover);
  document
    .querySelector("#knapmenu")
    .addEventListener("mouseout", menu_mouseout);

  //tilføjer eventlistener på catering
  document
    .querySelector("#cateringcontainer")
    .addEventListener("mouseover", catering_mouseover);
  document
    .querySelector("#cateringcontainer")
    .addEventListener("mouseout", catering_mouseout);
  document
    .querySelector("#knapcatering")
    .addEventListener("mouseover", catering_mouseover);
  document
    .querySelector("#knapcatering")
    .addEventListener("mouseout", catering_mouseout);
}

//menu
function menu_mouseover() {
  console.log("menu_mouseover");
  document.getElementById("menuhover").style.display = "inherit";
}
function menu_mouseout() {
  console.log("menu_mouseout");
  document.getElementById("menuhover").style.display = "none";
}

//catering
function catering_mouseover() {
  console.log("catering_mouseover");
  document.getElementById("cateringhover").style.display = "inherit";
}
function catering_mouseout() {
  console.log("catering_mouseout");
  document.getElementById("cateringhover").style.display = "none";
}
