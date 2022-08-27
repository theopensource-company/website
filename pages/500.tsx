import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.scss";
import Logo from "../public/Logo.png";

export default function PageNotFound() {
  return (
    <Layout title="Server error">
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={Logo} alt="The Open Source Company's Logo" />
        </div>
        <h1>The server broke ⚙️</h1>
        <p>Your request could not be processed.</p>
      </div>
    </Layout>
  );
}
