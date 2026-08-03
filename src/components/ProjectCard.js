import React from "react";
import { cardStyle, linkStyle } from "../theme";

export default function ProjectCard({ project }) {
  return (
    <div
      className="project-card responsive-card"
      style={{ ...cardStyle, width: "48%", boxSizing: "border-box", marginBottom: "1rem" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
        <h3 style={{ fontWeight: "700", fontSize: "1.1rem", color: "white", margin: 0, flex: 1 }}>
          {" "}
          {project.name}
        </h3>
        <a href={project.link} style={linkStyle} target="_blank" rel="noopener noreferrer">
          View Project →
        </a>
      </div>
      <p style={{ fontSize: "0.95rem", color: "white", marginBottom: "0.6rem" }}>{project.desc}</p>
      <ul style={{ paddingLeft: "1.2rem", color: "white", fontSize: "0.9rem", lineHeight: "1.5" }}>
        {project.bullets.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
