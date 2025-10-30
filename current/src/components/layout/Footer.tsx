"use client";

import { FaRegFilePdf } from "react-icons/fa";
import A from "../base/A";
import Text from "../base/Text";
import NavPage from "../interaction/NavPage";
import styles from "./Footer.module.css";
import Section from "./Section";
import social from "@/data/social";

export default function Footer(){
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <Section>
        <Text variant="h3">RGMenezes</Text>

        <div className={styles.content}>
          <NavPage />

          <A variant="buttonSecondary" download="Curriculo-Rafael-da-Gloria-Menezes" href="/files/curriculum.pdf" Icon={FaRegFilePdf}>Currículo</A>

          <ul className={styles.iconList}>
            <li><A variant="icon" target="_blank" rel="external" href={social.whatsapp.url} Icon={social.whatsapp.icon} /></li>
            <li><A variant="icon" target="_blank" rel="external" href={social.telegram.url} Icon={social.telegram.icon} /></li>
            <li><A variant="icon" target="_blank" rel="external" href={social.instagram.url} Icon={social.instagram.icon} /></li>
            <li><A variant="icon" target="_blank" rel="external" href={social.linkedin.url} Icon={social.linkedin.icon} /></li>
            <li><A variant="icon" target="_blank" rel="external" href={social._99freelas.url} Icon={social._99freelas.icon} /></li>
            <li><A variant="icon" target="_blank" rel="external" href={social.github.url} Icon={social.github.icon} /></li>
            <li><A variant="icon" target="_blank" rel="external" href={social.tart.url} Icon={social.tart.icon} /></li>
            <li><A variant="icon" target="_blank" rel="external" href={social.email.url} Icon={social.email.icon} /></li>
          </ul>

        </div>

        <Text>© Rafael da Gloria Menezes | {date.getFullYear()}</Text>
      </Section>
    </footer>
  );
}