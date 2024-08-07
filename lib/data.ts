import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import decixImg from "@/public/decix.png";
import sparkletImg from "@/public/sparklet.png";
import rwfkImg from "@/public/rwfk.png";
import bcgunionbankImg from "@/public/bcgunionbank.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "NeoSoft, Pune",
    description:
      "I designed and developed user-friendly, responsive web interfaces using HTML5, CSS3, Bootstrap, and JavaScript. By collaborating with design and backend teams, I ensured seamless navigation and optimal user experiences.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "Software Developer",
    location: "CNC, Pune",
    description:
      "I designed new features and maintained existing ones, ensuring alignment with project goals. I stayed current with emerging technologies to incorporate the latest advancements, enhancing user experience and website performance.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2020",
  },
] as const;

export const projectsData = [

  {
    title: "De-cix",
    description:
      "I worked as a front-end developer on this WordPress project. Developed of Responsive Web Pages as per design of Revamp website.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "WordPress"],
    imageUrl: decixImg,
  },
  {
    title: "SparkLet",
    description:
      "It's an Event project. It has features like search, date and location filter, sign in, sign up and browse event category and we can like and share events, also we can book an event.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    imageUrl: sparkletImg,
  },
  {
    title: "RWFK Internationale Transport & Logistik GmbH",
    description:
      "Developed website layout and new web pages from scratch. Added filter feature and used dataTables.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    imageUrl: rwfkImg,
  },
  {
    title: "BCG Union Bank",
    description:
      "Boston Consulting Group is a global consulting firm. Done bug fixing, design modifications and created web pages. Worked on various module admin panels, forms, dataTables and dashboard.", 
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    imageUrl: bcgunionbankImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "Redux",
  "SASS",
  "WordPress",
  "SEO",
  "Responsive Design"
] as const;
