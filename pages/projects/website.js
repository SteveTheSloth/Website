import Image from "next/image";
import Head from "next/head";

import styles from "../../components/layout.module.css";

import Layout from "../../components/layout";
import MainParagraph from "../../components/mainParagraph";
import SubParagraph from "../../components/subParagraph";

/**
 * Display Page showing the Personal Website project.
 */
export default function Website() {
  return (
    <Layout>
      <Head>
        <title>Personal Website and Portfolio</title>
      </Head>
      <MainParagraph
        heading="Personal Website and Portfolio"
        link="https://github.com/SteveTheSloth/Website"
        text="This project is by far the most extensive and polished of all my personal projects. I intended this
            website to showcase my skills and abilities to potential employers and to prove to myself that the time I put into learning how to code and work with Web Development
            technologies had paid off and enabled me to complete a project that can be deployed to the 'reall world'. I did not want to limit this website to a purely professional
            purpose, but to also show a little more of who I am as a person, as opposed to being an extended LinkedIn profile, thus the more personal about me section. Tackling this 
            project was not easy, as it involved learning JavaScript as a second programming language (I started out with python and solely coded with it for the first one and a half 
            years of learning how to code), studying html and CSS, learning about React components and hooks, as well as the new and very different framework Next.js."
      />
      <Image
        priority
        src="/images/Website_Home_Component.jpg"
        className={styles.codeImage}
        height={483}
        width={882}
        alt="Website Home Component Code"
      />
      <SubParagraph
        heading="React and Next.js"
        text="I had gained a first glimpse into React in my web development focussed bootcamp, but applying it in a personal project
            always brings about new and unexpected challenges. The possibility to create reusable components and to reduce the amount of pure html by implementing React features is certainly
            one of its big advantages. Next.js takes this a step further and gives you a framework to work in. During this project I managed to create a multi-page website within the structure
            of Next.js and implementing my knowledge of React hooks and components."
      />
      <Image
        priority
        src="/images/Website_Imagelink_Component.jpg"
        className={styles.codeImage}
        height={653}
        width={1000}
        alt="Website Imagelink Component Code"
      />
      <SubParagraph
        heading="Styling and Interactivity"
        text="While CSS was a part of my web development bootcamp, I only truly understood how crucial styling is when I started tackling
            this project. If a website or an application is to be deployed, it doesn't just need to work - it needs to be intuitive and preferrably fun to use. While I was always more interested
            in how to make things work, as opposed to how to make things look good, I now understood that in web development these aspects go hand in hand. I therefor drew up a simple design and 
            structure for my website and asked myself how to keep it simple, while also implementing aspects like the image-based navigation. I wanted to limit text-elements when it comes to moving
            between individual pages and only include them were they would be beneficial for conveying information."
      />
      <Image
        priority
        src="/images/Website_CSS.jpg"
        className={styles.codeImage}
        height={400}
        width={1000}
        alt="Website CSS Example"
      />
    </Layout>
  );
}
