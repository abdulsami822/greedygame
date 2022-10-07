import Image from "next/image";
import styled from "../styles/TopMembers.module.css";

export default function TopMembers({ data, heading, containerClass }) {
  return (
    <section className={`${containerClass} ${styled.halfGridWrapper}`}>
      <div>
        <h1 className={styled.heading}>Our Top {heading}</h1>
        <div className={styled.logosContainer}>
          {data.map((item) => {
            const { id, image, name } = item;
            return (
              <Image
                key={id}
                src={image}
                alt={name}
                height={50}
                width={50}
                className={styled.logo}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
