const arrButton = document.querySelectorAll(".project__description .button");
const arrScreen = document.querySelectorAll(".screen-project");

for(let contButton = 0; contButton < arrButton.length; contButton++){
    arrButton[contButton].addEventListener("click", () =>{
        arrScreen[contButton].classList.add("screen-project--on-display");
        setTimeout(() => arrScreen[contButton].classList.add("screen-project--on-scale"), 0);
    });

    arrScreen[contButton].addEventListener("mouseleave", () => {
        arrScreen[contButton].classList.remove("screen-project--on-scale");
        setTimeout(() => arrScreen[contButton].classList.remove("screen-project--on-display"), 300);
    });
};