import { IconType } from "react-icons";
import styles from "./Tag.module.css";
import Text from "./Text";

export default function Tag({ children, Icon }: { children: React.ReactNode, Icon ?: IconType }) {
  return (
    <div className={styles.tag}>
      {Icon && <Icon className={styles.icon} />}
      <Text variant="p3">{children}</Text>
    </div>
  );
}