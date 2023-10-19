import Link from "next/link";
import Head from "next/head";

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
    </Layout>
  );
}
