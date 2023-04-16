const arrSkills = document.querySelectorAll(".skill");

for(let contSkill = 0; contSkill < arrSkills.length; contSkill++){
    arrSkills[contSkill].addEventListener("mouseover", () => { showInformationMessage(true, contSkill) });
    arrSkills[contSkill].addEventListener("mouseout", () => { showInformationMessage(false, contSkill) });
    arrSkills[contSkill].addEventListener("focus", () => { showInformationMessage(true, contSkill) });
    arrSkills[contSkill].addEventListener("blur", () => { showInformationMessage(false, contSkill) });
};



function showInformationMessage(value, element){
    const blockMessage = document.querySelector(".information-message");
    const h1 = document.querySelector(".information-message .h1");
    const p = document.querySelector(".information-message .p");

    if(value) blockMessage.classList.add("information-message--on");
    else blockMessage.classList.remove("information-message--on")
    
    switch(element){
        case 0:
            h1.innerHTML = "HTML";
            p.innerHTML = "HTML é a linguagem de marcação usada para criar páginas web. É composta por uma série de elementos, tags e atributos que definem a estrutura, o conteúdo e o estilo das páginas. É a base da maioria dos sites e é interpretada pelos navegadores para exibir o conteúdo da web.";
        break
        case 1:
            h1.innerHTML = "CSS";
            p.innerHTML = "CSS é uma linguagem de estilo usada para controlar a apresentação visual de páginas da web em HTML. Permite definir cores, fontes, espaçamento, layout e outros aspectos visuais das páginas. É interpretada pelos navegadores juntamente com o HTML para renderizar as páginas da web com estilo e design.";
        break
        case 2:
            h1.innerHTML = "JavaScript";
            p.innerHTML = "JavaScript é uma linguagem de programação usada para adicionar interatividade e dinamismo a páginas da web. Ela permite criar animações, manipular elementos da página, validar formulários e realizar outras ações. É interpretada pelos navegadores e pode ser executada tanto no lado do cliente (navegador) quanto no lado do servidor.";
        break
        case 3:
            h1.innerHTML = "React";
            p.innerHTML = "React é uma biblioteca JavaScript de código aberto utilizada para criar interfaces de usuário em aplicações web. Ela permite dividir a interface em componentes reutilizáveis ​​e atualizar apenas conforme as partes necessárias, melhorando o desempenho. Foi desenvolvido pelo Facebook e é amplamente utilizado por empresas para desenvolver aplicações web modernas.";
        break
        case 4:
            h1.innerHTML = "SVG";
            p.innerHTML = "SVG (Scalable Vector Graphics) é um formato de imagem vetorial baseado em XML usado para criar gráficos escaláveis ​​e animações na web. Ao contrário das imagens bitmap, os arquivos SVG são baseados em vetores, o que significa que podem ser ampliados sem perder qualidade. É suportado por todos os principais navegadores e pode ser manipulado por JavaScript e CSS.";
        break
        case 5:
            h1.innerHTML = "Figma";
            p.innerHTML = "Figma é uma plataforma de design de interface de usuário baseada em nuvem que permite colaboração em tempo real entre equipes. É usado para criar wireframes, protótipos móveis e designs finais de interfaces gráficas, tanto para aplicativos quanto para web. Possui recursos de compartilhamento, versionamento e exportação de código para facilitar o processo de desenvolvimento.";
        break
        default:
            h1.innerHTML = ":(";
            p.innerHTML = "Infelizmente o texto explicativo não foi encontrado.";
        break
    };
};