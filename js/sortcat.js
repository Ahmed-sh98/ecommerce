

let btnSort = document.querySelector(".btn-sort");
let SortCategory = document.getElementById("categoryList");

btnSort.onclick = function () {
  SortCategory.classList.toggle("display");

};
 
let btnNotify = document.querySelector(".btnArrow");
let listNotify = document.querySelector(".listNotify");


btnNotify.onclick = function(){
  listNotify.classList.toggle('activeNotify');
  btnNotify.classList.toggle('btnArrow');
}
