 

 
function mada() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}
function visa() {
  var checkBox = document.getElementById("visaCheck");
  var visa = document.getElementById("visa");
  if (checkBox.checked == true){
    visa.style.display = "block";
  } else {
    visa.style.display = "none";
  }
}
function stcCheck() {
  var checkBox = document.getElementById("stc");
  var stcForm = document.getElementById("stcForm");
  
  if (checkBox.checked == true){
    stcForm.style.display = "block";
  } else {
    stcForm.style.display = "none";
  }
}
function bankCheck() {
  var checkBox = document.getElementById("bank");
  var bankForm = document.getElementById("bankForm");
  
  if (checkBox.checked == true){
    bankForm.style.display = "block";
  } else {
    bankForm.style.display = "none";
  }
 
}
function payCheck() {
  var checkBox = document.getElementById("pay");
  var bankForm = document.getElementById("payForm");
  
  if (checkBox.checked == true){
    payForm.style.display = "block";
  } else {
    payForm.style.display = "none";
  }
  
}
function pushCheck() {
  var checkBox = document.getElementById("push");
  var pushForm = document.getElementById("pushForm");
  
  if (checkBox.checked == true){
    pushForm.style.display = "block";
  } else {
    pushForm.style.display = "none";
  }
  
}
 

 

 



