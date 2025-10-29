const arrSkills = document.querySelectorAll(".skill");

for(let contSkill = 0; contSkill < arrSkills.length; contSkill++){
    arrSkills[contSkill].addEventListener("mouseover", () => { showInformationMessage(true, contSkill) });
    arrSkills[contSkill].addEventListener("mouseout", () => { showInformationMessage(false, contSkill) });
    arrSkills[contSkill].addEventListener("focus", () => { showInformationMessage(true, contSkill) });
    arrSkills[contSkill].addEventListener("blur", () => { showInformationMessage(false, contSkill) });
};



function showInformationMessage(value, element){
    const blockMessage = document.querySelectorAll(".information-message");

    if(value) blockMessage[element].classList.add("information-message--on");
    else blockMessage[element].classList.remove("information-message--on")
    
};