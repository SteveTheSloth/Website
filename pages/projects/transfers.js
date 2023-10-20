import Image from "next/image";
import Head from "next/head";

import styles from "../../components/layout.module.css";

import Layout from "../../components/layout";
import MainParagraph from "../../components/mainParagraph";
import SubParagraph from "../../components/subParagraph";

/**
 * Display Page showing the Bundesliga Transfer Analysis project.
 */
export default function Transfers() {
  return (
    <Layout>
      <Head>
        <title>Bundesliga Transfer Analysis</title>
      </Head>
      <MainParagraph
        heading="Football Transfer Analysis & Webscraping"
        link="https://github.com/SteveTheSloth/Football_Transfer_Analysis"
        text="While I had not yet completely set my mind on which carreer path to pursue,
            data analysis had been a serious contender. Even though I did not end up pursuing this path further, I was able to learn a lot from this
            project. I used new tools and python libraries for the first time, analysed the structure of websites to ensure that my web scraping produced usable data, and tested my
            abilities to work with a medium sized dataset. Statistics were an important part of my University degree and I enjoy working with data and
            figuring out correlations to support or disprove a theoretical argument. Coincidentally I am also a big football fan and have supported my team through
            highs and lows over the past 25 years. Following the German Bundesliga for such a substantial period of time, I started to wonder about some more
            recent developments that seemed significant to me. Over the last years, I felt that apart from Bayern Munich, all of the Bundesliga clubs were 
            on the decline. Although absolute turnover numbers are continuously increasing (interrupted of course by the Covid-19 pandemic), comparatively, the Bundesliga
            seems to lose track of the European top leagues. This observation was supported by rather subpar international results of German clubs. 
            What intrigued me was to figure out if this decline was somehow reflected in the transfers to and from Bundesliga clubs and if there
            is a trend that could be visualised by analysing them."
      />
      <Image
        priority
        src="/images/Transfers_Intra_Buli.jpg"
        className={styles.codeImage}
        height={649}
        width={1042}
        alt="Bundesliga Transfers Intra-Bundesliga Graph"
      />
      <SubParagraph
        heading="Acquiring the data - Web Scraping with scrapy"
        text="Being a football fan, I am familiar with the most popular websites covering transfers. I used the web scraping library scrapy collect the data from a website and stored 
            it in a JSON file. This involved overcoming challenges like incoherent formatting, duplicate data entries for transfers between two Bundesliga clubs, and partially incomplete data. 
            I was able to configure the web scraping algorithm to produce a fairly coherent dataset, reducing the need to clean up the data significantly."
      />
      <Image
        priority
        src="/images/Transfers_Spider.jpg"
        className={styles.codeImage}
        height={839}
        width={1106}
        alt="Bundesliga Transfer Web Scraping Code Snippet"
      />
      <SubParagraph
        heading="Analysing the data - jupyter, pandas, and matplotlib"
        text="I formulated several hypotheses to be tested before I started to work with the data. These 
            included for example: 'The average player age for transfers declined over time' or 'The number of transfers from the top leagues declined over time'. I did not stick to these hypotheses
            very strictly, as I intended to explore the data and learn how to properly work with the libraries and tools I was using, rather than producing academically correct results. 
            I set up a jupyter notebook and started to work with the data using the python libraries pandas and matplotlib for data manipulation and visualisation. I was able to
            figure out several trends in the data and visualise them, while at the same time expanding my knowledge on the tools and libraries I worked with."
      />
      <Image
        priority
        src="/images/Transfers_Transfer_Types.jpg"
        className={styles.codeImage}
        height={690}
        width={1080}
        alt="Bundesliga Transfers Transfer Types Graph"
      />
    </Layout>
  );
}
