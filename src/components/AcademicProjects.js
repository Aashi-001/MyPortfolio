import React from "react";
import ProjectCard from "./ProjectCard";

export default function AcademicProjects({ items }) {
  return (
    <>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.2rem", color: "white" }}>
        {" "}
        Academic Projects{" "}
      </h2>
      <section id="college-projects" style={{ marginBottom: "2rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          {items.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
