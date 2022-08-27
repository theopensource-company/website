import { StaticImageData } from "next/image";
import Image from "next/image";
import * as React from "react";

import Logo from "../../public/Logo.png";
import styles from "../../styles/TeamMember.module.scss";

type Props = {
  name?: string;
  portrait?: StaticImageData;
  role?: string;
};

const TeamMember = ({
  name = "Unknown",
  portrait = Logo,
  role = "Rookie"
}: Props) => (
  <div className={styles.member}>
    <Image src={portrait} />
    <h2>{name}</h2>
    <span>{role}</span>
  </div>
);

export default TeamMember;
