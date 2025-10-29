const arrLinkMenuNavigation = document.querySelectorAll(".menu--navigation .a--text");

for(let link = 0; link < arrLinkMenuNavigation.length; link++){
    arrLinkMenuNavigation[link].setAttribute("onClick", "MenuNavigation(false)");
};

function onResizeMenuNavigation(){
    if(window.innerWidth >= 481) MenuNavigation(false);
};

function MenuNavigation(value){

    const menu = document.querySelector(".menu--navigation");
    const menuIcon = document.querySelector(".icon--menu");
    const arrMenuIconRect = document.querySelectorAll(".icon--menu rect");

    setTimeout(() => menuIcon.setAttribute("onclick", `MenuNavigation(${!value})`), 300);

    if(value){
        menu.style.transform = "translate(0px, 0px)";
        arrMenuIconRect[0].setAttribute("y", "42.5");
        arrMenuIconRect[1].setAttribute("style", "transform: scale(0);");
        arrMenuIconRect[2].setAttribute("y", "42.5");
        setTimeout(() => {
            arrMenuIconRect[0].setAttribute("style", "transform: rotate(45deg);");
            arrMenuIconRect[2].setAttribute("style", "transform: rotate(-45deg);");
        }, 300);
    }else{
        menu.style.transform = "translate(-100%, 0px)";
        arrMenuIconRect[0].setAttribute("style", "transform: rotate(0deg);");
        arrMenuIconRect[2].setAttribute("style", "transform: rotate(0deg);");
        setTimeout(() => {
            arrMenuIconRect[0].setAttribute("y", "0");
            arrMenuIconRect[1].setAttribute("style", "transform: scale(1);");
            arrMenuIconRect[2].setAttribute("y", "85");
        }, 300);
    };
};