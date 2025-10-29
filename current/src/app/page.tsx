import styles from "./page.module.css";
import A from "@/components/base/A";
import Text from "@/components/base/Text";
import CardProject from "@/components/cards/CardProject";
import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";
import trainingTimer from "@/data/projects/trainingTimer";
import ImageIllustrationCuate from "@pub/images/cuate1Illustration.svg";

export default function Home() {
    return (
        <>
            <Header />
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
            <Section id="projects">
                <Text variant="h2">Projetos</Text>
                <div>
                    <CardProject project={trainingTimer} />
                </div>
            </Section>
        </>
    );
}
