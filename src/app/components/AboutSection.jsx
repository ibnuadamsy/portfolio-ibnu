"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Selenium WebDriver</li>
        <li>Create Test Scenario & Test Case</li>
        <li>API Testing with Postman</li>
        <li>TestRail</li>
        <li>Grafana Loki</li>
        <li>Python</li>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>GIT</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Muhammadiyah Jakarta - Bachelor of Informatics Engineering</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>BNSP - Junior Web Developer</li>
        <li>Digital Talent Scholarship X Kominfo RI - Junior Web Developer</li>
        <li>Vocational School Graduate Academy X Kominfo RI - Web Developer</li>
        <li>Digital Talent Scholarship X Kominfo RI - Junior Web Developer</li>
        <li>Binar Academy - Quality Assurance</li>
        <li>Progate - HTML, CSS, Javascript Course</li>
      </ul>
    ),
  },
  {
    title: "Award",
    id: "award",
    content: (
      <ul className="list-disc pl-2">
        <li>Outstanding employee of the quarter</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="description of image about" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am passionate understanding about QA Engineer especially for software testing with implementation of manual & automation. 
          I have experience as Technical Support and QA Engineer with a demonstrated history of working in the Fintech Company 
          more than three years. I am a fast learner and always looking to expand my knowledge also skills. 
          I am a team player and enjoy working with others to create amazing applications with a small chance of bug.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("award")}
              active={tab === "award"}
            >
              {" "}
              Award{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
