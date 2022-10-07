import Image from "next/future/image";
import styled from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styled.header}>
      <Image
        src={"/hamburger.png"}
        alt="menu"
        width={40}
        height={40}
        className={styled.icon}
      />
      <Image
        src={"/logo.svg"}
        alt="greedygame"
        width={40}
        height={40}
        className={styled.logo}
      />
    </header>
  );
}
