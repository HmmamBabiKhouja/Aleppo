let castle = { slideIndex: 1, name: "castle-" };
let mosque = { slideIndex: 1, name: "mosque-" };
let arr=[mosque,castle];

showDivs(castle);
showDivs(mosque);

function dotJump(num,className){
    for(let i = 0 ;i<arr.length;i++){
        if(arr[i].name===className){
            console.log(arr[i]);
            arr[i].slideIndex=num;
            showDivs(arr[i]);
        }
    }
}

function slide(num,className){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === className) {
            arr[i].slideIndex += num;
            showDivs(arr[i]);
        }
    }
}

function showDivs(obj){
    let images = document.getElementsByClassName(obj.name+"img-slider");
    let titles = document.getElementsByClassName(obj.name+"img-title");
    let dots = document.getElementsByClassName(obj.name+"dot");


    if(obj.slideIndex>images.length){
        obj.slideIndex=1;
    }
    if(obj.slideIndex<1){
        obj.slideIndex=images.length;
    }

    for(let i=0;i<images.length;i++){
        images[i].style.display="none";
        titles[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }

    titles[obj.slideIndex - 1].style.display="block";
    images[obj.slideIndex - 1].style.display="block";
    dots[obj.slideIndex - 1].className += " dot-active";
}
