let burger = document.querySelector(".burger");
let burgerLine = document.querySelectorAll(".burger-line");
let tabsList = document.querySelector(".tabs-container");

burger.addEventListener("click", () => {
    tabsList.classList.toggle("tabs-container-active");
    burger.classList.toggle("burger-active");
    burgerLineColorChange();
});

function burgerLineColorChange(){
    for (let i=0;i<burgerLine.length;i++){
        burgerLine[i].classList.toggle("burger-line-active");
    }
}

