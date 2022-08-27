import Link from "next/link";

import styles from "../../styles/Navbar.module.scss";

const Navbar = () => (
  <div className={styles.navbar}>
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);

export default Navbar;
