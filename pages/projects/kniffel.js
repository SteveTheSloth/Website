import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import styles from "../../components/layout.module.css";
import utilStyles from "../../styles/utils.module.css";

import Layout from "../../components/layout";
import MainParagraph from "../../components/mainParagraph";
import SubParagraph from "../../components/subParagraph";

/**
 * Display Page showing the Dice Game project.
 */
export default function Kniffel() {
  return (
    <Layout>
      <Head>
        <title>Multiplayer Dice Game</title>
      </Head>
      <MainParagraph
        heading="Kniffel - A Multiplayer Dice Game"
        link="https://github.com/SteveTheSloth/Kniffel"
        text="Converting this game into 
            a digital multiplayer copy of its analogue original has been a continuously developing project
            since the start of my coding journey. It was the first programme I ever coded on my own and has since
            been updated and rewritten many times as my skills and interests developed. My love for this game
            stems from playing it with a group of friends in Berlin. We used to play it so
            much that we developed an ongoing league system and an almost unlimited pool of inside jokes around
            it. The development of my versions of Kniffel (which is almost the same as the more popular Yahtzee)
            started from what you might call a prime example of 'Spaghetti-Code' - a completely functional version,
            which consists of an almost unreadable string of code and has since come a long way to its current 
            stage as implemented on this website. But long story short:"
      />
      <Link className={utilStyles.gameLink} href="/projects/kniffel/game">
        Do you fancy a game?
      </Link>
      <SubParagraph
        heading="Stages of development"
        text="Very early on in my coding studies, I developed my 
            first version of the game. I had not yet learned about Object Oriented Programming and therefore used multiple 
            functions to represent the game. While by no means ideal, I managed to code a fully functional version of Kniffel
            that works with user input and text-representations of dice values and game states within a few weeks of learning how to code.
            I was as proud of my achievement then, as I am now aware of how overly simplistic and suboptimal
            this version was."
      />
      <Image
        priority
        src="/images/Kniffel_V1.jpg"
        className={styles.codeImage}
        height={849}
        width={1100}
        alt="Kniffel Version 1"
      />
      <SubParagraph
        heading="First steps in Object Oriented Programming"
        text="After learning about Object Oriented Programming and
            talking to a friend about my first version of the game, I knew I needed to rewrite the code and utilise my newly acquired 
            knowledge to create a better structured version. While my first attempts did not go very far, they helped me gain a better
            understanding of Object Oriented Programming. I used classes to represent all of the recurring aspects of the game - Players, 
            Scoresheets, and Dice, but did not manage at first to turn these representations into a fully playable game."
      />
      <Image
        priority
        src="/images/Kniffel_Object.jpg"
        className={styles.codeImage}
        height={911}
        width={1175}
        alt="Kniffel Classes"
      />
      <SubParagraph
        heading="A fully interactive Graphical User Interface (GUI) with pygame"
        text="I decided to take a break from developing the game any further for a while and continued my studies. The book I was working through at the time
            included an exercise on the Python library pygame. After finishing said exercise, I decided to give Kniffel another go. 
            This approach amounted to a much bigger project than the previous ones, as it was my first time creating a GUI as well as working within the framework of a library. I applied my knowledge of 
            OOP to create a set of modules containing the classes for individual game mechanics. I also used the pygame documentation as well as information
            from examples and exercises in the book to create what I would call my first fully functional and interactive multiplayer Kniffel game.
            This version contains different screens for setup, game, and final scores, intuitive clickable items replacing the more abstract keyboard inputs, and even dice rolling
            animations."
      />
      <Image
        priority
        src="/images/Kniffel_Pygame.jpg"
        className={styles.codeImage}
        height={890}
        width={995}
        alt="Kniffel Pygame"
      />
      <SubParagraph
        heading="Model View Controller and a new GUI with PyQt"
        text="I was advised by a friend, who also works in the field of programming, to look into
            the Model View Controller paradigm and rearrange the game code accordingly. This would make it much easier to implement a different 
            GUI later on. His advice for creating a different GUI was to use the PyQt library.
            I rearranged the game according to MVC and created a new GUI. As I did not intend to make PyQt a central part of my studies, I did not
            spend a lot of time on the GUI and instead implemented new functionality including creating custom lists, saving, and loading games. Developing this version was a great 
            learning opportunity, familiarising myself with the MVC paradigm, the PyQt library, and designing a Graphical User Interface. "
      />
      <Image
        priority
        src="/images/Kniffel_PyQt.jpg"
        className={styles.codeImage}
        height={437}
        width={570}
        alt="Kniffel PyQt"
      />
      <SubParagraph
        heading="First steps in Reinforcement Learning with Kniffel"
        text="With this version completed, I decided to not pursue the multiplayer
            implementation of the game any further. It had fulfilled its purpose as a programming practice and I was very happy with what I had managed to build and the skills and knowledge I acquired in the process. 
            At this point I found myself being very intrigued by the current 
            developments in the field of Artificial Intelligence. I wondered if it would be possible to use my game - for which I had previously already created 
            a hard-coded computer controlled player - to learn about AI and create a model that would perform as well or even 
            better as a human player. I started reading up on the different kinds of AI and quickly realised that I would need to implement a Reinforcement
            Learning algorithm to achieve this. I decided to use the stable baseline library design and train a model. While I did not achieve fully satisfying results 
            this was a very interesting excursion into the world of AI and a great learning opportunity."
      />
      <Image
        priority
        src="/images/Kniffel_RL.jpg"
        className={styles.codeImage}
        height={764}
        width={1269}
        alt="Kniffel Reinforcement Learning"
      />
      <SubParagraph
        heading="Kniffel as a JavaScript Web Application - The final version (for now)"
        text="I had not touched the code for any of the prior versions 
            in a long time when I decided to include the stages of its development in my portfolio on this website. I envisioned this to be an interactive element that people could
            engage with and try for themselves as opposed to solely reading about it. It turned out that I had to rewrite the entire code and could use only tiny snippets of the previous versions. 
            I was able to build on my previous experiences designing the game logic and used this as another exercise on React hooks and JavaScript."
      />
      <Image
        priority
        src="/images/Kniffel_JS.jpg"
        className={styles.codeImage}
        height={786}
        width={1186}
        alt="Kniffel JavaScript Web Application"
      />
    </Layout>
  );
}
