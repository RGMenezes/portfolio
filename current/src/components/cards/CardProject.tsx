import Image from "next/image";
import A from "../base/A";
import Text from "../base/Text";
import styles from "./CardProject.module.css";
import IProject from "@/data/projects/iProjects";

export default function CardProject({ project }: { project: IProject }) {
  return (
    <article className={styles.card}>
      <Image src={project.image} alt={project.id + " illustration image"} className={styles.image} />
      <div className={styles.header}>
        <Text variant="h4" className={styles.title}>{project.title}</Text>
        <div className={styles.technologiesIcons}>
          {project.technologies.map((TechIcon, index) => (
            <TechIcon key={project.id + "_icon_" + index} className={styles.techIcon} />
          ))}
        </div>
      </div>
      <Text variant="p2" className={styles.description}>{project.description}</Text>
      <div className={styles.actions}>
        {project.repoLink && <A className={styles.action} variant="buttonSecondary" href={project.repoLink} target="_blank" rel="external">Repositório</A>}
        {project.link && <A className={styles.action} variant="buttonPrimary" href={project.link} target="_blank" rel="external">Ver Projeto</A>}
      </div>
    </article>
  );
}