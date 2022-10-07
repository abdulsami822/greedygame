import styled from "../styles/TalkToUs.module.css";

export default function TalkToUs() {
  return (
    <section className={`${styled.container} ${styled.halfGridWrapper}`}>
      <div>
        <h2 className={styled.heading}>
          Acquire <span className={styled.underline}>quality users,</span> not
          just installs
        </h2>
        <p className={styled.text}>
          Talk to us today and start creating mobile marketing campaigns that
          deliver results.
        </p>
      </div>
    </section>
  );
}
