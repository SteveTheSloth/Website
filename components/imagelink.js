import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import utilStyles from "../styles/utils.module.css";

/**
 * Display Imagelink element. Take link for navigation, image name to access correct path and text to display over image as props. If no text property provided, link will be displayed.
 * Implements a hover effect that changes the corresponding css class.
 */
export default function ImageLink(props) {
  const [hover, setHover] = useState(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);
  const link = "/" + props.link.toLowerCase();
  const imgPath = "/images/" + props.imgFileName;

  return (
    <Link href={link}>
      <div
        className={utilStyles.hoverContainer}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Image
          priority
          src={imgPath}
          className={hover ? utilStyles.hoverImg : utilStyles.imageLink}
          height={200}
          width={300}
          alt={props.link}
        />
        <div className={hover ? utilStyles.hoverText : utilStyles.hiddenText}>
          {props.text ?? props.link}
        </div>
      </div>
    </Link>
  );
}
