import React from "react";
import { colors, sectionStyle } from "../theme";

export default function About({ text }) {
  return (
    <>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "1.2rem",
          color: "white",
        }}
      >
        About me
      </h2>
      <section
        id="about"
        style={{ ...sectionStyle, marginBottom: "2rem", borderLeft: `6px solid ${colors.teal}` }}
      >
        <p style={{ lineHeight: "1.6", color: "white", fontWeight: "520" }}>{text}</p>
      </section>
    </>
  );
}
