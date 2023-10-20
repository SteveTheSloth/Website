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
        text="This project is by far the most extensive and well developed of all my personal projects. I intended this
            website to showcase my skills and abilities to potential employers and to prove to myself that the time I put into learning how to code and work with Web Development
            technologies had paid off. I did not want to limit this website to a purely professional
            purpose, but to also show a little more of who I am as a person, as opposed to being an extended LinkedIn profile. Tackling this 
            project was not easy, as it involved learning JavaScript as a second programming language apart from python, studying html and CSS, learning about React components and hooks,
            as well as the web development framework Next.js."
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
        text="I had first learned about React in my web development focussed bootcamp, but applying knowledge it in a personal project
            always brings about new and unexpected challenges. The possibility to create reusable components and to reduce the amount of pure html by implementing React features is certainly
            one of its big advantages. Next.js takes this a step further and provides one with a structure to work in. While working on this project I managed to create a multi-page website within the structure
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
        text="I only started to truly understand how crucial styling is when I started tackling
            this project. If a website or an application is to be deployed, it doesn't just need to work - it needs to be intuitive and preferrably fun to use. While I was always more interested
            in how to make things work, as opposed to making them look good, I now understood that in web development these aspects go hand in hand. I therefore drew up a simple design and 
            structure for my website and tried to keep it simple, while also implementing aspects like the image-based navigation, limit text-elements to aspects of the site where they are strictly necessary.
            After initially wanting to completely ommit a navigation feature, first tests revealed its advantages and i decided to include an animated hamburger menu for navigation."
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
