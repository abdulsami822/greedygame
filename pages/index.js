import Head from "next/head";
import Image from "next/image";
import Feature from "../components/feature";
import LeadCaptureForm from "../components/leadCaptureForm";
import Statistics from "../components/statistics";
import TalkToUs from "../components/talkToUs";
import Testimonials from "../components/testimonials";
import TopClients from "../components/topClients";
import TopPartners from "../components/topPartners";
import styled from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className={styled.section}>
        <Feature />
        <LeadCaptureForm />
      </section>
      <Statistics />
      <TopPartners />
      <TopClients />
      <Testimonials />
      <TalkToUs />
    </>
  );
}
