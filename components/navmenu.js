import Link from "next/link";

import utilStyles from "../styles/utils.module.css";

/**
 * Display NavMenu element for site navigation. Take active as props, change className accordingly to show/hide menu.
 */
export default function NavMenu(props) {
  const active = props.active;

  return (
    <div className={active ? utilStyles.showNavMenu : utilStyles.hideNavMenu}>
      <Link href="/" className={utilStyles.navItem}>
        Home
      </Link>
      <Link href="/about" className={utilStyles.navItem}>
        About Me
      </Link>
      <Link href="/cv" className={utilStyles.navItem}>
        Curriculum Vitae
      </Link>
      <Link href="/projects" className={utilStyles.navItem}>
        Projects
      </Link>
    </div>
  );
}
