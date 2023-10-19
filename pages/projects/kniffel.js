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
            since the start of my coding journey. It was the first thing I ever coded on my own and has since
            been updated and rewritten many times as my skills and interests developed. My love for this game
            stems from playing it over and over with a group of friends back in Berlin. We used to play it so
            much that we developed an ongoing league system and an almost unlimited pool of inside jokes surrounding
            it. The development of my versions of Kniffel (which is almost the same as the more popular Yahtzee)
            started from what you might call a prime example of 'Spaghetti-Code', a completely functional version,
            which consists of a basically unreadable string of code and have since come a long way to its current 
            stage. But long story short:"
      />
      <Link className={utilStyles.gameLink} href="/projects/kniffel/game">
        Do you fancy a game?
      </Link>
      <SubParagraph
        heading="Stages of development"
        text="Very early on in my coding studies, I developed my 
            first version of the game. I had not yet learned about Object Oriented Programming and therefor used multiple 
            functions to represent the game. While by no means ideal, I managed to code a fully functional version of Kniffel
            that works with user input and text-representations of dice values and game states within a few weeks of learning how to code.
            It is safe to say that I was as proud of my achievement then, as I am now aware of how overly simplistic and suboptimal
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
            knowledge to create a better structured version. While my first attempts did not go very far, they certainly helped me gain a better
            understanding of Object Oriented Programming. I used classes to represent all of the recurring aspects of the game - Players, 
            Scoresheets, and Dice, but did not manage at first to create an actually playable game."
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
        heading="A fully interactive GUI with pygame"
        text="I knew I had to study more to be able to make the Object Oriented
            approach work. I decided to give it a rest for a while and continue working through the book 'How to think like a computer scientist.
            Learning with Python 3 Documentation' by Downey, Elkner, Meyers & Wentworth. Once I reached a chapter on the Python library pygame, I 
            decided to give Kniffel another go. This approach amounted to a much bigger project than the previous ones, as it was my first time trying
            to create a Graphical User Interface as well as my first time working within the framework of a library. I utilised my knowledge of 
            OOP to create a set of modules containing classes for individual game mechanics and used the pygame documentation as well as information
            from examples and exercises in the book to create what I would call my first fully functional and interactive multiplayer Kniffel game.
            It contains different screens for setup, game, and final scores, intuitive clickable items to not rely on keyboard inputs, and rolling dice
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
        heading="Model View Controller and a new GUI using PyQt"
        text="While I personally had been very happy with how my
            pygame implementation had turned out, a good friend of mine who is a seasoned programmer himself, had a look at it and told me to look into
            the Model View Controller paradigm and rearrange the game code accordingly. According to him, this would make it much easier to implement a different 
            GUI later on, as pygame is not something that D is being used in the real world. His advice for creating a GUI was to use the PyQt library.
            I followed his advice and rearranged the game accordingly as well as creating a new GUI. At this point, I admittedly did not have the patience to 
            dive very deep into PyQt as it was nothing I wanted to focus my studies on anyways. I chose to 'muddle through', creating code that works but is 
            neither very readable nor particularly well designed. Be that as it may, I still managed to create a complete new version of the game with a more 
            standard GUI and learned about a new paradigm along the way!"
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
        text="At this point, I decided to not persue the multiplayer
            implementation of Kniffel any further. I had always been more of a programming practice as opposed to something that I wanted to perfect and deploy
            after all. And I was very happy with what I had managed to build and the skills and knowledge I acquired in the process. I had not yet finally
            decided which direction I wanted to focus on within the very wide field that is programming and found myself being very intrigued by the current 
            developments in the field of Artificial Intelligence. I wondered if it would be possible to use my game - for which I had previously already created 
            a hard-coded computer controlled player that performed decently - to learn about AI and potentially create a trained model that would perform as well or even 
            better as a human player. I started reading up on the different kinds of AI and realised that I would need to implement some kind of Reinforcement
            Learning algorithm to achieve this. I decided to use the stable baseline library to try and train a model and while I did not achieve any satisfying results - mainly
            because I was not able to find sufficient information on hyperparameter tuning - this was on the one hand a very interesting excursion into the world
            of AI and a great learning opportunity, and on the other hand showed me that this was not the direction I wanted to take in my studies."
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
            in a long time when I decided to include the stages of its development in my portfolio. I thought it would be nice to have something interactive that people could
            actually engage with and try themselves as opposed to only reading about it and looking at the code. It couldn't be too difficult, I thought, as the entire code had already 
            been written and would only need to be implemented in the framework of my portfolio. That turned out to be a bit optimistic. Ultimately I had to rewrite the entire code and was
            only able to use tiny snippets of the previous versions. I could build on my previous experiences with designing the game logic of course, but had to overcome many unexpected 
            difficulties before I was finally able to implement a playable version on this Website."
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
