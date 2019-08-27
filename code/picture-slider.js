let slideIndex=1;
showDivs(slideIndex);




function slide(num){
    showDivs(slideIndex+=num);
}

function showDivs(num){
    let images = document.getElementsByClassName("images");
    if(slideIndex>images.length){
        slideIndex=1;
    }
    if(slideIndex<1){
        slideIndex=images.length;
    }

    for(let i=0;i<images.length;i++){
        images[i].style.display="none";
    }

    images[slideIndex-1].style.display="block";
}
