import utilStyles from "../styles/utils.module.css";

/**
 * Display Players element containing player names. Take player names and index of active player as props and display accordingly.
 */
export default function Players(props) {
  const { players, activePlayerIndex } = props;
  return (
    <div className={utilStyles.playerGrid}>
      {Object.entries(players).map(([key, value]) => (
        <div
          key={"player_" + key}
          className={
            key == activePlayerIndex
              ? utilStyles.activePlayer
              : utilStyles.player
          }
        >
          {" "}
          {value}{" "}
        </div>
      ))}
    </div>
  );
}
