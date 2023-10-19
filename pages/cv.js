import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import utilStyles from "../styles/utils.module.css";

import Layout from "../components/layout";

/**
 * Display Curriculum Vitae.
 */
export default function CV() {
  return (
    <Layout>
      <Head>
        <title>CV</title>
      </Head>

      <h1>Curriculum Vitae</h1>
      <section className={utilStyles.curriculumGrid}>
        <div>
          <br></br>
          <Image
            priority
            src="/images/profile.jpg"
            width={170}
            height={170}
            alt="Lucas Voigt"
          />
        </div>
        <div>
          <h2>Lucas Voigt</h2>
          <h2>Web Developer</h2>
          <p>
            163 Beatty Crescent <br></br>
            Kirkcaldy, Fife KY1 2HT <br></br>
            <br></br>
            +44 7414682897 <br></br>
            lucas.voigt@web.de
          </p>

          <h4>About Me</h4>
          <p>
            I am a lifelong learner with a passion for developing new skills
            across a variety of fields. I have a proven track record of
            leadership and being a team-player. I love solving complex problems,
            and am driven by a desire to prove my abilities and complete any
            task to the highest standards.
          </p>
        </div>
        <div>
          <div className={utilStyles.sectionLine}></div>
          <h3>Skills</h3>
        </div>
        <div>
          <div className={utilStyles.breakLine}></div>
          <ul>
            <li>Front-end / back-end Web Development</li>
            <li>Python, including the popular frameworks Django and Flask</li>
            <li>JavaScript, Node.js, React.js, and Next.js</li>
            <li>UX design</li>
            <li>Customer service delivery & training</li>
            <li>
              Advanced in Microsoft Office-applications (Excel, PowerPoint,
              Outlook, Word)
            </li>
            <li>
              Advanced experience with audio and video recording and editing
              software, and various web-applications, knowledge of MongoDB,
              Postgres, SQL, and various Python libraries including
              Data-Analysis, Data-Visualisation, and Artificial Intelligence
            </li>
            <li>
              Fluent in English and German, basic knowledge of Chinese, Finnish,
              French and Russian
            </li>
          </ul>
        </div>
        <div>
          <div className={utilStyles.sectionLine}></div>
          <h3>Experience</h3>
        </div>
        <div>
          <div className={utilStyles.breakLine}></div>
          <p>
            {" "}
            14.06.2023 – 25.07.2023 <br></br>
            Web Development Bootcamp <br></br>
            Covering HTML5, CSS, JavaScript, Node.js, RESTful APIs, and React.js
          </p>
          <br></br>
          <p>
            {" "}
            24.11.2022 – 24.03.2023 <br></br>
            Python Developer Bootcamp <br></br>
            Covering a vast selection of topics, including SQL, front-end and
            back-end Web Development, Data Science, Machine Learning, and Web
            Scraping
          </p>
          <br></br>
          <p>
            {" "}
            01.06.2021 - present <br></br>
            Learning to work with the programming languages Python and
            JavaScript<br></br>
            Completing Object-Oriented Programming, Data Science, Machine
            Learning and Web Development training<br></br>
          </p>
          <br></br>
          <p>
            {" "}
            05.11.2021 – 07.11.2022 <br></br>
            CX Coordinator - Jewish Museum Berlin/Securitas GmbH, Berlin,
            Germany <br></br>
            Coordination and management of customer service delivery for one of
            Berlin’s busiest museums with 2500 visitors daily
          </p>
          <ul>
            <li>
              Designing and delivering training for a team of 100 customer
              service employees
            </li>
            <li>
              Coordinating the strategy and delivery of customer service within
              a small team and acting as the first point of contact for the
              museum’s visitor service department to ensure day-to-day
              operations were in accordance with current regulations and visitor
              needs
            </li>
          </ul>
          <br></br>
          <p>
            {" "}
            01.04.2020 – 30.09.2020 <br></br>
            Programme Tutor and Mentor - Goethe-University, Frankfurt am Main,
            Germany <br></br>
            Design and delivery of ‘Competence and Potentials’ programme of
            digital learning for first year students education during Covid-19
            restrictions
          </p>
          <ul>
            <li>Content development</li>
            <li>Digital tool identification and implementation</li>
          </ul>
        </div>
        <div>
          <div className={utilStyles.sectionLine}></div>
          <h3>Education</h3>
        </div>
        <div>
          <div className={utilStyles.breakLine}></div>
          <p>
            {" "}
            01.10.2018 – 26.05.2021 <br></br>
            Master of Arts, Political Theory
          </p>
          <ul>
            <li>Goethe-University, Frankfurt am Main, Germany</li>
            <li>Awarded equivalent of British 1st / First class</li>
            <li>
              Including a semester abroad at the University of Lapland,
              Rovaniemi, Finland - Average grade: 1,0 (equivalent to 1st / First
              class)
            </li>
          </ul>
          <br></br>
          <p>
            {" "}
            01.10.2012 – 30.09.2017 <br></br>
            Bachelor of Arts, Politics, Administration, and Economics
          </p>
          <ul>
            <li>Potsdam University, Potsdam, Germany</li>
            <li>Awarded equivalent of British 2:1 / Second class</li>
            <li>
              Including a semester abroad at the University of International
              Business and Economics (UIBE), Beijing, China - Average grade: 90%
              (equivalent to 1st / First class)
            </li>
          </ul>
          <br></br>
        </div>
      </section>
    </Layout>
  );
}
