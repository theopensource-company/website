import React from "react";
import Layout from "../components/Layout";
import CircleText from "../components/Images/CircleText";
import TeamMember from "../components/About/TeamMember";
import { TeamMembers } from "../constants/TeamMembers";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Logo from "../public/Logo.png";
import Image from "next/image";
import { GithubIcon } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <div className="background flex-center">
        <CircleText width="600" height="600" speed={1} opacity={0.1} />
      </div>
      <div className="foreground">
        <div className={styles.container}>
          <section>
            <div className={styles.logo}>
              <Image src={Logo} alt="The Open Source Company's Logo" />
            </div>
            <h1>Trust Through Vision, Not Through Deceit</h1>
            <p>
              TOSC, short for &quot;The Open Source Company&quot;, is a
              collective of enthusiastic software developers that want to make a
              change.
              <br /> <br />
              We believe in open source projects and transparent communication.
              We see it as one big collaboration, instead of competition.
              <br /> <br />
              Join us on our mission, our contribution to the world.
            </p>
            <a className={styles.github} href="https://github.com/theopensource-company" target="_blank">
              <GithubIcon>test</GithubIcon>
            </a>
          </section>
          <section>
            <h2>Meet Our Team</h2>
            <div className={styles.teamContainer}>
              {TeamMembers.map((member, i) => TeamMember(member, i))}
            </div>
            <p
              style={{
                fontSize: "1.2rem",
              }}
            >
              Want to join us? Find us on{" "}
              <Link href="https://discord.gg/DRCV4g7Bmy" target="_blank">
                Discord
              </Link>{" "}
              :)
              <br />
              or via{" "}
              <Link href="mailto:hi@theopensource.company">
                hi@theopensource.company
              </Link>
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
