import { BiUser } from "react-icons/bi";
import { FaExternalLinkAlt, FaStar } from "react-icons/fa";
import A from "../base/A";
import Text from "../base/Text";
import styles from "./CardFeedback.module.css";
import IFeedbacks from "@/data/feedbacks/iFeedbacks";

export default function CardFeedback({ feedback }: { feedback:IFeedbacks }){
  return (
    <article className={styles.container}>
      <div className={styles.contentRow}>
        <Text variant="h4">{feedback.title}</Text>
        <A Icon={FaExternalLinkAlt} size="small" detached target="_blank" rel="external" href={feedback.link} />
      </div>
      <Text className={styles.text} variant="p3">&quot;{feedback.content}&quot;</Text>
      <div className={styles.contentRow}>
        <div className={styles.footerRow}>
          <BiUser />
          <Text variant="p2">{feedback.author}</Text>
        </div>
        <div className={styles.starsRow}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    </article>
  );
}