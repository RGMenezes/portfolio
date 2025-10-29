import { BiLogoPostgresql, BiLogoSpringBoot, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import IProject from "./iProjects";
import image from "@pub/images/IllustrationTrainingTimer.png";

const trainingTimer: IProject = {
    id: "training-timer",
    title: "Training Timer",
    description:
        "O Training Timer é um aplicativo intuitivo que ajuda você a gerenciar seus treinos, controlando exercícios, sets, pausas e rodadas de forma prática e eficiente.",
    image,
    technologies: [FaReact, BiLogoTypescript, RiNextjsLine, BiLogoPostgresql, BiLogoSpringBoot],
    repoLink: "https://github.com/RGMenezes/TrainingTimerAppRN",
    link: "https://tartoficial.vercel.app/projetos/trainingTimer",
};

export default trainingTimer;
