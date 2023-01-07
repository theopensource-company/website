import React from "react";
import Layout from "../components/Layout";
import CircleText from "../components/Images/CircleText";
import TeamMember from "../components/About/TeamMember";
import { TeamMembers } from "../constants/TeamMembers";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <Layout>
      <div className="background flex-center">
        <CircleText width="600" height="600" speed={1} opacity={0.1} />
      </div>
      <div className="foreground">
        <div className={styles.container}>
          <section>
            <h1>Trust Through Vision, Not Through Deceit</h1>
            <p>
              We believe in open source software and its endless possibilities.
              We believe in peeling data harvesting and unetchical
              advertisements off the internet. <br />
              <br />
              Join us on our mission, our contribution to the world.
            </p>
          </section>
          <section>
            <h2>Meet Our Team</h2>
            <div className={styles.teamContainer}>
              {TeamMembers.map((member, i) => TeamMember(member, i))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
