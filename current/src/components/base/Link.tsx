import NextLink from "next/link";
import { LinkHTMLAttributes } from "react";
import { IconType } from "react-icons";
import styles from "./A.module.css";

interface LinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    children ?: React.ReactNode;
    variant ?: "text" | "buttonPrimary" | "buttonSecondary" | "icon" | "author";
    Icon ?: IconType;
    iconPosition ?: "left" | "right";
    detached ?: boolean;
    size?: "small" | "medium" | "large";
    href: string;
};

export default function Link({ children, className = "", variant = "text", Icon, iconPosition = "right", detached, size = "small", tabIndex, href, ...props }: LinkProps) {
  const iconSizeMap = {
    small: 16,
    medium: 24,
    large: 32
  };
  const iconSize = iconSizeMap[variant === "icon" ? "large" : size];

  return (
    <NextLink href={href} tabIndex={tabIndex ?? 0} className={`${styles.clear} ${styles[variant]} ${detached && styles.detached} ${className}`} {...props}>
      {Icon && iconPosition === "left" && <Icon size={iconSize}/>}
      {variant !== "icon" && children}
      {Icon && iconPosition === "right" && <Icon size={iconSize}/>}
    </NextLink>
  );
}