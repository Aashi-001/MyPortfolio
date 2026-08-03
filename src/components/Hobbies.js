import React from "react";
import { colors, sectionStyle } from "../theme";

export default function Hobbies({ items }) {
  return (
    <>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "white" }}>
        {" "}
        Hobbies & Interests{" "}
      </h2>
      <section
        id="hobbies"
        style={{ ...sectionStyle, marginBottom: "2rem", borderLeft: `6px solid ${colors.teal}` }}
      >
        <ul
          style={{
            paddingLeft: "1.2rem",
            fontSize: "0.95rem",
            color: "white",
            lineHeight: "1.7",
            fontWeight: "550",
          }}
        >
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
