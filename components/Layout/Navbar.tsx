import React from "react";
import Link from "next/link";

import styles from "../../styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
