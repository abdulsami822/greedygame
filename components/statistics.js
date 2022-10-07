import styled from "../styles/Statistics.module.css";

export default function Statistics() {
  return (
    <section className={styled.halfGridWrapper}>
      <div className={styled.container}>
        {statisticsData.map((data) => {
          const { id, number, text } = data;
          return (
            <article key={id} className={styled.item}>
              <h2 className={styled.heading}>{number}</h2>
              <p className={styled.text}>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

const statisticsData = [
  {
    id: 1,
    number: "300+",
    text: "Affiliates",
  },
  {
    id: 2,
    number: "5K+",
    text: "Apps Inventory",
  },
  {
    id: 3,
    number: "1M+",
    text: "App Installs",
  },
  {
    id: 4,
    number: "3K+",
    text: "Active Campaigns",
  },
];
