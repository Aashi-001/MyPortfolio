import React from "react";
import { colors } from "../theme";

export default function Navbar({ name, sections }) {
  return (
    <nav
      style={{
        backgroundColor: colors.darkBlue,
        padding: "1rem 2rem",
        color: "#33FF33",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <span style={{ textAlign: "center", fontSize: "1.5em", color: "#33FF33" }}>
        {" "}
        {name}{" "}
      </span>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", color: "#33FF33" }}>
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section.slice(2)}`}
            style={{ color: "#33FF33", textDecoration: "none", fontWeight: "bold" }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}
