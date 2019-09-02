let castleIndex = 1;
let greatMosqueIndex = 1;

showDivs(castleIndex,"castle");
showDivs(greatMosqueIndex,"great-mosque");

function dotJump(num, className) {
    if (className === "castle") {
        showDivs((castleIndex = num),"castle","castle-dot");
    } else if (className === "great-mosque") {
        showDivs((greatMosqueIndex = num),"great-mosque","great-mosque-dot");
    }
}

function slide(num, className) {
    if (className === "castle") {
        showDivs((castleIndex += num),"castle","castle-dot");
    } else if (className === "great-mosque") {
        showDivs((greatMosqueIndex += num),"great-mosque","great-mosque-dot");
    }  
}

function showDivs(num,className,dotName) {
  let images = document.getElementsByClassName(className);
  let dots = document.getElementsByClassName(dotName);

  if (slideIndex > images.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = images.length;
  }

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // for(let i=0;i<dots.length;i++){
  // }

  dots[slideIndex - 1].className += " active";
  images[slideIndex - 1].style.display = "block";
}
