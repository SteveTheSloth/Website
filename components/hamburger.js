import { useState } from "react";

import utilStyles from "../styles/utils.module.css";

/**
 * Display Hamburger Menu element to toggle navigation menu. Take function to change react state as argument. Change appearance according to state.
 */
export default function Hamburger(props) {
  const hideMenu = props.func;
  const [active, setActive] = useState(false);

  function toggleMenu() {
    hideMenu();
    setActive(!active);
  }

  return (
    <>
      <div className={utilStyles.hamburgerMenu} onClick={toggleMenu}>
        <span
          className={
            active
              ? utilStyles.activeHamburgerLine_1
              : utilStyles.hamburgerLine_1
          }
        />
        <span
          className={
            active
              ? utilStyles.activeHamburgerLine_2
              : utilStyles.hamburgerLine_2
          }
        />
        <span
          className={
            active
              ? utilStyles.activeHamburgerLine_3
              : utilStyles.hamburgerLine_3
          }
        />
      </div>
    </>
  );
}
