function activeMenu(value){
    const menuButton = document.querySelector(".menu-button");
    const arrBar = document.querySelectorAll(".menu-button__bar");
    const arrOption = document.querySelectorAll(".header > .nav > .a");


    const menuAnimate = (element, position = 0, rotate = 0, scale = 1) => {
        if(value) element.setAttribute("y", `${position}`);
        else element.style.transform = `rotate(${rotate}deg) scale(${scale})`;
        setTimeout(() => {
            if(value) element.style.transform = `rotate(${rotate}deg) scale(${scale})`;
            else element.setAttribute("y", `${position}`);
        }, 200);
    };

    const optionAnimate = (time, position) => {
        arrOption[0].style.transform = `translate(0px, ${position}px)`
        setTimeout(() => {
            arrOption[1].style.transform = `translate(0px, ${position}px)`

            setTimeout(() => {
                arrOption[2].style.transform = `translate(0px, ${position}px)`

                setTimeout(() => {
                    arrOption[3].style.transform = `translate(0px, ${position}px)`
                    if(value) menuButton.setAttribute("onclick", "activeMenu(false)");
                    else menuButton.setAttribute("onclick", "activeMenu(true)");
                }, time);

            }, time);

        }, time);
    };


    if(value){
        menuAnimate(arrBar[0], 42.5, 45);
        menuAnimate(arrBar[1], 42.5, 0, 0);
        menuAnimate(arrBar[2], 42.5, -45);
        optionAnimate(100, -45);
    }else{
        menuAnimate(arrBar[0], 0);
        menuAnimate(arrBar[1], 42.5);
        menuAnimate(arrBar[2], 85);
        optionAnimate(150, 0);
    };
};