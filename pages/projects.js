import Head from "next/head";

import utilStyles from "../styles/utils.module.css";

import Layout from "../components/layout";
import ImageLink from "../components/imagelink";

/**
 * Display Projects page.
 */
export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <h1 className={utilStyles.portfolioHeading}>Personal Projects</h1>
      <section className={utilStyles.portfolioLinkGrid}>
        <ImageLink
          link="projects/website"
          imgFileName="Inverted_Logo.jpg"
          text="Personal Website"
        />
        <ImageLink
          link="projects/kniffel"
          imgFileName="dice.jpg"
          text="Multiplayer Dice Game"
        />
        <ImageLink
          link="projects/budget"
          imgFileName="Budget_Image.jpg"
          text="Budget Planner"
        />
        <ImageLink
          link="projects/transfers"
          imgFileName="Football_Image.jpg"
          text="Bundesliga Transfer Analysis"
        />
      </section>
    </Layout>
  );
}
