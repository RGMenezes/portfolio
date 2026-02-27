import { BiTargetLock } from "react-icons/bi";
import styles from "./page.module.css";
import A from "@/components/base/A";
import Tag from "@/components/base/Tag";
import Text from "@/components/base/Text";
import CardFeedback from "@/components/cards/CardFeedback";
import CardProject from "@/components/cards/CardProject";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";
import feedback99Client from "@/data/feedbacks/feedback99Client";
import feedbackAsafe from "@/data/feedbacks/feedbackAsafe";
import gestorFinanceiro from "@/data/projects/gestorFinanceiro";
import trainingTimer from "@/data/projects/trainingTimer";
import social from "@/data/social";
import ImageIllustrationCuate from "@pub/images/cuate1Illustration.svg";
import ImageIllustrationProfile from "@pub/images/profileIllustration.svg";

export default function Home() {
  return (
    <>
      <Header home />
      <Section className={styles.hero}>
        <Text variant="h1">Olá, bem-vindo!</Text>
        <Text variant="p2">Sou Rafael, dev full-stack. Aqui você vai ver alguns sites e apps que fiz e como foram elaborados.</Text>
        <div className={styles.heroActions}>
          <A variant="buttonSecondary" href="#contacts">Contato</A>
          <A variant="buttonPrimary" href="#projects">Projetos</A>
        </div>
        <div className={styles.illustrationContainer}>
          <ImageIllustrationCuate className={styles.illustration}/>
          <A variant="author" target="_blank" rel="external" href="https://storyset.com/online">Online illustrations by Storyset</A>
        </div>
      </Section>

      <main>
        <Section id="projects">
          <Text variant="h2">Projetos</Text>

          <div className={styles.grid}>
            <CardProject project={trainingTimer} />
            <CardProject project={gestorFinanceiro} />
          </div>
        </Section>
                
        <Section id="aboutMe" className={styles.aboutMeSection}>
          <Text variant="h2">Sobre Mim</Text>

          <article className={styles.aboutMeArticle}>
            <div className={styles.aboutMeContent}>
              <ImageIllustrationProfile className={styles.illustration}/>
              <Tag Icon={BiTargetLock}>Aberto a oportunidades!</Tag>
            </div>
            <div id="contacts"  className={styles.aboutMeContent}>
              <Text variant="p1">Estudante de Sistemas de Informação no <A detached href="https://portal1.iff.edu.br/" target="_blank" rel="external">IFF</A> e desenvolvedor com experiência em projetos e <A detached href={social._99freelas.url} target="_blank" rel="external">freelas</A>. Focado em criar aplicações práticas, bem estruturadas e com código limpo, usando React, TypeScript e MongoDB.</Text>
              <div className={styles.actions}>
                <A variant="buttonSecondary" target="_blank" rel="external" href={social.whatsapp.url} Icon={social.whatsapp.icon}>{social.whatsapp.name}</A>
                <A variant="buttonSecondary" target="_blank" rel="external" href={social.email.url} Icon={social.email.icon}>{social.email.name}</A>
                <A variant="buttonSecondary" target="_blank" rel="external" href={social.github.url} Icon={social.github.icon}>{social.github.name}</A>
                <A variant="buttonSecondary" target="_blank" rel="external" href={social.linkedin.url} Icon={social.linkedin.icon}>{social.linkedin.name}</A>
              </div>
            </div>
          </article>
        </Section>

        <Section id="feedbacks" className={styles.feedbackSection}>
          <Text variant="h3">Feedbacks</Text>
          <div className={styles.grid}>
            <CardFeedback feedback={feedbackAsafe} />
            <CardFeedback feedback={feedback99Client} />
          </div>
        </Section>
      </main>

      <Footer home />
    </>
  );
}
