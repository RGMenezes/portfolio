const arrButton = document.querySelectorAll(".project__description .button");
const arrButtonScreenReturn = document.querySelectorAll(".screen-project__button-return");
const arrScreen = document.querySelectorAll(".screen-project");

for(let contButton = 0; contButton < arrButton.length; contButton++){
    arrButton[contButton].addEventListener("click", () =>{
        document.querySelector(".body").classList.add("not-scroll");
        arrScreen[contButton].classList.add("screen-project--on-display");
        setTimeout(() => arrScreen[contButton].classList.add("screen-project--on-scale"), 0);
    });

    arrButtonScreenReturn[contButton].addEventListener("click", () => {
        document.querySelector(".body").classList.remove("not-scroll");
        arrScreen[contButton].classList.remove("screen-project--on-scale");
        setTimeout(() => arrScreen[contButton].classList.remove("screen-project--on-display"), 300);
    });
};