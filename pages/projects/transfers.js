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
        text="While I had not yet completely figured out which carreer path to pursue,
            data analysis had been a serious contender for a while. While I did not end up pursuing this path further in the end, I was still able to learn a lot from this
            project. I used new tools and python libraries for the first time, analysed the structure of websites to ensure that my web scraping produced usable data, and tested my
            abilities to work with a medium sized dataset. Statistics were an important part of my University degree and I do enjoy working with data and
            figuring out correlations to support or disprove a theoretical argument. Coincidentally I am also a big football fan and have supported my club Borussia Dortmund through
            highs and lows over the past 25 years. Following the German Bundesliga for such a substantial period of time, I couldn't help but wonder about some more
            recent developments that seemed significant to me. Over the last years, I felt that apart from Bayern Munich, pretty much all of the Bundesliga clubs were 
            on the decline. Although absolute turnover numbers are continuously increasing (interrupted of course by the Covid-19 pandemic), comparatively, the Bundesliga
            seemed to lose track of the big leagues. This was supported by international results of German clubs where only few successes stand against a plethora of examples
            of rather shameful defeats. What interested me was to figure out if this decline was somehow reflected in the transfers to and from Bundesliga clubs and if there
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
        heading="Getting the data - Web Scraping with scrapy"
        text="As with any data analysis, my first step was to somehow acquire the data to work with. As I was a football fan, I
            knew the go-to websites when it comes to transfers and used the web scraping library scrapy to store the transfer data in a JSON file. I had to overcome some challenges like incoherent formatting 
            over the years, duplicate transfers for transfers between two Bundesliga clubs, and partially incomplete data, but managed to configure the web scraping algorithm to produce a fairly coherent dataset.
            Of course I had to still clean the dataset before working with it."
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
        text="I formulated several hypotheses to be tested by my analysis before I started to work with the data. These 
            included for example: 'The average player age for transfers declined over time' or 'The number of transfers from the top leagues declined over time'. I did not stick to these hypotheses
            very strictly, as I first wanted to explore the data and learn how to properly work with the libraries and tools I was using, rather than producing academically correct results. 
            I then set up a jupyter notebook and started to work with the data using the python libraries pandas and matplotlib for data manipulation and visualisation. While my analysis is nowhere near complete, I was able to
            figure out several trends in the data and visualise them."
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
