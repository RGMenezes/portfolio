function selectAboutMe(value){
    const arrText = document.querySelectorAll(".size-selection-about-me__text");
    const arrButton = document.querySelectorAll(".size-selection-about-me__button");

    const selectButton = (button) =>{
        for (let element of arrButton){
            if(element == arrButton[button]) element.classList.add("size-selection-about-me__button--active");
            else element.classList.remove("size-selection-about-me__button--active");
        };
    };

    const animationText = (add) => {
        if(add){
            
        }else{

        };
    };

    if(value == 0){

    }else if(value == 1){

    }else{

    }
    selectButton(value);
};