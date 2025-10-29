"use client";

import { useEffect, useState } from "react";
import { BiExitFullscreen, BiMenu } from "react-icons/bi";
import Button from "../base/Button";
import { RmLogo } from "../icons";
import NavPage from "../interaction/NavPage";
import TypingMessage from "../interaction/TypingMessage";
import styles from "./Header.module.css";

export default function Header() {
    const [visibility, setVisibility] = useState(false);
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < 768 : false
    );
    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <header className={`${styles.container} ${visibility ? styles.containerOpenMenu : ""}`}>
                <RmLogo className={styles.logo}/>
                <TypingMessage data={["PV 6:9-11", "JO 3:16", "MT 6:6"]}/>
                {isMobile ?
                    <>
                        <div className={styles.menu}>
                            <Button onClick={() => setVisibility(!visibility)} variant="icon" Icon={visibility ?  BiExitFullscreen : BiMenu} />
                        </div>
                        
                        <div className={styles.menuNav}>
                            <NavPage curriculum/>
                        </div>
                    </>
                    :
                    <div className={styles.menu}>
                        <NavPage row curriculum/>
                    </div>
                }
            </header>
            <div className={styles.fill}/>
        </div>
    );
}