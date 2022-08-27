import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import CircleText from "../components/Images/CircleText";

import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <Layout>
      <CircleText width="300" height="300" />
      <div className={styles.container}>
        <h1>Trust Through Vision, Not Through Deceit</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          sagittis placerat sem vel dictum. Nullam vitae ultricies enim. Proin
          quis auctor nulla. Duis sollicitudin sit amet quam at placerat.
          Vivamus congue mi justo, vitae ultrices velit hendrerit a. Nulla
          lectus lectus, pharetra quis congue quis, maximus eu ipsum. Sed quis
          pulvinar eros. Vestibulum aliquet ex et diam tempor luctus. Phasellus
          quis erat sed libero porttitor mollis. Proin ullamcorper nunc in
          ligula faucibus maximus. Proin blandit ornare convallis. Fusce
          tincidunt sit amet risus et fermentum. Donec aliquam nulla nulla, ac
          condimentum ligula mollis nec. Maecenas non odio non tellus suscipit
          mattis. Integer ac enim viverra, pellentesque diam ut, mollis nunc.
        </p>
      </div>
    </Layout>
  );
}
