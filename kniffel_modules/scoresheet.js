import utilStyles from "../styles/utils.module.css";

/**
 * Display Scoresheet element. Convert original keys to more readable field names.
 */
export default function Scoresheet(props) {
  const scoresheet = props.scoresheet;

  var displaysheet = Object.keys(scoresheet).reduce(
    (sheet, key) => ({
      ...sheet,
      ...{
        [{
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
        }[key] || key]: scoresheet[key],
      },
    }),
    {}
  );

  return (
    <>
      <div className={props.className ?? utilStyles.scoreGrid}>
        {Object.entries(displaysheet).map(([fieldName, value]) => (
          <>
            <li className={utilStyles.scoreField} key={"score_" + fieldName}>
              {" "}
              {fieldName}
            </li>
            <li className={utilStyles.valueField} key={"scoreVal_" + fieldName}>
              {" "}
              {value ?? "open"}
            </li>
          </>
        ))}
      </div>
    </>
  );
}
