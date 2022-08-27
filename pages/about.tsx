import React from "react";
import Image, { StaticImageData } from "next/image";
import Layout from "../components/Layout";
import CircleText from "../components/Images/CircleText";
import TeamMember from "../components/About/TeamMember";

import styles from "../styles/About.module.scss";

import PortraitMicha from '../assets/image/team/m-d-vries.jpg';
import PortraitMorgan from '../assets/image/team/m-hofmann.jpg';
import PortraitTies from '../assets/image/team/t-wellhuner.jpeg';


export const TeamMembers: Array<{
  name: string;
  portrait: StaticImageData;
  role: string;
}> = [
  {
    name: "Micha de Vries",
    portrait: PortraitMicha,
    role: "CEO, Developer"
  },
  {
    name: "Morgan Hofmann",
    portrait: PortraitMorgan,
    role: "Developer, Product"
  },
  {
    name: "Ties Wellhüner",
    portrait: PortraitTies,
    role: "Product, Graphic Design"
  }
];

export default function About() {
  return (
    <Layout>
      <div className="background flex-center">
        <CircleText width="600" height="600" speed={1} opacity={0.1} />
      </div>
      <div className="foreground">
        <div className={styles.container}>
          <h1>Trust Through Vision, Not Through Deceit</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sagittis placerat sem vel dictum. Nullam vitae ultricies enim. Proin
            quis auctor nulla. Duis sollicitudin sit amet quam at placerat.
            Vivamus congue mi justo, vitae ultrices velit hendrerit a. Nulla
            lectus lectus, pharetra quis congue quis, maximus eu ipsum. Sed quis
            pulvinar eros. Vestibulum aliquet ex et diam tempor luctus.
            Phasellus quis erat sed libero porttitor mollis. Proin ullamcorper
            nunc in ligula faucibus maximus. Proin blandit ornare convallis.
            Fusce tincidunt sit amet risus et fermentum. Donec aliquam nulla
            nulla, ac condimentum ligula mollis nec. Maecenas non odio non
            tellus suscipit mattis. Integer ac enim viverra, pellentesque diam
            ut, mollis nunc.
          </p>
          <h1>Meet Our Team</h1>
          <div className={styles.teamContainer}>
            {TeamMembers.map((member) => {
              return <TeamMember name={member.name} portrait={member.portrait} role={member.role} />
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
