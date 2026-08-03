import React from "react";
import { colors } from "../theme";

export default function Footer({ name }) {
  return (
    <footer style={{ marginTop: "3rem", textAlign: "center", fontSize: "0.95rem", color: colors.coral }}>
      &copy; {new Date().getFullYear()} {name}. 🎸
    </footer>
  );
}
