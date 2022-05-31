'use strict'

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
const inputSmall = document.querySelector('.showNumSmall');
const inputStr = input.value;
let inputSmallStr = ''; 

numKeys.forEach(num => {
  num.addEventListener("click",() =>{
    //add trim function to delete space of innerhtml
    input.value += num.innerHTML.trim(); 
    inputSmall.value += num.innerHTML.trim();
    inputSmallStr = inputSmall.value; 
  });
});

dotKey.addEventListener("click", () => { 
  if (!inputStr.includes(".")) {
    input.value += ".";
    inputSmall.value += ".";
    inputSmallStr = inputSmall.value;
  }
});

operatorKeys.forEach(operator =>{
  operator.addEventListener("click",() =>{
      inputSmall.value += operator.innerHTML.trim();
      inputSmallStr = inputSmall.value;
  })
});
function checkLastCharInput(){
  let lastChar = inputSmallStr.charAt(inputSmallStr.length - 1);
  if(!isNaN(lastChar)){
    console.log('number');
    return 'number';
  }
  else if((lastChar == '/') || (lastChar == '+')  || (lastChar == '-')  || (lastChar == '%')){
    console.log('operator');
    return 'operator';
  }
  else if((lastChar == '.')){
    console.log('dot');
    return 'dot';
  }
}

result.addEventListener('click',()=>{
 /*  checkLastCharInput();  */
})

deleteKey.addEventListener("click",() =>{
  //delete end num/operator of input value
  input.value = input.value.slice(0, -1);
  inputSmall.value = inputSmall.value.slice(0, -1);
});

clearKey.addEventListener("click",() =>{
  input.value = '';
  inputSmall.value = '';
});


/* clock of calculator */
(function () {
  let time;
  function timeFormat(time) {
      return (time < 10) ? `0${time}` : time;
  }
  function showTime() {
      let today = new Date(),
          hour = timeFormat(today.getHours()),
          min = timeFormat(today.getMinutes());
      document.querySelector('#clock').innerHTML = hour + ":" + min;
      time = setTimeout(function () {
          showTime()
      }, 500);
  }
  showTime();
})();