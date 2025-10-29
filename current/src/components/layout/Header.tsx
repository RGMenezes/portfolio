import { RmLogo } from "../icons";
import Menu from "../interaction/Menu";
import TypingMessage from "../interaction/TypingMessage";
import styles from "./Header.module.css";

export default function Header() {

    return (
        <div>
            <header className={styles.container}>
                <RmLogo className={styles.logo}/>
                <TypingMessage data={["PV 6:9-11", "JO 3:16", "MT 6:6"]}/>
                <Menu className={styles.menu}/>
            </header>
            <div className={styles.fill}/>
        </div>
    );
}