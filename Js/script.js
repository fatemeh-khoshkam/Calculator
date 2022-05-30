'use strict'

/* clock of calculator */
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let session = "AM";
  
    if (hh === 0) {
      hh = 12;
    }
    if (hh > 12) {
      hh = hh - 12;
      session = "PM";
    }
  
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
  
    let time = hh + ":" + mm + " " + session;
  
    document.getElementById("clock").innerText = time;
    setTimeout(function () {
      currentTime();
    }, 1000);
}
currentTime();


/* Theme Buttons */
const body = document.querySelector("body");
const btnLight = document.querySelector(".btn-light");
const btnDark = document.querySelector(".btn-dark");
const theme = localStorage.getItem("theme");

const switchThemeFunc = function () {
  const turnLightMode = function () {
    body.classList.remove("theme-dark");
    btnDark.classList.remove("theme--active");
    btnLight.classList.add("theme--active"); 
    localStorage.setItem("theme", "theme-light");
  };
  const turnDarkMode = function () {
    body.classList.add("theme-dark");
    btnDark.classList.add("theme--active");
    btnLight.classList.remove("theme--active"); 
    localStorage.setItem("theme", "theme-dark");
  };
  if (btnDark.classList.contains("theme--active")) {
    turnLightMode();
  } else {
    turnDarkMode();
  }
};
btnLight.addEventListener("click", switchThemeFunc);
btnDark.addEventListener("click", switchThemeFunc);

if (theme) {
  body.classList.add(theme);
  if (body.classList.contains("theme-dark")) {
    switchThemeFunc();
  }
} 

///calculate
const input = document.querySelector('.showNum');
const result = document.querySelector('.equal');
const numKeys = document.querySelectorAll('.numKey');
const clearKey = document.querySelector('.empty');
const operatorKeys = document.querySelectorAll('.operatorKey');
const deleteKey = document.querySelector('.delete');
const dotKey = document.querySelector('.dot');

numKeys.forEach(num => {
  num.addEventListener("click",() =>{
    //add trim function to delete space of innerhtml
    input.value += num.innerHTML.trim(); 
  });

});

dotKey.addEventListener("click", () => {
  const inputStr = input.value;
  if (!inputStr.includes(".")) {
    input.value += ".";
  }
});

clearKey.addEventListener("click",() =>{
  input.value = '';
});

operatorKeys.forEach(operator =>{
  operator.addEventListener("click",() =>{
    //add trim function to delete space of innerhtml
    input.value += operator.innerHTML.trim(); 
  })

});

deleteKey.addEventListener("click",() =>{
   //delete end num/operator of input value
   input.value = input.value.slice(0, -1);
});



