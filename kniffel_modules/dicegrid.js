import utilStyles from "../styles/utils.module.css";

import Dice from "../components/kniffel/dice";

/**
 * Display DiceGrid element. Take dice values, indices of kept dice and function to add/remove individual die index from kept indices. Display each dice value as Dice element and change class name according to kept indices.
 */
export default function DiceGrid(props) {
  const { dice, isKept, func } = props;
  return (
    <div className={utilStyles.diceGrid}>
      {Object.values(dice).map((val, index) => (
        <div
          key={"d_" + index}
          className={
            isKept.includes(index) ? utilStyles.keptDice : utilStyles.dice
          }
          onClick={() => func(index)}
        >
          <Dice value={val} key={"d_" + index} />
        </div>
      ))}
    </div>
  );
}
