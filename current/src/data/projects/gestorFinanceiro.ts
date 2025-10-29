import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import IProject from "./iProjects";
import image from "@pub/images/IllustrationGestorFinanceiro.png";

const gestorFinanceiro: IProject = {
  id: "gestor-financeiro",
  title: "Gestor Financeiro",
  description: "O Gestor Financeiro é um site intuitivo e responsivo que ajuda você a monitorar, controlar e planejar suas finanças pessoais de maneira eficiente.",
  image,
  technologies: [BiLogoTypescript, RiNextjsLine, BiLogoMongodb],
  link: "https://gestorfinanceirotart.vercel.app/",
  repoLink: "https://github.com/RGMenezes/gestor_financeiro",
};

export default gestorFinanceiro;