import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import bookphileImg from "@/public/bookphile.png";
import programmingImg from "@/public/programmingweb.png";
import intermediateImg from "@/public/intermediate.png";
import machineImg from "@/public/machine.png";
import fundamnetal from "@/public/fundamental.png";
import furniscan from "@/public/furniscan.png";
import bookshelfImg from "@/public/bookshelf.png";
import notesReactImg from "@/public/notesReact.png";
import notesAppImg from "@/public/notesFront.png";
import telkomImg from "@/public/telkom.png";


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
    title: "Secretary of Litbang Commision",
    location: "Dewan Perwakilan Mahasiswa",
    description:
      "As the team leader for Open Recruitment, I am responsible for the entire recruitment process, from planning and development to implementation and evaluation. I create meeting agendas, take minutes, and follow up on meeting results to ensure a smooth recruitment process. I also monitor and evaluate the implementation of Open Recruitment to track progress, identify potential problems, and implement corrective actions as needed.",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2022 - Present",
  },
  {
    title: "Mobile Developer",
    location: "Bangkit",
    description:
      "I participated in the Bangkit program, which ran for 4 months. Here I improved my skills in developing Android applications using the Kotlin language. In addition, I also learned how to apply machine learning to Android. Not only that, I also developed my English language skills through the Bangkit program.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - June 2024",
  },
  {
    title: "Web Developer",
    location: "Telkom Semarang",
    description:
      "Interned for 2 months, working on an LMS (Learning Management System) website using the CodeIgniter 3 framework with PHP as the programming language. The website allows agents to access provided materials and includes a quiz feature.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - Sept 2024",
  },
  {
    title: "Web Developer",
    location: "Diskominfo Semarang",
    description:
      "Interned for 1 months, working on a website for the Semarang City Government using the CodeIgniter 3 framework with PHP as the programming language. The website is used to provide information about the city of Semarang.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2024 - Okt 2024",
  },
   {
    title: "Web Developer",
    location: "Firstudio Semarang",
    description:
      "Contract worker in the position of a web developer using the Laravel framework.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "FurniScan",
    description:
      "The application that I worked on during Bangkit. Has the main feature of being able to scan product furniture and see detail information.",
    tags: ["Kotlin", "TensorFlow", "Camera Integrated", "Local database", "Cloud API"],
    imageUrl: furniscan,
    urlTo: "https://github.com/FurniScan-C241-PS170/FurniScanApp",
  },
  {
    title: "BookShelf Apps",
    description:
      "A website based on HTML, CSS, and JavaScript where users can add and categorize books they have read and books they want to read.",
    tags: ["CSS", "HMTL", "Javascript"],
    imageUrl: bookshelfImg,
    urlTo: "https://jesjsssi.github.io/Bookshelf-Apps/",
  },
  {
    title: "MyStoryApp",
    description:
      "The application that I worked on during Bangkit. Has the main feature of being able to post and view stories and display location.",
    tags: ["Kotlin", "Json", "Cloud API", "Local database"],
    imageUrl: intermediateImg,
    urlTo: "https://github.com/Jesjsssi/MyStoryApp",
  },
  {
    title: "BookPhile",
    description:
      "This PHP-based book borrowing platform features book ratings, reviews, categorized browsing, and a simple checkout process.",
    tags: ["PHP", "CSS", "HMTL", "Javascript", "MySql"],
    imageUrl: bookphileImg,
    urlTo: "https://github.com/Jesjsssi/BookPhile",
  },
  
  {
    title: "Cancer Detection App",
    description:
      "The application that I worked on during Bangkit. Using Kotlin programming language and utilizing the use of tensorflow.",
    tags: ["Kotlin", "TensorFlow", "Camera Integrated", "Local database", "Cloud API"],
    imageUrl: machineImg,
    urlTo: "https://github.com/Jesjsssi/AplikasiDeteksiKanker",
  },
  
  {
    title: "Basic Web Programming",
    description:
      "This is a project that I worked on during the Dicoding course. Using HTML, CSS, and JavaScript programming languages",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: programmingImg,
    urlTo: "https://jesjsssi.github.io/Frieren-PemprogramanWebDasar/",
  },
  {
    title: "GithubApp",
    description:
      "The application that I worked on during Bangkit. Using Kotlin language and doing data transaction through API provided by Github.",
    tags: ["Kotlin", "Cloud API", "Local Database"],
    imageUrl: fundamnetal,
    urlTo: "https://github.com/Jesjsssi/AplikasiGithub",
  },
   {
    title: "Notes App Frontend",
    description:
      "Create a website using Node.js and implement Webpack, where the website allows adding and deleting notes",
    tags: ["Node", "Webpack", "API"],
    imageUrl: notesAppImg,
    urlTo: "https://jesjsssi.github.io/notes-app/",
  },
   {
    title: "Notes App React",
    description:
      "A notes website built using the Vite.js and React frameworks, where users can add, delete, and archive notes",
    tags: ["React", "Vite.js", "Local Database"],
    imageUrl: notesReactImg,
    urlTo: "https://jesjsssi.github.io/React-NotesApp/",
  },
   {
    title: "Telkom Agent",
    description:
      "A website that I worked on during my internship at Telkom Semarang. Using the CodeIgniter 3 framework with PHP as the programming language",
    tags: ["PHP", "CodeIgniter 3", "MySql"],
    imageUrl: telkomImg,
    urlTo: "https://github.com/LMS-Learning-Management-System/telkom-agent-ci3",
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Kotlin",
  "Laravel",
  "CodeIgniter 3",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Figma",
  "MongoDB",
  "Android Studio",
  "Flutter",
  "Dart",
  "Python",
  "TypeScript",
  "Github",
  "Bootstrap",
  "Visual Studio Code",
  "PHP",
] as const;
