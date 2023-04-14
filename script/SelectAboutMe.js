function selectAboutMe(value){
    const setTime = 300;
    const arrText = document.querySelectorAll(".size-selection-about-me__text");
    const arrButton = document.querySelectorAll(".size-selection-about-me__button");

    const selectButton = (button) =>{
        for (let element of arrButton){
            if(element == arrButton[button]) element.classList.add("size-selection-about-me__button--active");
            else element.classList.remove("size-selection-about-me__button--active");
        };
    };

    const addClass = (element, time) =>{
        element.style.opacity = "0";
        setTimeout(() => element.classList.add("size-selection-about-me__text--off"), time);        
    };
    const removeClass = (element, time) =>{
        element.classList.remove("size-selection-about-me__text--off");
        setTimeout(() => element.style.opacity = "1", time);        
    };

    if(value == 0){
        addClass(arrText[0], setTime);
        addClass(arrText[1], setTime);
    }else if(value == 1){
        addClass(arrText[0], setTime);
        removeClass(arrText[1], setTime);
    }else{
        removeClass(arrText[0], setTime);
        removeClass(arrText[1], setTime);
    }
    selectButton(value);
};

selectAboutMe(0)