import Link from "next/link";

import styles from "../../styles/Navbar.module.scss";

const Navbar = () => (
  <div className={styles.navbar}>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About Us</a>
    </Link>
  </div>
);

export default Navbar;
