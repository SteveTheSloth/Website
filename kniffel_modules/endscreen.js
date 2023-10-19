import utilstyles from "../styles/utils.module.css";

import Scoresheet from "./scoresheet";

/**
 * Display Endscreen element with final scores. Convert props into reverse sorted arrays of format [[player name, points, scoresheet]] and display them sorted by reversed total score.
 */
export default function Endscreen(props) {
  const { players, points, scoresheets, replay, setup } = props;

  const playerPoints = players.map((player, index) => [player, points[index]]);

  playerPoints.sort((a, b) => a[1] - b[1]);
  playerPoints.reverse();
  const maxPoints = Math.max(...points);

  var winners = playerPoints.filter((player) => player[1] === maxPoints);
  var nonWinners = playerPoints.filter((player) => player[1] != maxPoints);

  winners.forEach((winner) => {
    winner[2] = scoresheets[winner[0]];
  });

  nonWinners.forEach((nonWinner) => {
    nonWinner[2] = scoresheets[nonWinner[0]];
  });

  return (
    <>
      <h1 className={utilstyles.heading2Xl}>Game Finished</h1>

      <div className={utilstyles.finalScoreGrid}>
        {winners.map((player) => (
          <>
            <h2 className={utilstyles.mainPlayer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              {player[0]} - Total: {player[1]} Points
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </h2>

            <Scoresheet scoresheet={player[2]} />
          </>
        ))}

        {nonWinners.map((player) => (
          <>
            <h3 className={utilstyles.otherPlayer}>
              {player[0]} - Total: {player[1]} Points{" "}
            </h3>
            <Scoresheet
              scoresheet={player[2]}
              className={utilstyles.otherScoresheet}
            />
          </>
        ))}
      </div>

      <div className={utilstyles.buttons}>
        <button className={utilstyles.button} onClick={replay}>
          Play again
        </button>
        <button className={utilstyles.button} onClick={setup}>
          Back to Player Registration
        </button>
      </div>
    </>
  );
}
