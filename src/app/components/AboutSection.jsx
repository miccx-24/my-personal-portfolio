"use client"
import React, { useTransition, useState } from "react";
import Image from 'next/image';
import TabButton from "./TabButton";

const AboutSection = ({ playSound }) => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
      if (playSound) playSound();
    });
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>Nextjs</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Data Science and Informatics</li>
          <li>University of Zimbabwe, Harare</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Cisco Network Academy Python Essentials 1</li>
          <li>Cisco Network Academy JavaScript Essentials 1</li>
          <li>Cisco Network Academy Introduction To Data Science</li>
          <li>Cisco Network Academy Cyber Threat Management</li>
          <li>Cisco Network Academy Data Analytics Essentials</li>
          <li>Cisco Network Academy Introduction To Cyber Security</li>
          <li>Cisco Network Academy Introduction To Internet Of Things</li>
          <li>Cisco Network Academy Ethical Hacking</li>
          <li>Great Learning Academy Introduction to Analytics   </li>
          <li>Great Learning Academy Python for Data Science</li>
          <li>Great Learning Academy Introduction to Artificial Intelligence</li>
          <li>Great Learning Academy Introduction to Exploratory Data Analysis with Excel</li>
          <li>Great Learning Academy Machine Learning with Python</li>
          <li>Great Learning Academy Data Visualization with PowerBi</li>
        </ul>
      ),
    },
  ];

  return (
    <section className='text-white' id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/hero.png" width={500} height={500}
         className="rounded-full object cover" />
         <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
         <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>  
         <p className="text-base lg:text-lg">
         I am a full stack web developer who loves building interactive and responsive web applications. My expertise includes JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a fast learner, always eager to broaden my knowledge and skills. As a team player, I thrive on collaborating with others to create outstanding applications.
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