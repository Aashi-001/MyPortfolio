import React from "react";
import { colors, sectionStyle } from "../theme";

export default function Skills({ items }) {
  return (
    <>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "white" }}>
        {" "}
        Skills
      </h2>
      <section
        id="skills"
        style={{ ...sectionStyle, marginBottom: "2rem", borderLeft: `6px solid ${colors.teal}` }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {items.map((skill) => (
            <span
              key={skill}
              style={{
                backgroundColor: colors.teal,
                color: colors.coral,
                padding: "0.4rem 0.8rem",
                borderRadius: "30px",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
