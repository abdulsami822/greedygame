import Image from "next/image";
import styled from "../styles/Card.module.css";

export default function FeatureCard({ data }) {
  const { image, text } = data;
  return (
    <figure className={styled.figure}>
      <Image
        src={image}
        alt="campaign"
        width={50}
        height={50}
        className={styled.image}
      />
      <figcaption className={styled.text}>{text}</figcaption>
    </figure>
  );
}
