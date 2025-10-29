import { IconType } from "react-icons";
import styles from "./Button.module.css";

type ButtonVariant = "buttonPrimary" | "buttonSecondary" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children ?: React.ReactNode;
    variant ?: ButtonVariant;
    Icon ?: IconType;
    iconPosition ?: "left" | "right";
    detached ?: boolean;
    size?: "small" | "medium" | "large";
};

export default function Button({ children, className = "", variant = "buttonPrimary", Icon, iconPosition = "right", detached, size = "small", tabIndex, ...props }: ButtonProps) {
  const iconSizeMap = {
    small: 16,
    medium: 24,
    large: 32
  };
  const iconSize = iconSizeMap[variant === "icon" ? "large" : size];
  return (
    <button 
      tabIndex={tabIndex ?? 0}
      className={`${styles.clear} ${styles[variant]} ${detached && styles.detached} ${className}`} 
      type="button" 
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon size={iconSize}/>}
      {variant !== "icon" && children}
      {Icon && iconPosition === "right" && <Icon size={iconSize}/>}
    </button>
  );
}