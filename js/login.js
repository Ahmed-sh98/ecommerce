//
const loader = document.querySelector(".loader");
setTimeout(() => {
  loader.classList.add("hide");
}, 5000);

//
let btnLogin = document.querySelector(".login");
let inputLogin = document.querySelector(".login-mobile");

let closeList = document.querySelector("button.close-list");
let closeLogin = document.querySelector("button.close-login");

let btnBar = document.querySelector(".category-nav");
let listItem = document.querySelector(" .mobile-category");

btnBar.onclick = function () {
  listItem.classList.toggle("show");
  listItem.style.display = "block";
};

btnLogin.onclick = function () {
  inputLogin.classList.toggle("display-login");
  inputLogin.style.display = "block";
};

closeList.onclick = function () {
  listItem.style.display = "none";
};

closeLogin.onclick = function () {
  inputLogin.style.display = "none";
};
