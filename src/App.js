import React from "react";
import { Analytics } from "@vercel/analytics/react";

import { colors, retroFont, globalStyles } from "./theme";
import data from "./data/portfolio.json";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AcademicProjects from "./components/AcademicProjects";
import Education from "./components/Education";
import Extras from "./components/Extras";
import Hobbies from "./components/Hobbies";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  return (
    <div
      style={{
        ...retroFont,
        background: `linear-gradient(180deg, ${colors.peach}, ${colors.peach} 30%, ${colors.darkBlue} 60%)`,
        minHeight: "100vh",
        padding: "0",
        backgroundAttachment: "fixed",
      }}
    >
      <style>{globalStyles}</style>

      <Navbar name={data.profile.name} sections={data.nav} />

      <div className="responsive-container" style={{ maxWidth: "960px", margin: "0 auto", padding: "2rem" }}>
        <Header words={data.profile.typewriterWords} tagline={data.profile.tagline} />

        <About text={data.about} />
        <br />

        <Experience items={data.experience} />
        <br />

        <Skills items={data.skills} />
        <br />

        <Projects items={data.projects} />
        <br />

        <AcademicProjects items={data.academicProjects} />
        <br />

        <Education items={data.education} />
        <br />

        <Extras items={data.extras} />
        <br />

        <Hobbies items={data.hobbies} />

        <CodingProfiles
          items={data.codingProfiles}
          codeforcesHandle={data.profile.codeforcesHandle}
          codeforcesProfileUrl={data.profile.codeforcesProfileUrl}
        />

        <Contact items={data.contact} />

        <Footer name={data.profile.name} />
      </div>
      <Analytics />
    </div>
  );
}
