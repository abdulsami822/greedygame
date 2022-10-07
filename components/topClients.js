import galaksion from "../public/galaksion.svg";
import inmobi from "../public/inmobi.svg";
import collectcent from "../public/collectcent.svg";

import TopMembers from "./topMembers";
import styled from "../styles/TopMembers.module.css";

export default function TopClients() {
  return (
    <TopMembers
      data={clients}
      heading="Clients"
      containerClass={`${styled.container} ${styled.clientContainer}`}
    />
  );
}

const clients = [
  {
    id: 1,
    name: "galaksion",
    image: galaksion,
  },
  {
    id: 2,
    name: "inmobi",
    image: inmobi,
  },
  {
    id: 3,
    name: "collectcent",
    image: collectcent,
  },
];
