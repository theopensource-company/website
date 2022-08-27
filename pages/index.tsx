import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.scss";
import Logo from "../public/Logo.png";

export default function Homepage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={Logo} alt="The Open Source Company's Logo" />
        </div>
        <h1>The Open Source Company</h1>
        <p>
          <a href="mailto:hi@theopensource.company">hi@theopensource.company</a>
        </p>
      </div>
    </Layout>
  );
}
