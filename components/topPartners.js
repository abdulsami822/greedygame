import artoongames from "../public/artoongames.svg";
import collectcent from "../public/collectcent.svg";
import inmobi from "../public/inmobi.svg";
import galaksion from "../public/galaksion.svg";

import styled from "../styles/TopMembers.module.css";
import TopMembers from "./topMembers";

export default function TopPartners() {
  return (
    <TopMembers
      data={partners}
      heading="Partners"
      containerClass={styled.container}
    />
  );
}

const partners = [
  {
    id: 1,
    name: "artoongames",
    image: artoongames,
  },
  {
    id: 2,
    name: "collectcent",
    image: collectcent,
  },
  {
    id: 3,
    name: "galaksion",
    image: galaksion,
  },
  {
    id: 4,
    name: "inmobi",
    image: inmobi,
  },
  {
    id: 5,
    name: "collectcent",
    image: collectcent,
  },
  {
    id: 6,
    name: "artoon",
    image: artoongames,
  },
];
