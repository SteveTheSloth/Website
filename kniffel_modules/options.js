import utilStyles from "../styles/utils.module.css";

/**
 * Display Options element. Take options, text and take function as props. Convert key for better readability.
 */
export default function Options(props) {
  const { options, takeText, func } = props;

  const displayKeys = {
    ones: "Ones",
    twos: "Twos",
    threes: "Threes",
    fours: "Fours",
    fives: "Fives",
    sixes: "Sixes",
    top: "Total Top",
    bonus: "Bonus",
    threeOfAKind: "Three of a Kind",
    fourOfAKind: "Four of a Kind",
    fullHouse: "Full House",
    smallStreet: "Small Street",
    bigStreet: "Big Street",
    kniffel: "Kniffel",
    chance: "Chance",
    total: "Total",
  };

  return (
    <div className={utilStyles.optionsGrid}>
      {options.map(([key, value]) => (
        <>
          <div className={utilStyles.scoreField} key={"option_" + key}>
            {" "}
            {displayKeys[key]}{" "}
          </div>
          <div className={utilStyles.valueField} key={"optionValue_" + key}>
            {" "}
            {value}{" "}
            <button
              className={utilStyles.takeButton}
              onClick={() => func(key, value)}
            >
              {takeText}
            </button>
          </div>
        </>
      ))}
    </div>
  );
}
