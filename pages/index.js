import Head from "next/head";
import Image from "next/image";

import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";

import ImageLink from "../components/imagelink";
import Layout from "../components/layout";

/**
 * Display Home page.
 */
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>LV Codes Web Development</title>
      </Head>
      <div className={styles.logoDiv}>
        <Image
          src="/images/logo_default.png"
          className={utilStyles.logoMain}
          height={114}
          width={400}
          alt="LVcodes Logo"
        />
      </div>
      <section className={utilStyles.linkGrid}>
        <ImageLink link="About" imgFileName="about1.jpg" text="About Me" />
        <ImageLink link="CV" imgFileName="cv.jpg" text="Curriculum Vitae" />
        <ImageLink
          link="Projects"
          imgFileName="projects.jpg"
          text="Portfolio"
        />
      </section>
    </Layout>
  );
}
