import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";

/**
 * Display SubParagraph element to display additional paragraphs on a page. Take heading and text as props.
 */
export default function SubParagraph(props) {
  return (
    <div className={styles.subParagraph}>
      <h3 className={utilStyles.subParagraphHeading}>{props.heading}</h3>
      <p className={utilStyles.paragraphText}>{props.text}</p>
    </div>
  );
}
