"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import adc from "../app/logos/adc.png";
import ic from "../app/logos/icp.png";
import postman from "../app/logos/postman.png";
import ms from "../app/logos/moringa.png";
import dkut from "../app/logos/dkut.png";
import mlsa from "../app/logos/mlsa.png";
import desaic from "../app/logos/desaic.png";
import dekut from "../app/logos/dekut.png";
import csok from "../app/logos/csok.png";
import origin from "../app/logos/origin.png";
import github from "../app/logos/github.svg";
import tinyml from "../app/logos/tinyml.png";
import zeraki from "../app/logos/zeraki.png";
import eth from "../app/logos/eth.jpeg";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { CanvasRevealEffectDemo } from "@/components/canvas-reveal-demo";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import Footer from "@/components/footer";
import { useRef } from "react";
import { FaMailBulk } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function Home() {
  const words = ["innovation", "creativity", "technology", "solutions"];
  const projects = [
    {
      title: "Microsoft ADC",
      description:
        "The Africa Development Center (ADC) represents Microsoft's first-ever development centers in Africa. It's a premier center of Engineering for Microsoft that leverages the diversity of the region to build world class talent.",
      link: "https://www.microsoft.com/en-us/madc",
      image: adc,
    },
    {
      title: "Microsoft Learn Student Ambassadors",
      description:
        "A global group of on-campus ambassadors who are eager to help students learn more about technology.",
      link: "https://studentambassadors.microsoft.com/",
      image: mlsa,
    },
    {
      title: "Computer Society of Kimathi",
      description:
        "A community of students at Dedan Kimathi University of Technology who are committed to personal and professional growth and upskilling through sessions, peer-to -peer mentorship, partnerships and in-house innovations.",
      link: "https://x.com/csokimathi?t=5PuivvPFPWB-Wk5SJN_6EQ&s=09",
      image: csok,
    },
    /*{
      title: "Moringa School",
      description:
        " A tech education company that offers training in software development, data science, and digital marketing.",
      link: "https://moringaschool.com/",
      image: ms,
    },*/
    {
      title: "Dedan Kimathi Innovators Club",
      description:
        "A student-led club at Dedan Kimathi University of Technology that aims to foster innovation and entrepreneurship among students.",
      link: "https://www.dkut.ac.ke/",
      image: dkut,
    },
    {
      title: "DeSIC Dedan Kimathi",
      description:
        "A platform providing speedy commercialization of student innovations",
      link: "https://dehub.dkut.ac.ke/",
      image: desaic,
    },
    /*{
      title: "Dedan Kimathi University",
      description:
        "DeKUT is one of the most progressive University in Africa with keen focus on quality education,and holistic development of students.",
      link: "https://www.dkut.ac.ke/",
      image: dekut,
    },*/
    {
      title: "Github",
      description:
        "GitHub is a developer platform that allows developers to create, store, manage and share their code",
      link: "https://gh.io/dekut2024",
      image: github,
    },
    {
      title: "Zeraki",
      description:
        " Zeraki simplifies and enhances the use of technology to deliver quality education, with products for parents, teachers, students and schools.",
      link: "https://www.zeraki.app/",
      image: zeraki,
    },
    {
      title: "Eth Foundation",
      description:
        "Eth Foundation is a non-profit that supports the Ethereum ecosystem",
      link: "https://ethereum.foundation/",
      image: eth,
    },
  ];
  const themes = [
    {
      quote:
        "The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings.",
      name: " Masanobu Fukuoka, Japanese farmer and philosopher",
      title: "Agriculture",
    },
    // {
    //   quote:
    //     "Education is what remains after one has forgotten what one has learned in school. ",
    //   name: "Albert Einstein",
    //   title: "Education",
    // },
    {
      quote:
        "We shape our cities, and thereafter our cities shape us.",
      name: "Winston Churchill",
      title: "Sustainable Cities",
    },
    {
      quote:
        "The answer is blowing in the wind.",
      name: "Unknown",
      title: "Green Energy",
    },
    {
      quote:
        "Cities have the capability of providing something for everybody, only because, and only when, they are created by everybody.",
      name: "Jane Jacobs",
      title: "Sustainable Cities",
    },
    {
      quote:
        "Injustice anywhere is a threat to justice everywhere.",
      name: "Martin Luther King",
      title: "Peace & Justice",
    },
    {
      quote:
        "The only thing necessary for the triumph of evil is for good men to do nothing.",
      name: "Edmund Burke",
      title: "Peace & Justice",
    },
  ];
  const content = [
    {
      title: "Agriculture (SGD 2)",
      description:
        "How can we use tech to end hunger? This theme challenges you to think beyond simply growing more food and instead hack smarter systems to eliminate waste and improve food access. The goal is to use tech to promote agriculture, achieve food security and improve nutrition.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Agriculture (SGD 2)
        </div>
      ),
    },
    {
      title: "Green Energy (SGD 7)",
      description: "The challenge here is to innovate solutions that make clean energy not just a possibility, but a reality for all. Whether it’s renewable power, energy efficiency, or affordable access for underserved communities, teams can explore innovations that push the world closer to universal green energy.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          Green Energy (SGD 7)
        </div>
      ),
    },
    {
      title: "Sustainable Cities (SDG 11)",
      description: "This theme is about tackling the friction points of city life to create smarter and more livable urban spaces. The goal is to create future-proof cities solving mobility, waste management, housing and disaster readiness.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Sustainable Cities (SDG 11)
        </div>
      ),
    },
    {
      title: "Peace & Justice (SDG 16)",
      description: "Here teams are challenged to develop solutions to promote transparent, accountable governance and access to justice. This theme hacks the systems of trust and governance that enable all other goals.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Sustainable Cities (SDG 11)        </div>
      ),
    },
  ];
  const typeWords = [
    {
      text: "Build,",
    },
    {
      text: "Learn ",
    },
    {
      text: "& ",
    },
    {
      text: "Connect ",
    },
    {
      text: "At ",
    },
    {
      text: "- ",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "DeKUT HACK.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const placeholders = [
    "When is the hackathon starting?",
    "Who are the judges?",
    "Can I be a solo-hacker?",
    "Must I be a student at DeKUT to participate?",
    "Who built this site😂?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("onSubmit triggered"); // Add this line
  };
  return (
    <div className="max-w-[1020px] mx-auto my-0">
      <Navbar />
      <div className="">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 30 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl mt-20 md:mt-0"
          >
            DeKUT HACK 2025 <br /> Driving <FlipWords words={words} />
          </motion.h1>
        </LampContainer>
      </div>
      <div className="md-mx-0 mx-2">
        <h1 className="text-[#42C5E2] text-3xl md:text-5xl font-bold text-center mb-4 mt-32">
          Hackathon Themes
        </h1>
        <div className="max-w-[800px] flex items-center justify-center mx-auto my-0 p-8">
          <p className="text-gray-300 text-center leading-relaxed">
            Dekut Hack will have four themes: Agriculture, green energy, sustainable cities and peace & justice. Teams will have the flexibility to develop their
            projects within any of these four areas. The aim is to allow
            participants to explore and innovate in the field of their choice,
            whether it is addressing the current climate issues, enhancing
            educational systems or improving our healthcare systems.Each team
            can select the theme that best aligns with their interests and
            expertise
          </p>
        </div>
        <StickyScroll content={content} />
        <h1 className="text-[#42C5E2] text-3xl md:text-5xl font-bold text-center mb-4 mt-32">
          Hackathon Partners
        </h1>
        <HoverEffect items={projects} />
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-slate-950 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={themes}
            direction="right"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
        <h1 className="text-[#42C5E2] text-3xl md:text-5xl font-bold text-center mb-4 mt-32">
          Prizes
        </h1>
        <div className="bg-slate-950">
          <CanvasRevealEffectDemo />
        </div>
        <TypewriterEffect words={typeWords} />
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl text-gray-600 mt-12 ">
          Have a question? Feel free to ask us!
        </h2>
        {/* <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        /> */}
        <div className="flex items-center justify-center">
          <a
            href="mailto:collins.nyaigoti@studentambassadors.com"
            className="flex items-center justify-center text-gray-900 rounded-md bg-[#42c5e2] border-2 border-[#42c5e2] hover:bg-transparent hover:scale-110 ease-in duration-200 hover:text-gray-400"
          >
            <button className="rounded-lg px-4 py-4 flex justify-between gap-2 text-xl">
              Send us a mail
              <MdMail color="blue" size="2rem" />
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
