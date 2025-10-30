import { FaRegFilePdf } from "react-icons/fa";
import A from "../base/A";
import styles from "./NavPage.module.css";

export default function NavPage({ row, curriculum }: { row?: boolean, curriculum?: boolean }) {
  return (
    <nav>
      <ul className={`${styles.list} ${row && styles.row}`}>
        <li>
          <A href="#">Início</A>
        </li>
        <li>
          <A href="#projects">Projetos</A>
        </li>
        <li>
          <A href="#aboutMe">Sobre Mim</A>
        </li>
        <li>
          <A href="#contacts">Contatos</A>
        </li>
        <li>
          <A href="#feedbacks">Feedbacks</A>
        </li>
        {curriculum && <li>
          <A variant="buttonSecondary" download="Curriculo-Rafael-da-Gloria-Menezes" href="/files/curriculum.pdf" Icon={FaRegFilePdf}>Currículo</A>
        </li>}
      </ul>
    </nav>
  );
}
