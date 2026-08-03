import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Header({ words, tagline }) {
  return (
    <header style={{ textAlign: "center", marginBottom: "3rem" }}>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          fontStyle: "italic",
          color: "#33FF33",
        }}
      >
        <Typewriter
          words={words}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={120}
          deleteSpeed={70}
          delaySpeed={1000}
        />
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#33FF33", fontWeight: "550" }}> {tagline} </p>
    </header>
  );
}
