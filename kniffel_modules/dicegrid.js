import utilStyles from "../styles/utils.module.css";

import Dice from "../components/kniffel/dice";

/**
 * Display DiceGrid element. Take dice values and function to add/remove individual die index from kept indices on click. Display each dice value as Dice element.
 */
export default function DiceGrid(props) {
  const { dice, func } = props;
  return (
    <div className={utilStyles.diceGrid}>
      {Object.values(dice).map((val, index) => (
        <div
          id={"dice_" + index}
          key={"d_" + index}
          className={utilStyles.dice + " " + utilStyles.rollDice}
          onClick={() => func(index)}
        >
          <Dice value={val} key={"d_" + index} />
        </div>
      ))}
    </div>
  );
}
