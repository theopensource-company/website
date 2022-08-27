import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.scss";
import Logo from "../public/Logo.png";

export default function PageNotFound() {
  return (
    <Layout title="Forbidden">
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={Logo} alt="The Open Source Company's Logo" />
        </div>
        <h1>Quick, close your eyes 👀</h1>
        <p>You do not have access to this page.</p>
      </div>
    </Layout>
  );
}
