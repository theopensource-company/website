import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

import Logo from "../../public/Logo.png";
import styles from "../../styles/TeamMember.module.scss";

type Props = {
  name?: string;
  portrait?: StaticImageData;
  role?: string;
};

export default function TeamMember(
  { name = "Unknown", portrait = Logo, role = "Rookie" }: Props,
  i: number
) {
  return (
    <div className={styles.member} key={i}>
      <Image src={portrait} alt={name} priority />
      <h4>{name}</h4>
      <span>{role}</span>
    </div>
  );
}
