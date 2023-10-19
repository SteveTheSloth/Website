import Image from "next/image";

import utilStyles from "../../styles/utils.module.css";

/**
 * Dice element to display individual dice as an Image element. Take alue as property and return Image element with respective dice value.
 */
export default function Dice(props) {
  const val = props.value;
  const imagePath = "/images/kniffel/dice_" + props.value + ".jpg";
  const name = "dice value " + props.value;
  return (
    <Image
      priority
      src={imagePath}
      className={utilStyles.dice}
      height={150}
      width={150}
      alt={name}
    />
  );
}
