let slideIndex=1;
showDivs(slideIndex);

function dotJump(num){
    showDivs(slideIndex=num);
}

function slide(num){
    showDivs(slideIndex+=num);
}

function showDivs(num){
    let images = document.getElementsByClassName("img-slider");
    let title= document.getElementsByClassName("img-title");
    let dots = document.getElementsByClassName("dot");

    if(slideIndex>images.length){
        slideIndex=1;
    }

    if(slideIndex<1){
        slideIndex=images.length;
    }

    for(let i=0;i<images.length;i++){
        images[i].style.display="none";
        title[i].style.display="none";
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // for(let i=0;i<dots.length;i++){
    // }
    
    images[slideIndex-1].style.display="block";
    title[slideIndex-1].style.display="block";
    dots[slideIndex - 1].className += " active";
}
