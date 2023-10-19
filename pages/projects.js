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
      <secion className={utilStyles.portfolioLinkGrid}>
        <ImageLink
          link="projects/website"
          imgFileName="page.jpg"
          text="Personal Website"
        />
        <ImageLink
          link="projects/kniffel"
          imgFileName="dice.jpg"
          text="Multiplayer Dice Game"
        />
        <ImageLink
          link="projects/budget"
          imgFileName="budget.jpg"
          text="Budget Planner"
        />
        <ImageLink
          link="projects/transfers"
          imgFileName="football.jpg"
          text="Bundesliga Transfer Analysis"
        />
      </secion>
    </Layout>
  );
}
