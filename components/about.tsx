"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">
          I am a Computer Science student at Universitas Dian Nuswantoro, driven
          by a fervent passion for mobile and website development. My enthusiasm
          for creating engaging and impactful applications and websites has led
          me to meticulously hone my skills in programming languages such as
          Kotlin, React, HTML, and CSS. I am a perpetual learner, constantly
          seeking opportunities to expand my knowledge and explore new
          technologies.
        </span>
      </p>

      <p>
        <span className="font-medium">
          Beyond my technical expertise, I possess exceptional communication and
          teamwork abilities, enabling me to collaborate effectively with
          diverse individuals and contribute to a positive and productive work
          environment. My unwavering determination and commitment to
          self-improvement make me a valuable asset to any team.
        </span>
      </p>
    </motion.section>
  );
}
