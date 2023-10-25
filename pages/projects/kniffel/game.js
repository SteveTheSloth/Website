import Head from "next/head";
import { useState } from "react";

import utilStyles from "../../../styles/utils.module.css";

import Layout from "../../../components/layout";
import PlayerScreen from "../../../kniffel_modules/playerscreen";
import Scoresheet from "../../../kniffel_modules/scoresheet";
import Options from "../../../kniffel_modules/options";
import Players from "../../../kniffel_modules/players";
import DiceGrid from "../../../kniffel_modules/dicegrid";
import Endscreen from "../../../kniffel_modules/endscreen";

/**
 * Display main Game element. Implement a playable version of the game Kniffel on the website. This element utilises react hooks to store evolving game information.
 * Show different screens according to the game state.
 */
export default function Game() {
  const [dice, setDice] = useState({});
  const [isRunning, setIsRunning] = useState(false);
  const [players, setPlayers] = useState({});
  const [scoresheet, setScoresheet] = useState({});
  const [sheets, setSheets] = useState({});
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);
  const [isKept, setIsKept] = useState([]);
  const [rollCount, setRollCount] = useState(0);
  const [options, setOptions] = useState([]);
  const [isCross, setIsCross] = useState(false);
  const [takeText, setTakeText] = useState("Take");
  const [points, setPoints] = useState([]);
  const [isOver, setIsOver] = useState(false);

  /**
   * Return fields that have not yet been filled in as an array with elements [fieldName, null].
   */
  function openFields(sheet) {
    const fields = Object.entries(sheet);
    const nullFields = fields.filter((field) => field[1] === null);
    return nullFields;
  }

  /**
   * Take roll array of dice values as an argument to check which fields can be scored with a particular roll. Return array with elements [fieldName, score].
   */
  function scoreOptions(roll, sheet) {
    const fields = openFields(sheet);
    const fieldNames = fields.map((field) => field[0]);
    const numFields = [
      ["ones", 1],
      ["twos", 2],
      ["threes", 3],
      ["fours", 4],
      ["fives", 5],
      ["sixes", 6],
    ];
    const ofAKindFields = [
      ["threeOfAKind", 3],
      ["fourOfAKind", 4],
    ];
    const streetFields = [
      ["smallStreet", 4],
      ["bigStreet", 5],
    ];
    var scoreOptions = [];
    numFields.forEach((numField) => {
      if (fieldNames.includes(numField[0])) {
        scoreOptions.push([numField[0], numScore(roll, numField[1])]);
      }
    });

    ofAKindFields.forEach((ofAKindField) => {
      if (fieldNames.includes(ofAKindField[0])) {
        scoreOptions.push([
          ofAKindField[0],
          ofAKindScore(roll, ofAKindField[1]),
        ]);
      }
    });

    if (fieldNames.includes("fullHouse")) {
      scoreOptions.push(["fullHouse", fullHouseScore(roll)]);
    }

    streetFields.forEach((streetField) => {
      if (fieldNames.includes(streetField[0])) {
        scoreOptions.push([streetField[0], streetScore(roll, streetField[1])]);
      }
    });

    if (fieldNames.includes("kniffel")) {
      scoreOptions.push(["kniffel", kniffelScore(roll)]);
    }

    if (fieldNames.includes("chance")) {
      scoreOptions.push(["chance", chanceScore(roll)]);
    }

    scoreOptions = scoreOptions.filter((scoreOption) => scoreOption[1] != null);
    return scoreOptions;
  }

  /**
   * Take roll array of dice values and integer num to check for as argument, return the sum of num values contained in roll. Return null if value isn't contained in roll.
   */
  function numScore(roll, num) {
    var sum = 0;
    var nums = roll.filter((die) => die === num);
    nums.forEach((die) => {
      sum += die;
    });
    if (sum === 0) {
      return null;
    } else {
      return sum;
    }
  }

  /**
   * Take roll array of dice values and integer len (3 or 4) as argument and return the sum of the roll if any dice value occurs len times in the roll. Else return null.
   */
  function ofAKindScore(roll, len) {
    var sum = 0;
    for (var i = 1; i < 7; i++) {
      if (roll.filter((die) => die === i).length >= len) {
        roll.forEach((die) => {
          sum += die;
        });
        return sum;
      }
    }
    return null;
  }

  /**
   * Take roll array of dice values as argument and return 25 if a full house (2 of a kind & 3 of a kind) are contained in the roll. Else return null.
   */
  function fullHouseScore(roll) {
    const sortRoll = roll.sort(function (a, b) {
      return a - b;
    });
    const lowCount = sortRoll.filter((die) => die === sortRoll[0]).length;
    const highCount = sortRoll.filter((die) => die === sortRoll[4]).length;
    if (lowCount >= 2 && highCount >= 2 && lowCount + highCount === 5) {
      return 25;
    } else if (lowCount === 5) {
      return 25;
    } else {
      return null;
    }
  }

  /**
   * Take roll array of dice values and integer len (4 or 5) as argument and return 10*(len-1) if len consecutive dice values are contained in roll. Else return null.
   */
  function streetScore(roll, len) {
    const sortRoll = roll.sort(function (a, b) {
      return a - b;
    });
    const unique = [...new Set(sortRoll)];
    var count = 0;
    for (let i = unique[0]; i <= unique[len - 1]; i++) {
      count++;
      if (!unique.includes(i)) {
        break;
      } else if (i === unique[len - 1] && count === len) {
        return 10 * (len - 1);
      }
    }
    var count = 0;
    if (len === 4) {
      for (let i = unique[1]; i <= unique[4]; i++) {
        count++;
        if (!unique.includes(i)) {
          return null;
        } else if (i === unique[4] && count === len) {
          return 10 * (len - 1);
        }
      }
    }
    return null;
  }

  /**
   * Take roll array of dice values as argument and return 50 if a 5 of a kind are contained in the roll. Else return null.
   */
  function kniffelScore(roll) {
    const unique = [...new Set(roll)];
    if (unique.length === 1) {
      return 50;
    } else {
      return null;
    }
  }

  /**
   * Take roll array of dice values as argument and return sum of dice values.
   */
  function chanceScore(roll) {
    var sum = 0;
    roll.forEach((die) => {
      sum += die;
    });
    return sum;
  }

  /**
   * Take scoresheet object as argument and return sum of values for top section.
   */
  function totalTop(sheet) {
    var top = 0;
    const topvals = ["ones", "twos", "threes", "fours", "fives", "sixes"];
    topvals.forEach((i) => {
      top += sheet[i] === "X" ? 0 : sheet[i];
    });
    return top;
  }

  /**
   * Take scoresheet object as argument and return sum of values for bottom section.
   */
  function totalBottom(sheet) {
    var bottom = 0;
    const bottomvals = [
      "threeOfAKind",
      "fourOfAKind",
      "fullHouse",
      "smallStreet",
      "bigStreet",
      "kniffel",
      "chance",
    ];
    bottomvals.forEach((i) => {
      bottom += sheet[i] === "X" ? 0 : sheet[i];
    });
    console.log(bottom);
    return bottom;
  }

  /**
   * Perform a roll of all dice if active player has not already rolled 3 times. Exclude dice that have kept status active from roll. Update states according to roll result.
   */
  function roll() {
    const newvalues = {};
    if (rollCount >= 3) {
      return;
    } else {
      for (let i = 0; i < 5; i++) {
        if (!isKept.includes(i)) {
          newvalues[i] = Math.floor(Math.random() * 6) + 1;
        } else {
          newvalues[i] = dice[i];
        }
      }
    }
    setRollCount(rollCount + 1);
    move();
    setDice(newvalues);
    setIsCross(false);
    setTakeText("Take");
    setOptions(scoreOptions(Object.values(newvalues), scoresheet));
  }

  function move() {
    const dice = document.querySelectorAll(".utils_dice__wcY4g");

    dice.forEach((die) => (die.className = utilStyles.dice));
    requestAnimationFrame((time) => {
      requestAnimationFrame((time) => {
        dice.forEach(
          (die) => (die.className = utilStyles.dice + " " + utilStyles.rollDice)
        );
      });
    });
  }

  function resetClassName() {
    const dice = document.querySelectorAll(".utils_rollDice__vYupq");
    dice.forEach((die) => (die.className = utilStyles.dice));
  }

  /**
   * Take index of a die and add or remove that index from the isKept state. Change className for dice element to represent its state.
   */
  function keep(index) {
    if (isKept.includes(index)) {
      setIsKept(isKept.filter((die) => die != index));
      document.getElementById("dice_" + index).className = utilStyles.dice;
    } else {
      setIsKept([...isKept, index]);
      document.getElementById("dice_" + index).className = utilStyles.keptDice;
    }
  }

  /**
   * Get open fields in the active scoresheet and set the options state to represent open fields with the value X to cross off.
   */
  function crossOptions() {
    const val = isCross;
    setIsCross(!isCross);
    if (!val) {
      setTakeText("X");
      const opn = openFields(scoresheet).map((field) => {
        field[1] = "X";
        return field;
      });

      setOptions(opn);
    } else {
      setTakeText("Take");
      setOptions(scoreOptions(Object.values(dice), scoresheet));
    }
  }

  /**
   * Take one field Name and value as arguments and pass on to updateSheets function to include that value for the active player. Then reset turn.
   */
  function take(fieldName, value) {
    updateSheets(fieldName, value);
    resetTurn();
  }

  /**
   * Take one field Name and value as arguments and update active player's scoresheet to include that value. Calculate modified top, boonus, and total values. Update sheets to include the updated scoresheet.
   */
  function updateSheets(field, value) {
    const activePlayer = Object.values(players)[activePlayerIndex];
    var activeSheet = sheets[activePlayer];
    activeSheet[field] = value;
    activeSheet["top"] = totalTop(activeSheet);
    activeSheet["bonus"] = activeSheet["top"] >= 63 ? 35 : 0;
    activeSheet["total"] =
      activeSheet["top"] + totalBottom(activeSheet) + activeSheet["bonus"];
    console.log(activeSheet["top"], activeSheet["total"], activeSheet["bonus"]);
    var newSheets = { ...sheets, [activePlayer]: activeSheet };
    setSheets(newSheets);
  }

  /**
   * Change activePlayerIndex to next player's index.
   */
  function nextPlayer() {
    if (activePlayerIndex >= Object.keys(players).length - 1) {
      setActivePlayerIndex(0);
      return 0;
    } else {
      setActivePlayerIndex(activePlayerIndex + 1);
      return activePlayerIndex + 1;
    }
  }

  /**
   * Reset the turn. If the next player has no more open fields, end the game. Else set state to initial values for next player.
   */
  function resetTurn() {
    const activePlayer = Object.values(players)[nextPlayer()];
    if (openFields(sheets[activePlayer]).length === 0) {
      const scores = [];
      Object.values(players).forEach((player) => {
        scores.push(sheets[player]["total"]);
      });
      setPoints(scores);
      setIsRunning(false);
      setIsOver(true);
    } else {
      setDice({});
      setRollCount(0);
      setTakeText("Take");
      setIsCross(false);
      setIsKept([]);
      setOptions([]);
      setScoresheet(sheets[activePlayer]);
    }
  }

  /**
   * Take data object as argument and update game states to represent user input from setup screen.
   */
  function pullData(data) {
    setIsRunning(true);
    setPlayers(data.players);
    setSheets(data.sheets);
    setScoresheet(data.scoresheet);
  }

  /**
   * Reset scoresheets to null values and reset all game states to be replayed from the start with the current players.
   */
  function replay() {
    var newSheet = {};
    Object.keys(scoresheet).forEach((fieldName) => {
      console.log(fieldName);
      if (["bonus", "top", "total"].includes(fieldName)) {
        newSheet[fieldName] = 0;
      } else {
        newSheet[fieldName] = null;
      }
    });
    var playerSheets = {};
    Object.values(players).forEach((player) => {
      playerSheets = { ...playerSheets, [player]: { ...newSheet } };
    });
    setActivePlayerIndex(0);
    setScoresheet({ ...newSheet });
    setSheets(playerSheets);
    setDice({});
    setRollCount(0);
    setTakeText("Take");
    setIsCross(false);
    setIsKept([]);
    setOptions([]);
    setIsOver(false);
    setIsRunning(true);
  }

  /**
   * Reset all game states to be replayed with different players. Show initial setup screen again to enter new player names.
   */
  function setup() {
    setDice({});
    setRollCount(0);
    setTakeText("Take");
    setIsKept([]);
    setOptions([]);
    setActivePlayerIndex(0);
    setIsCross(false);
    setIsOver(false);
    setIsRunning(false);
  }

  return (
    <Layout>
      <Head>Play Kniffel</Head>
      <div>
        <div className={utilStyles.topMargin}></div>
        <h1 className={utilStyles.heading2Xl}>KNIFFEL</h1>
      </div>
      {isRunning ? (
        <>
          <Players players={players} activePlayerIndex={activePlayerIndex} />
          <DiceGrid dice={dice} func={keep} />
          <div className={utilStyles.buttons}>
            <button onClick={roll} className={utilStyles.button}>
              Roll {rollCount > 0 ? rollCount : null}
            </button>
            <button onClick={crossOptions} className={utilStyles.button}>
              Show {isCross ? "Take" : "Cross"} Options
            </button>
          </div>
          <div className={utilStyles.scoreOptionGrid}>
            <Scoresheet scoresheet={scoresheet} />
            <Options options={options} takeText={takeText} func={take} />
          </div>
        </>
      ) : isOver ? (
        <Endscreen
          players={Object.values(players)}
          points={points}
          scoresheets={sheets}
          replay={replay}
          setup={setup}
        />
      ) : (
        <PlayerScreen func={pullData} />
      )}
    </Layout>
  );
}
