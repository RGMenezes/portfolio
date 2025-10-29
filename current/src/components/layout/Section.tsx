import styles from "./Section.module.css";

export default function Section({ children, className, id }: { children?: React.ReactNode, className?: string, id?: string }) {
    return <section className={`${styles.section} ${className}`} id={id}>{children}</section>;
}