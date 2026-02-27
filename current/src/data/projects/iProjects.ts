import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

interface IProject {
    id: string;
    title: string;
    description: string;
    summary: string;
    image: StaticImageData;
    technologies: IconType[];
    repoLink?: string;
    link?: string;
    download?: {
        path: string;
        name: string;
    };
    status?: "Em Desenvolvimento" | "Concluído" | "Planejado";
}

export default IProject;