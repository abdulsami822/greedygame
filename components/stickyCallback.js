import styled from "../styles/StickyCallback.module.css";

export default function StickyCallback() {
  return (
    <article className={styled.container}>
      <p className={styled.text}>Get a Call back from us</p>
      <a href="#leadCaptureForm" className={styled.button}>
        Get Started
      </a>
    </article>
  );
}
