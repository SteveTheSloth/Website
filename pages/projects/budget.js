import Image from "next/image";
import Head from "next/head";

import styles from "../../components/layout.module.css";

import Layout from "../../components/layout";
import MainParagraph from "../../components/mainParagraph";
import SubParagraph from "../../components/subParagraph";

/**
 * Display Page showing the Budget Planner project.
 */
export default function Budget() {
  return (
    <Layout>
      <Head>
        <title>Budget Balancing Web Application</title>
      </Head>
      <MainParagraph
        heading="Budget Balancing Web Application with Django"
        link="https://github.com/SteveTheSloth/Budget"
        text="The idea for this project stems from moving in with my partner.
            After having lived together for a few months and sharing bills, we started to find it more and more difficult to keep track of our transaction. 
            This became even more confusing as payment schedules weren't all the same. Some bills were
            due monthly, some every four weeks on varying dates, some were only one time payments. We sat together one night to discuss this issue when I came up with the idea to
            use this as a web development exercise and build a web application to help us organise our finances better. I decided use Django as a framework, as I had previously completed 
            a bootcamp introducing flask and Django, of which I favoured the latter due to its superior structure and integration of database functionality. 
            I tried my very best to give it a tiny bit of styling with the limited knowledge of CSS and Html I had at the time."
      />

      <SubParagraph
        heading="User Authentication"
        text="I had initially envisioned the app as a tool to help my partner and me specifically but while creating it, I wanted
            to open up the possibility of other people using it as well. This meant for the app to include user registration and authentication. Users 
            needed to be able to create groups for shared budgets like ours. This opened up the application to broader use cases, for example small sports teams, project
            stakeholders, small business owners, flat shares etc."
      />
      <Image
        priority
        src="/images/Budget_Register.jpg"
        className={styles.codeImage}
        height={852}
        width={711}
        alt="Budget App Registration Screen"
      />
      <Image
        priority
        src="/images/Budget_Login.jpg"
        className={styles.codeImage}
        height={457}
        width={1072}
        alt="Budget App Login Screen"
      />

      <SubParagraph
        heading="Adding Transactions"
        text="The core function of any individual or shared budget is the form for adding additional transactions. I included
            three types of transactions: expenses, incomes, and loans. Each of these can be one-off or recurring transactions with a variety of pre-defined repeat patterns for recurring ones 
            (weekly, every 2/3/4 weeks, monthly). Transactions are required to include a name, purpose, amount, due date, and repeat pattern. They may also include information about a website, telephone
            number, and an end date on which the transaction will automatically be removed from the balance overviews."
      />
      <Image
        priority
        src="/images/Budget_Add_Transaction.jpg"
        className={styles.codeImage}
        height={744}
        width={1236}
        alt="Budget App Add Transaction Screen"
      />

      <SubParagraph
        heading="The Calendar View"
        text="To add to the app's initial purpose of providing a better overview over ongoing budgets over time, I included a calendar view that
            shows transactions on their respective due dates."
      />
      <Image
        priority
        src="/images/Budget_Calendar.jpg"
        className={styles.codeImage}
        height={914}
        width={1437}
        alt="Budget App Calendar Screen"
      />

      <SubParagraph
        heading="Group functionality"
        text="I implemented the group functionality using a relational database storing 
            groups IDs and user IDs. Groups are password secured, so in order to join an existing group a user needs the group's name and password. Users can be part of multiple groups at the same time and switch between individual and group budgets easily. 
            After switching to the group's budget, the entire functionality
            of the application is based on the group's transactions rather than individual ones. Transactions added to a group will be stored with the group's ID as well as the user's ID, storing data on which user added which group transaction."
      />
      <Image
        priority
        src="/images/Budget_Create_Group.jpg"
        className={styles.codeImage}
        height={425}
        width={1213}
        alt="Budget App Create Group Screen"
      />
      <Image
        priority
        src="/images/Budget_Group_Login.jpg"
        className={styles.codeImage}
        height={405}
        width={1428}
        alt="Budget App Group Login Screen"
      />
      <Image
        priority
        src="/images/Budget_Group_Select.jpg"
        className={styles.codeImage}
        height={479}
        width={1438}
        alt="Budget App Group Select Screen"
      />
      <Image
        priority
        src="/images/Budget_Group_Calendar.jpg"
        className={styles.codeImage}
        height={915}
        width={1441}
        alt="Budget App Group Calendar Screen"
      />
    </Layout>
  );
}
