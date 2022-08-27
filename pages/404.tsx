import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.scss";
import Logo from "../public/Logo.png";

export default function PageNotFound() {
  return (
    <Layout title="Page not found">
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={Logo} alt="The Open Source Company's Logo" />
        </div>
        <h1>Page not found ⛵</h1>
        <p>We could&apos;t piece this page together...</p>
      </div>
    </Layout>
  );
}
