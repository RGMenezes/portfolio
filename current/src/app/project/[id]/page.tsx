import Image from "next/image";
import { BsArrowLeftCircle } from "react-icons/bs";
import styles from "./page.module.css";
import A from "@/components/base/A";
import Link from "@/components/base/Link";
import Tag from "@/components/base/Tag";
import Text from "@/components/base/Text";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";
import IProject from "@/data/projects/iProjects";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let project: IProject;
  try {
    const projectData = await import(`@/data/projects/${id}`);
    project = projectData.default;
  } catch (error) {
    console.error("Erro ao carregar os dados do projeto:", error);

    return (
      <>
        <Header />
        <Section>
          <Text variant="h1">Projeto Não Encontrado</Text>
          <Text variant="p1">Desculpe, não conseguimos encontrar o projeto solicitado.</Text>
        </Section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <Section className={styles.projectContainer}>
        {project.status !== "Concluído" && (
          <Tag>{project.status}</Tag>
        )}

        <Image src={project.image} alt={project.id + " illustration image"} className={styles.image} />

        <div className={styles.header}>
          <Text variant="h1" className={styles.title}>{project.title}</Text>
          <div className={styles.technologiesIcons}>
            {project.technologies.map((TechIcon, index) => (
              <TechIcon key={project.id + "_icon_" + index} className={styles.techIcon} />
            ))}
          </div>
        </div>

        <Text variant="md">{project.description}</Text>

        <div className={styles.actions}>
          {project.repoLink && <A className={styles.action} variant="buttonSecondary" href={project.repoLink} target="_blank" rel="external">Repositório</A>}
          {project.link && <A className={styles.action} variant="buttonPrimary" href={project.link} target="_blank" rel="external">Ver Projeto</A>}
          {project.download && <A 
            className={styles.action} 
            variant="buttonPrimary" 
            download={project.download.name}  
            href={project.download.path} 
          > Download </A>}
        </div>

        <div className={styles.backLink}>
          <Link variant="icon" href="/#projects" detached Icon={BsArrowLeftCircle} />
        </div>

      </Section>

      <Footer />
    </>
  );
}