import React from "react";
import { colors, sectionStyle } from "../theme";

export default function Extras({ items }) {
  return (
    <>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "white" }}>
        {" "}
        Extra-Curriculars & Achievements{" "}
      </h2>
      <section
        id="extras"
        style={{ ...sectionStyle, marginBottom: "2rem", borderLeft: `6px solid ${colors.teal}`, fontWeight: "550" }}
      >
        <ul style={{ paddingLeft: "1.2rem", fontSize: "0.95rem", color: "white", lineHeight: "1.7" }}>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
