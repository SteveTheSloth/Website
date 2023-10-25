import utilStyles from "../styles/utils.module.css";

/**
 * Display Scoresheet element. Convert original keys to more readable field names. Change scorefield classes according to endscreen and value.
 */
export default function Scoresheet(props) {
  const scoresheet = props.scoresheet;
  const endsheet = props.endsheet;

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

  function lowerFirstLetter(string) {
    var words = string.split(" ");
    words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    words[0] = words[0].toLowerCase();

    return "".concat(...words);
  }

  return (
    <>
      <div className={props.className ?? utilStyles.scoreGrid}>
        {Object.entries(displaysheet).map(([fieldName, value]) => (
          <>
            <li
              className={
                endsheet
                  ? utilStyles.scoreField
                  : value === null
                  ? utilStyles.scoreField
                  : utilStyles.greyScoreField
              }
              key={"score_" + fieldName}
              id={"score_" + lowerFirstLetter(fieldName)}
            >
              {" "}
              {fieldName}
            </li>
            <li
              className={
                endsheet
                  ? utilStyles.scoreField
                  : value === null
                  ? utilStyles.scoreField
                  : utilStyles.greyScoreField
              }
              key={"scoreVal_" + fieldName}
              id={"score_Val_" + lowerFirstLetter(fieldName)}
            >
              {" "}
              {value ?? "open"}
            </li>
          </>
        ))}
      </div>
    </>
  );
}
