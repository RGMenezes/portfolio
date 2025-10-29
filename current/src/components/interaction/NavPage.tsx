import { FaRegFilePdf } from "react-icons/fa";
import A from "../base/A";
import styles from "./NavPage.module.css";

export default function NavPage({ row, curriculum }: { row?: boolean, curriculum?: boolean }) {
    return (
        <nav className={`${styles.container} ${row && styles.row}`}>
            <ul className={styles.list}>
                <li>
                    <A href="#">Início</A>
                </li>
                <li>
                    <A href="#projects">Projetos</A>
                </li>
                <li>
                    <A href="#about-me">Sobre Mim</A>
                </li>
                <li>
                    <A href="#contacts">Contatos</A>
                </li>
                <li>
                    <A href="#feedbacks">Feedbacks</A>
                </li>
                {curriculum && <li>
                    <A variant="buttonSecondary" href="#" Icon={FaRegFilePdf}>Currículo</A>
                </li>}
            </ul>
        </nav>
    );
}
