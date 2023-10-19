import { useState } from "react";

import utilStyles from "../styles/utils.module.css";

import SubParagraph from "../components/subParagraph";

/**
 * Display PlayerScreen element to input player names. Return Object containing names and starting scoresheets for each player to parent element with passData function after checking for empty string and length of input.
 */
export default function PlayerScreen(props) {
  const passData = props.func;

  const defaultScores = {
    ones: null,
    twos: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null,
    bonus: 0,
    top: 0,
    threeOfAKind: null,
    fourOfAKind: null,
    fullHouse: null,
    smallStreet: null,
    bigStreet: null,
    kniffel: null,
    chance: null,
    total: 0,
  };

  const [players, setPlayers] = useState({});

  /**
   * Handle input events.
   */
  function handleChange(event) {
    const num = parseInt(event.target.name);
    const player = event.target.value;
    if (player.trim().length > 0) {
      setPlayers({ ...players, [num]: player });
    }
  }

  /**
   * Handle submit events. Check for empty input and return player names and scoresheets to parent element.
   */
  function handleSubmit(event) {
    event.preventDefault();
    var finalPlayers = {};

    Object.values(players).map((player, index) => {
      finalPlayers[index] = player;
    });
    setPlayers(finalPlayers);

    if (Object.values(finalPlayers).length === 0) {
      return;
    }

    var playerSheets = {};
    Object.values(finalPlayers).forEach((value) => {
      playerSheets = {
        ...playerSheets,
        [value]: { ...defaultScores },
      };
    });
    passData({
      players: finalPlayers,
      sheets: playerSheets,
      scoresheet: defaultScores,
    });
  }

  return (
    <div>
      <h3 className={utilStyles.heading}>Input Player Names</h3>
      <form className={utilStyles.inputGrid} onSubmit={handleSubmit}>
        <input
          className={utilStyles.inputField}
          onChange={handleChange}
          name="0"
          placeholder="Player 1"
          type="text"
          minLength={1}
          maxLength={20}
        />
        <input
          className={utilStyles.inputField}
          onChange={handleChange}
          name="1"
          placeholder="Player 2"
          type="text"
          minLength={1}
          maxLength={20}
        />
        <input
          className={utilStyles.inputField}
          onChange={handleChange}
          name="2"
          placeholder="Player 3"
          type="text"
          minLength={1}
          maxLength={20}
        />
        <input
          className={utilStyles.inputField}
          onChange={handleChange}
          name="3"
          placeholder="Player 4"
          type="text"
          minLength={1}
          maxLength={20}
        />
        <input
          className={utilStyles.inputField}
          onChange={handleChange}
          name="4"
          placeholder="Player 5"
          type="text"
          minLength={1}
          maxLength={20}
        />
        <input
          className={utilStyles.inputField}
          onChange={handleChange}
          name="5"
          placeholder="Player 6"
          type="text"
          minLength={1}
          maxLength={20}
        />
        <input
          className={utilStyles.gridButton}
          type="submit"
          value="Start Game"
        />
      </form>
      <SubParagraph
        heading="Game Rules"
        text="Try to score as many points as possible by filling in your scoresheet. You can only complete each field of your scoresheet once.
                At the end of the game you will have played 13 rounds and filled in your entire scoresheet (the fields 'Bonus', 'Total Top', and 'Total' are calculated automatically and can't 
                be filled in by the player). If your roll doesn't fit any of your open fields (or you don't want to take it), you choose one field to cross off. You get to roll your dice 3 times 
                per round. To keep dice that you don't want to reroll, simply click on the die."
      />
      <SubParagraph
        heading="Scoring"
        text="Top section: only multiples of the given number are added up. Get at least 63 points (equal to 3 of each dice value) to receive a bonus of 35 points."
      />
      <SubParagraph text="Three of a Kind and Four of a Kind: roll includes at least 3/4 dice of the same value. Entire roll is added up." />
      <SubParagraph text="Full House: roll includes 3 dice of the same value and 2 dice of the same value. 5 identical values count as a Full House." />
      <SubParagraph text="Small Street and Big Street: roll contains 4/5 consecutive values." />
      <SubParagraph text="Kniffel: 5 dice of the same value" />
      <SubParagraph text="Chance: entire roll is added up without restrictions." />
    </div>
  );
}
