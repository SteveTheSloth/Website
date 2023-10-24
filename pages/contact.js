import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import utilStyles from "../styles/utils.module.css";

import Layout from "../components/layout";

/**
 * Display Contact page.
 */
export default function Contact() {
  return (
    <Layout>
      <Head>Contact</Head>
      <p className={utilStyles.contact}>
        E-Mail:{" "}
        <Link href="mailto: lucas.voigt@web.de">lucas.voigt@web.de</Link>
      </p>
      <p>Telephone: +44 7414682897</p>
      <a href="https://github.com/SteveTheSloth" target="_blank">
        <Image
          priority
          src="/images/GitHub_Logo.png"
          height={45}
          width={108}
          alt="Github Profile Link"
        />
      </a>
      <br />
      <a
        href="https://www.linkedin.com/in/lucas-voigt-b0858826a"
        target="_blank"
      >
        <Image
          className={utilStyles.linkedin}
          priority
          src="/images/LinkedIn_Logo.png"
          height={28}
          width={112}
          alt="LinkedIn Profile Link"
        />
      </a>
      <br />
      <br />
      <br />
      <h4>Image sources</h4>
      <a href="https://unsplash.com/de/@zlataky?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Zlaťáky.cz
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/de/fotos/gold-und-silbermunzen-y7jRMXOz7pE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
      <br />
      <a href="https://unsplash.com/de/@mrthetrain?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Joshua Hoehne
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/de/fotos/schwarz-weisser-fussball-8ZvTRSRdsOA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
      <br />
      <a href="https://unsplash.com/de/@stumpie10?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Robert Stump
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/de/fotos/rot-weisse-wurfel-los-pQyTChJwEDI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
      <br />
      <a href="https://unsplash.com/de/@markuswinkler?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Markus Winkler
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/de/fotos/weisses-druckerpapier-neben-silbernem-laptop-7iSEHWsxPLw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
      <br />
      <a href="https://unsplash.com/de/@cgower?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Christopher Gower
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/de/fotos/%EB%B0%94%EC%81%9C-%EC%B1%85%EC%83%81%EC%9D%98-%ED%99%94%EB%A9%B4%EC%97%90-%EC%BD%94%EB%93%9C-%EC%A4%84%EC%9D%B4-%EC%9E%88%EB%8A%94-macbook-m_HRfLhgABo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
    </Layout>
  );
}
