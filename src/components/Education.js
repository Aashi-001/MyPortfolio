import React from "react";
import { colors, cardStyle } from "../theme";

function EducationCard({ edu }) {
  return (
    <div style={{ ...cardStyle, marginBottom: "1.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
        <h3 style={{ fontWeight: "bold", marginBottom: "0.3rem", color: "white", margin: 0 }}>
          {edu.institution}
        </h3>
        <span
          style={{
            fontSize: "0.95rem",
            fontStyle: "italic",
            color: "white",
            whiteSpace: "nowrap",
          }}
        >
          {edu.dateRange}
        </span>
      </div>
      <div style={{ borderLeft: `3px solid ${colors.teal}`, paddingLeft: "1rem", marginTop: "0.6rem" }}>
        <p style={{ fontSize: "0.95rem", color: "white", marginBottom: "0.3rem" }}>{edu.degree}</p>
        <p style={{ fontSize: "0.9rem", fontStyle: "italic", color: "white", margin: 0 }}>{edu.gpa}</p>
      </div>
    </div>
  );
}

export default function Education({ items }) {
  return (
    <>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.2rem", color: "white" }}>
        {" "}
        Education{" "}
      </h2>
      <section id="education" style={{ marginBottom: "2rem" }}>
        {items.map((edu) => (
          <EducationCard key={edu.institution} edu={edu} />
        ))}
      </section>
    </>
  );
}
