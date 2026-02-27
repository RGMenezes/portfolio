import ReactMarkdown from "react-markdown";
import styles from "./Text.module.css";

interface TextProps {
    variant?: "h1" | "h2" | "h3" | "h4" | "p1" | "p2" | "p3" | "md";
    children?: React.ReactNode;
    className?: string;
    key?: string | number;
    name?: string;
    id?: string;

}

export default function Text({ children, className = "", variant = "p1", ...props }: TextProps) {
  switch (variant) {
  case "h1":
    return <h1 className={`${styles.h1} ${className}`} {...props}>{children}</h1>;
  case "h2":
    return <h2 className={`${styles.h2} ${className}`} {...props}>{children}</h2>;
  case "h3":
    return <h3 className={`${styles.h3} ${className}`} {...props}>{children}</h3>;
  case "h4":
    return <h4 className={`${styles.h4} ${className}`} {...props}>{children}</h4>;
  case "md": 
    return <div className={`${styles.md} ${className}`} {...props}>
      <ReactMarkdown>{typeof children === "string" ? children : String(children)}</ReactMarkdown> 
    </div>;
  default:
    return <p className={`${styles[variant]} ${className}`} {...props}>{children}</p>;
  }
};

