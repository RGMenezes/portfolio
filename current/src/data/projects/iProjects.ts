import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

interface IProject {
    id: string;
    title: string;
    description: string;
    image: StaticImageData;
    technologies: IconType[];
    repoLink?: string;
    link?: string;
}

export default IProject;