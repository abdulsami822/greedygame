import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import StickyCallback from "./stickyCallback";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>GreedyGame</title>
        <meta name="description" content="Lead Capture Page" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyCallback />
    </>
  );
}
