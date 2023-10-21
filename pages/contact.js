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
    </Layout>
  );
}
