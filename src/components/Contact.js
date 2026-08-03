import React from "react";
import { linkStyle } from "../theme";

export default function Contact({ items }) {
  return (
    <section id="contact" style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "white" }}>
        {" "}
        Get in Touch
      </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
        {items.map((item) => (
          <a key={item.label} href={item.href} style={linkStyle}>
            {" "}
            {item.label}{" "}
          </a>
        ))}
      </div>
    </section>
  );
}
