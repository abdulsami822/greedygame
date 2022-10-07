import styled from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styled.footer} ${styled.halfGridWrapper}`}>
      <div>
        <p>&#169; 2022 GreedyGame, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
