import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";

import Hamburger from "./hamburger";
import NavMenu from "./navmenu";

/**
 * Display Layout element for use on all pages. Implements the react hook to toggle navigation menu.
 */
export default function Layout({ children, home }) {
  const [showMenu, setShowMenu] = useState(false);

  function hideMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topbar}>
          <div className={utilStyles.topgrid}>
            <Hamburger func={hideMenu} />
            <Link href="/" className={utilStyles.logoSmall}>
              <Image
                priority
                src="/images/logo_default.png"
                height={57}
                width={200}
                alt="LVcodes Logo"
              />
            </Link>
          </div>
        </div>
      </header>
      {<NavMenu active={showMenu ?? false} />}
      <section>{children}</section>
      <footer className={styles.footer}>
        <div className={styles.bottombar}>
          <Link href="/contact" className={styles.contact}>
            Contact
          </Link>
          <p className={styles.copyright}>© 2023 Lucas Voigt</p>
        </div>
      </footer>
    </>
  );
}
