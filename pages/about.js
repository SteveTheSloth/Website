import Image from "next/image";
import Head from "next/head";

import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";

import Layout from "../components/layout";
import SubParagraph from "../components/subParagraph";

/**
 * Display About Me page.
 */
export default function About() {
  return (
    <>
      <Layout about>
        <Head>
          <title>About me</title>
        </Head>
        <div className={styles.logoDiv}>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={250}
            width={250}
            alt="Lucas Voigt"
          />
        </div>
        <SubParagraph
          heading="About Me"
          text="My name is Lucas Voigt, I was born in 1990 in Berlin, Germany. I am a self-taught web developer based in Kirkcaldy, Scotland.
        After finishing high school, I was very unsure about potential career paths. I therefore took a year off of formal education and started working as a voluntary carer in an artisanal workshop
        for people with additional needs. While this was a great experience, I always knew that I wanted to pursue an academic education afterwards. During the year of working in that position,
        I had become very interested in politics, but decided to pursue a degree with better potential job security and started to study engineering at the Technical University 
        Berlin. This turned out to be so far off my interests that I knew after roughly a year of working towards a degree that it did not make any sense for me to pursue it any further.
        I switched to a degree in Politics and Economics at the University of Potsdam and quickly realised that this had been the right decision. I was awarded the equivalent of a 
        British 2:1 / Second class degree, had spent a semester abroad in Beijing, China, and had worked as an assistant for a member of the German parliament during my studies."
        />
        <SubParagraph
          text="After finishing my degree I spent a year working as a legal secretary for the internationally renowned law firm Freshfields Bruckhaus Deringer LLP
        before moving on to pursue a Master's degree in Political Theory at Goethe University Frankfurt am Main. Having become a valued member of the team at Freshfields, I was offered to continue working
        for them on a part-time basis in their Frankfurt office. I continued working there until I left Frankfurt for another semester abroad in Rovaniemi, Finland. As it turned out, I could not have chosen a better time
        to study abroad, as the following semester was interrupted by the beginning of the Covid-19 pandemic which brought all exchange programmes to a halt. After returning to Frankfurt I started a new
        job as an academic mentor at Goethe University. This role involved designing and delivering a course for first-year students to help them identify their desired academic paths as well as providing 
        them with assistance regarding educational organisation and the University's administration. While this programme had initially been designed to be delivered in person, the Covid-19 pandemic forced me and my colleagues
        to adapt on the fly and redesign our courses to accomodate distance learning. During this time I also finished the last of my own University courses and started working on my Master's thesis. I finished my 
        degree being awarded the equivalent of a British 1st / First class degree."
        />
        <SubParagraph
          text="I decided to move back to Berlin to spend another year with my friends and family, while at the same time applying 
        for a partnership visa for the United Kingdom as at this point my partner and I had already decided that we wanted to start a life together in Scotland. I spent this year working
        as a project coordinator for the visitor service of the Jewish Museum Berlin. This role involved being the focal point of all information regarding the customer experience, working closely together with
        many other teams within the museum and managing around 100 customer service employees during day-to-day operations. While very challenging, and at times quite stressful, I thoroughly enjoyed this position."
        />
        <SubParagraph
          text="Both me and my employer were aware that this employment was alawys set out to be temporary, and my mind was set on developing a potential career that would be easily transferrable to my new home. I had
        already begun to study programming in my own time. While I was not sure which direction to take within the very broad scope of posible careers that include programming, I knew very early on that this was the
        right direction for me. Having had the opportunity to look into different routes associated with programming, like data science and artificial intelligence, I ultimately decided to pursue a career in web
        development."
        />
        <SubParagraph
          text="Learning and developing new skills has always been, and will always remain an important part of my life. This does not only apply to professional development, but also to my own personal interests. I have
        a keen interest in music and have learned how to play several different instruments including keyboard and the guitar, the latter of which remains my preferred instrument to this day. I have played the guitar
        in a band for ca. 15 years, which included many live shows, songwriting and studio recordings, and video productions. Another long term personal passion of mine is martial arts. I have practiced Shotokan
        Karate for ca. 13 years, participated in tournaments and exams and managed to be awarded the brown belt. Reigniting this long term interest, I recently started taking part in a martial arts class in Kircaldy.
        My semesters abroad had a significant impact on my personal interests. Since having spent time in Beijing, I developed a love for authentic south-east Asian and Chinese cuisine, which I try my best to become 
        adept at preparing myself. Spending Autumn in Finland involved a lot of exposure to the outdoors and the beautiful woodlands of the area around Rovianiemi, which were covered with the most beautiful and interesting
        mushrooms at the time. This sparked a keen interest in mycology and foraging for mushrooms today is one of my preferred modes of unwinding. My interest in mushrooms intersects with another hobby of mine: whittling, which I took 
        up as a Covid-hobby and learned to love as a mode of artistic expression. Mushrooms are one of my favourite subjects."
        />

        <section className={utilStyles.linkGrid}>
          <Image
            priority
            src="/images/music.jpg"
            className={utilStyles.imageLink}
            height={200}
            width={300}
            alt="Music"
          />
          <Image
            priority
            src="/images/cooking.jpg"
            className={utilStyles.imageLink}
            height={200}
            width={300}
            alt="Food"
          />
          <Image
            priority
            src="/images/mushroom.jpg"
            className={utilStyles.imageLink}
            height={200}
            width={300}
            alt="Mushroom"
          />
          <Image
            priority
            src="/images/whittling.jpg"
            className={utilStyles.imageLink}
            height={200}
            width={300}
            alt="Spoon"
          />
        </section>
      </Layout>
    </>
  );
}
