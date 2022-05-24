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

/* const switchThemeFunc = function () {
  const turnDarkMode = function () {
    console.log('1')
    body.classList.add("dark-mode");
    btnLight.classList.remove("theme--active");
    btnDark.classList.add("theme--active");  
  };
  const turnLightMode = function () {  
    body.classList.remove("dark-mode");
    btnDark.classList.remove("theme--active");
    btnLight.classList.add("theme--active");
  };

  if (btnLight.classList.contains("theme--active")) {    
    turnLightMode();
  } else {  
    turnDarkMode();
  }
};
btnLight.addEventListener("click", switchThemeFunc);
btnDark.addEventListener("click", switchThemeFunc); */


// function to set a given theme/color-scheme
/* function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
}
// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();
document.querySelector('.calculator__theme').addEventListener("click", toggleTheme); */
