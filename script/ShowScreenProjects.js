const arrButton = document.querySelectorAll(".project__description .button");
const arrScreen = document.querySelectorAll(".screen-project");

const time = 300;

for(let contButton = 0; contButton < arrButton.length; contButton++){
    arrButton[contButton].setAttribute("onclick", `showScreenProjects(true, ${contButton})`);
    //arrScreen[contButton].setAttribute("onmouseout", `showScreenProjects(true, ${contButton})`);
};

function showScreenProjects(value, element, ){
    if(value){
        arrScreen[element].classList.add("screen-project--on-display");
        setTimeout(() => arrScreen[element].classList.add("screen-project--on-scale"), time);

        //setTimeout(() => showScreenProjects(false, element), 10*time);

    }else{
        arrScreen[element].classList.remove("screen-project--on-scale");
        setTimeout(() => arrScreen[element].classList.remove("screen-project--on-display"), time);
    }
};