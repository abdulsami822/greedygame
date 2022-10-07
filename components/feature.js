import styled from "../styles/Feature.module.css";
import cpi from "../public/cpi.svg";
import premium from "../public/premium.svg";
import performance from "../public/performance.svg";
import campaign from "../public/campaign.svg";
import FeatureCard from "./featureCard";

export default function Feature() {
  return (
    <section>
      <h1 className={styled.heading}>
        <span className={styled.underline}>Result Oriented </span>
        <br />
        performance campaigns <br />
        for every objective
      </h1>
      <section className={styled.featuresContainer}>
        {featuresList.map((feature) => {
          return <FeatureCard key={feature.id} data={feature} />;
        })}
      </section>
    </section>
  );
}

const featuresList = [
  {
    id: 1,
    image: cpi,
    text: "Self-serve platform with CPI starting at INR 1",
  },
  {
    id: 2,
    image: premium,
    text: "Access to premium inventory and exposure to 5K+ apps",
  },
  {
    id: 3,
    image: performance,
    text: "Comprehensive reporting and insights into campaign performance",
  },
  {
    id: 4,
    image: campaign,
    text: "Campaigns for every need - clicks, installs, impressions, and more",
  },
];
