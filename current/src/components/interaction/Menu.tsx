import styles from "./Menu.module.css";
import NavPage from "./NavPage";

export default function Menu({ className }: { className?: string }) {

    return (
        <div className={className}>
            <NavPage row curriculum/>
        </div>
    );
}