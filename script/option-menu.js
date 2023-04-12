function explainOption(value, option){
    let message;
    switch(option){
        case "s": option = 0; message = "Sobre"; break
        case "h": option = 1; message = "Habilidades"; break
        case "p": option = 2; message = "Projetos"; break
        default: option = 3; message = "Contato"; break
    };
    const arrOption = document.querySelectorAll(".header > .nav > .a");

    if(value) arrOption[option].innerHTML = message;
    else arrOption[option].innerHTML = message.split('')[0];
};