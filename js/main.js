
 
// 
let btnBar = document.querySelector(".category-nav");
let listItem = document.querySelector(" .mobile-category");
let btnLogin = document.querySelector(".login");
let inputLogin = document.querySelector(".login-mobile");

let btnNotify = document.querySelector(".btnArrow");
let listNotify = document.querySelector(".listNotify");


btnNotify.onclick = function(){
  listNotify.classList.toggle('activeNotify');
  btnNotify.classList.toggle('btnArrow');
}

btnBar.onclick = function () {
  listItem.classList.toggle("show");
  listItem.style.display = "block";
  
};
//

//
btnLogin.onclick = function () {
  inputLogin.classList.toggle("display-login");
  inputLogin.style.display = "block";

};

let closeList = document.querySelector("button.close-list");
let closeLogin = document.querySelector("button.close-login");
closeLogin.onclick = function () {
  listItem.style.display = "none";
  inputLogin.style.display = "none";
};
closeList.onclick = function () {
  inputLogin.style.display = "none";
  listItem.style.display = "none";
};
