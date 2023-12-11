window.addEventListener("load", sidenVises);

//forkortelser
let menu1 = document.querySelector("#menu1");
let menu2 = document.querySelector("#menu2");
let menu3 = document.querySelector("#menu3");
let menu4 = document.querySelector("#menu4");

let menu1Knap = document.querySelector("#menu1Knap");
let menu2Knap = document.querySelector("#menu2Knap");
let menu3Knap = document.querySelector("#menu3Knap");
let menu4Knap = document.querySelector("#menu4Knap");

function sidenVises() {
  console.log("sidenVises");
  showMenu1();
}

function showMenu1() {
  console.log("Menu1 vises");

  //Gør menu synlig
  menu1.style.display = "inherit";
  menu2.style.display = "none";
  menu3.style.display = "none";
  menu4.style.display = "none";

  //Styling af knappen
  menu1Knap.classList.add("selected");
  menu2Knap.classList = "";
  menu3Knap.classList = "";
  menu4Knap.classList = "";
}

function showMenu2() {
  console.log("Menu2 vises");

  menu1.style.display = "none";
  menu2.style.display = "inherit";
  menu3.style.display = "none";
  menu4.style.display = "none";

  //Styling af knappen
  menu1Knap.classList = "";
  menu2Knap.classList.add("selected");
  menu3Knap.classList = "";
  menu4Knap.classList = "";
}
function showMenu3() {
  console.log("Menu3 vises");

  menu1.style.display = "none";
  menu2.style.display = "none";
  menu3.style.display = "inherit";
  menu4.style.display = "none";

  //Styling af knappen
  menu1Knap.classList = "";
  menu2Knap.classList = "";
  menu3Knap.classList.add("selected");
  menu4Knap.classList = "";
}
function showMenu4() {
  console.log("Menu4 vises");

  menu1.style.display = "none";
  menu2.style.display = "none";
  menu3.style.display = "none";
  menu4.style.display = "inherit";

  //Styling af knappen
  menu1Knap.classList = "";
  menu2Knap.classList = "";
  menu3Knap.classList = "";
  menu4Knap.classList.add("selected");
}

// document.getElementById("menu1").style.display = "inherit";
//   document.getElementById("menu2").style.display = "none";
//   document.getElementById("menu3").style.display = "none";
//   document.getElementById("menu4").style.display = "none";
