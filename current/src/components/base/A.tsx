import { IconType } from "react-icons";
import styles from "./A.module.css";

interface AProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children ?: React.ReactNode;
    variant ?: "text" | "buttonPrimary" | "buttonSecondary" | "icon";
    Icon ?: IconType;
    iconPosition ?: "left" | "right";
    detached ?: boolean;
    size?: "small" | "medium" | "large";
};

export default function A({ children, className = "", variant = "text", Icon, iconPosition = "right", detached, size = "small", tabIndex, ...props }: AProps) {
    const iconSizeMap = {
        small: 16,
        medium: 24,
        large: 32
    };
    const iconSize = iconSizeMap[variant === "icon" ? "large" : size];

    return (
        <a tabIndex={tabIndex ?? 0} className={`${styles.clear} ${styles[variant]} ${detached && styles.detached} ${className}`} {...props}>
            {Icon && iconPosition === "left" && <Icon size={iconSize}/>}
            {variant !== "icon" && children}
            {Icon && iconPosition === "right" && <Icon size={iconSize}/>}
        </a>
    );
}