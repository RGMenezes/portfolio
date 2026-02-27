import Image from "next/image";
import { BsInfo } from "react-icons/bs";
import A from "../base/A";
import Link from "../base/Link";
import Text from "../base/Text";
import styles from "./CardProject.module.css";
import IProject from "@/data/projects/iProjects";

export default function CardProject({ project }: { project: IProject }) {
  return (
    <article className={styles.card}>

      {project.status !== "Concluído" && (
        <div className={styles.statusContainer}>
          <Text variant="p2">{project.status}</Text>
        </div>
      )}

      <Image src={project.image} alt={project.id + " illustration image"} className={styles.image} />

      <div className={styles.header}>
        <Text variant="h4" className={styles.title}>{project.title}</Text>
        <div className={styles.technologiesIcons}>
          {project.technologies.map((TechIcon, index) => (
            <TechIcon key={project.id + "_icon_" + index} className={styles.techIcon}/>
          ))}
        </div>
      </div>

      <Text variant="p2" className={styles.summary}>{project.summary}</Text>
      
      <div className={styles.actions}>
        {project.repoLink && <A className={styles.action} variant="buttonSecondary" href={project.repoLink} target="_blank" rel="external">Repositório</A>}
        <Link variant="icon" Icon={BsInfo} href={`project/${project.id}`} className={styles.category} />
        {project.link && <A className={styles.action} variant="buttonPrimary" href={project.link} target="_blank" rel="external">Ver Projeto</A>}
        {project.download && <A 
          className={styles.action} 
          variant="buttonPrimary" 
          download={project.download.name}  
          href={project.download.path} 
        > Download </A>}
      </div>
    </article>
  );
}