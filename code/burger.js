let burger = document.querySelector(".burger");
let burgerLine = document.querySelectorAll(".burger-line");
let tabsList = document.querySelector(".tabs-list");

burger.addEventListener("click", () => {
    tabsList.classList.toggle("tabs-list-active");
    burgerLineColorChange();
});

function burgerLineColorChange(){
    for (let i=0;i<burgerLine.length;i++){
        burgerLine[i].classList.toggle("burger-line-active");
    }
}

