import React from "react";
import { linkStyle } from "../theme";
import useCodeforcesStats from "../hooks/useCodeforcesStats";

export default function CodingProfiles({ items, codeforcesHandle, codeforcesProfileUrl }) {
  const { cfRank, cfRating } = useCodeforcesStats(codeforcesHandle);
  const [leetcode, hackerrank] = items;

  return (
    <>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "1rem",
          color: "white",
          textAlign: "center",
        }}
      >
        {" "}
        Coding Profiles
      </h2>
      <section id="coding-profiles" style={{ textAlign: "center", marginTop: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <a href={leetcode.href} style={linkStyle} target="_blank" rel="noopener noreferrer">
            {leetcode.label}
          </a>
          <a href={codeforcesProfileUrl} style={linkStyle} target="_blank" rel="noopener noreferrer">
            {" "}
            Codeforces ({cfRank} - {cfRating ?? "Loading..."})
          </a>
          <a href={hackerrank.href} style={linkStyle} target="_blank" rel="noopener noreferrer">
            {" "}
            {hackerrank.label}
          </a>
        </div>
      </section>
    </>
  );
}
