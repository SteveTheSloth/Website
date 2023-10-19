import Image from "next/image";

import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";

/**
 * Display MainParagraph element to display Heading and initial text element for a page. Take heading, link and text as props. If link is provided, display as Github Image.
 */
export default function MainParagraph(props) {
  return (
    <div className={styles.mainParagraph}>
      <h3 className={utilStyles.mainParagraphHeading}>{props.heading}</h3>
      {props.link ? (
        <a href={props.link} target="_blank">
          <Image
            priority
            src="/images/GitHub_Logo.png"
            height={30}
            width={75}
            alt="Github Repository Link"
          />
        </a>
      ) : null}
      <p className={utilStyles.mainParagraphText}>{props.text}</p>
    </div>
  );
}
