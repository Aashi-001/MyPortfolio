import React from "react";
import { colors } from "../theme";
import ProjectCard from "./ProjectCard";

export default function Projects({ items }) {
  return (
    <section id="projects" style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.2rem", color: colors.coral }}>
        Projects
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "space-between" }}>
        {items.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
