import Image from "next/image";
import artoongames from "../public/artoongames.svg";
import styled from "../styles/Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={`${styled.container} ${styled.halfGridWrapper}`}>
      <div>
        <h1 className={styled.mainHeading}>Hear it from Clients</h1>
        {testimonialsData.map((testimonial) => {
          const { id } = testimonial;
          return <TestimonialItem key={id} data={testimonial} />;
        })}
      </div>
    </section>
  );
}

export function TestimonialItem({ data }) {
  const { image, title, body } = data;
  return (
    <article className={styled.testimonialCard}>
      <Image src={image} alt={title} width={100} height={50} />
      <h2 className={styled.title}>{title}</h2>
      <p className={styled.body}>{body}</p>
      <a href="www.google.com" className={styled.link}>
        Read Casestudy
      </a>
    </article>
  );
}

const testimonialsData = [
  {
    id: 1,
    image: artoongames,
    title:
      "22.4 Mn minutes of branding results in 25k high-quality registrations",
    body: "The placement of clickable units natively placed on the main menu, gameplay screen and pause screen ensured high engagement, registrations and transactions.",
  },
];
