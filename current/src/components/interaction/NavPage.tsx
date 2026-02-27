import { FaRegFilePdf } from "react-icons/fa";
import A from "../base/A";
import styles from "./NavPage.module.css";

export default function NavPage({ row, curriculum, home }: { row?: boolean, curriculum?: boolean, home?: boolean }) {
  const path = home ? "" : "/";
  return (
    <nav>
      <ul className={`${styles.list} ${row && styles.row}`}>

        <li>
          <A href={path + "#"}>Início</A>
        </li>
        <li>
          <A href={path + "#projects"}>Projetos</A>
        </li>
        <li>
          <A href={path + "#aboutMe"}>Sobre Mim</A>
        </li>
        <li>
          <A href={path + "#contacts"}>Contatos</A>
        </li>
        <li>
          <A href={path + "#feedbacks"}>Feedbacks</A>
        </li>
          
        {curriculum && <li>
          <A 
            variant="buttonSecondary" 
            download="curriculum (Rafael da Gloria Menezes).pdf"
            href="/files/curriculum-rafael-da-gloria-menezes.pdf" 
            Icon={FaRegFilePdf}>Currículo
          </A>
        </li>}
      </ul>
    </nav>
  );
}
