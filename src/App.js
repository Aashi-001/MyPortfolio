import React from "react";

export default function Portfolio() {
  const colors = {
    darkBlue: "#01204E",
    teal: "#028391",
    cream: "#F6DCAC",
    peach: "#FAA968",
    orange: "#F85525",
    coral: "#FF7D5C",
    steelBlue: "#19647E"
  };

  const sectionStyle = {
    backgroundColor: colors.cream,
    padding: "2rem",
    borderRadius: "0.75rem",
    boxShadow: `4px 4px 0 ${colors.darkBlue}`,
    border: `3px dashed ${colors.orange}`,
    marginBottom: "2.5rem"
  };

  const cardStyle = {
    ...sectionStyle,
    flex: "1 1 45%",
    backgroundColor: colors.cream,
    borderLeft: `10px solid ${colors.coral}`,
    transition: "transform 0.3s ease-in-out",
  };

  const linkStyle = {
    color: colors.cream,
    backgroundColor: colors.steelBlue,
    padding: "0.5rem 1.2rem",
    borderRadius: "30px",
    border: `2px solid ${colors.teal}`,
    fontWeight: "700",
    textDecoration: "none",
    boxShadow: `2px 2px 0 ${colors.orange}`,
    transition: "all 0.3s ease",
  };

  const retroFont = {
    fontFamily: "'Courier New', Courier, monospace"
  };

  const rainbowTextStyle = {
    background: "linear-gradient(90deg, #ff5f6d, #ffc371, #47e891, #42a5f5, #7e57c2)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
    fontSize: "1.5rem",
    animation: "rainbowShift 6s ease-in-out infinite"
  };

  const globalStyles = `
    @keyframes rainbowShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .rainbow-text {
      background: linear-gradient(90deg, #ff5f6d, #ffc371, #47e891, #42a5f5, #7e57c2);
      background-size: 300% 300%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: rainbowShift 6s ease-in-out infinite;
    }

    a:hover {
      transform: scale(1.05);
      background-color: #FF7D5C;
      color: #01204E;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 6px 6px 0 #01204E;
    }

    @media screen and (max-width: 768px) {
      nav {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }

      .responsive-container {
        padding: 1rem !important;
      }

      .responsive-flex {
        flex-direction: column !important;
      }

      .responsive-card {
        width: 100% !important;
      }
    }
  `;

  return (
    <div
      style={{
        ...retroFont,
        background: `linear-gradient(${colors.peach}, ${colors.peach} 30%, ${colors.teal} 60%)`,
        minHeight: "100vh",
        padding: "0",
      }}
    >
      <style>{globalStyles}</style>

      {/* Navbar */}
      <nav
        style={{
          backgroundColor: colors.darkBlue,
          padding: "1rem 2rem",
          color: colors.cream,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <span className="rainbow-text">Aashi</span>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {['about', 'experience', 'projects', 'education', 'contact'].map(section => (
            <a key={section} href={`#${section}`} style={{ color: colors.cream, textDecoration: "none", fontWeight: "bold" }}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      <div className="responsive-container" style={{ maxWidth: "960px", margin: "0 auto", padding: "2rem" }}>
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "700", fontStyle: "italic", color: colors.darkBlue }}>
            Hi, I'm Aashi
          </h1>
          <p style={{ fontSize: "1.2rem", color: colors.orange }}>Coder | Guitarist</p>
          <p style={{ fontSize: "1.2rem", color: colors.teal }}>Computer Science Postgrad Student</p>
        </header>

        {/* About */}
        <section id="about" style={{ ...sectionStyle, marginBottom: "2rem", borderLeft: `6px solid ${colors.darkBlue}` }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.8rem", color: colors.orange }}>About Me</h2>
          <p style={{ lineHeight: "1.6", color: colors.darkBlue }}>
            I'm Aashi, a passionate software developer who enjoys building efficient systems, exploring networks, and turning complex ideas into reality. Currently diving into distributed systems, protocol switching, and AI-powered applications.
          </p>
        </section>

        {/* Experience */}
        <section id="experience" style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.2rem", color: colors.orange }}>Experience</h2>
          <div style={cardStyle}>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ fontWeight: "bold", marginBottom: "0.2rem", color: colors.darkBlue }}>Indraprastha Institute of Information Technology, Delhi - Teaching Assistant</h3>
                <span style={{ fontSize: "0.95rem", fontStyle: "italic", color: colors.orange }}>Aug 2024 – Present</span>
              </div>
              <p style={{ fontSize: "0.9rem", color: colors.teal, marginBottom: "0.8rem" }}>New Delhi, India · 9 months</p>
              <div style={{ marginLeft: "1rem", maxWidth: "650px", display: "grid", gridTemplateColumns: "1fr auto", rowGap: "0.4rem" }}>
                <div style={{ fontSize: "0.9rem", color: colors.darkBlue }}>Decision Making for Multi-robot Systems (CSE667)</div>
                <div style={{ fontSize: "0.9rem", fontStyle: "italic", color: colors.teal, paddingLeft: "3rem" }}>Jan 2025 – Present</div>
                <div style={{ fontSize: "0.9rem", color: colors.darkBlue }}>Introduction to Programming (CSE101)</div>
                <div style={{ fontSize: "0.9rem", fontStyle: "italic", color: colors.teal, paddingLeft: "3rem" }}>Aug 2024 – Dec 2024</div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ fontWeight: "bold", marginBottom: "0.2rem", color: colors.darkBlue }}>NeenOpal Intelligent Solutions PVT LTD - Data Analyst Intern</h3>
                <span style={{ fontSize: "0.95rem", fontStyle: "italic", color: colors.orange }}>Jan 2024 – Apr 2024</span>
              </div>
              <p style={{ fontSize: "0.9rem", color: colors.teal, marginBottom: "0.8rem" }}>Bangalore, India (Remote) · 4 months</p>
              <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: colors.darkBlue, lineHeight: "1.6" }}>
                <li>Managed and optimized databases on the AWS cloud platform, exploring blue-green deployment.</li>
                <li>Utilized Azure Data Factory to streamline data dumping processes, exploring pipelines and activities.</li>
                <li>Analyzed over 30 reports of client’s database on Salesforce to identify suitable data points.</li>
                <li>Developed over 10 wireframe dashboards based on client’s requirements.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.2rem", color: colors.orange }}>Projects</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
            {[{
              name: "Programmable Proxy",
              desc: "Dynamic protocol switching for distributed microservices across datacenters using Go, MQTT, HTTP.",
              link: "#",
            }, {
              name: "SweetPred",
              desc: "An AI-based tool to predict molecular sweetness from SMILES using Random Forests and RDKit.",
              link: "#",
            }, {
              name: "Graph Visualizer",
              desc: "React-based Dijkstra path visualizer with interactive node editing and shortest path animation.",
              link: "#",
            }].map((proj) => (
              <div key={proj.name} style={cardStyle}>
                <h3 style={{ fontWeight: "700", fontSize: "1.1rem", marginBottom: "0.5rem", color: colors.darkBlue }}>{proj.name}</h3>
                <p style={{ fontSize: "0.95rem", color: colors.darkBlue, marginBottom: "0.8rem" }}>{proj.desc}</p>
                <a href={proj.link} style={linkStyle}>View Project →</a>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.2rem", color: colors.orange }}>Education</h2>
          <div style={cardStyle}>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ fontWeight: "bold", marginBottom: "0.3rem", color: colors.darkBlue }}>Indraprastha Institute of Information Technology, Delhi</h3>
                <span style={{ fontSize: "0.95rem", fontStyle: "italic", color: colors.teal }}>2024 – Present</span>
              </div>
              <p style={{ fontSize: "0.95rem", color: colors.darkBlue, marginBottom: "0.3rem" }}>Master of Technology, Computer Science and Engineering</p>
              <p style={{ fontSize: "0.9rem", fontStyle: "italic", color: colors.teal }}>CGPA: 7.5</p>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ fontWeight: "bold", marginBottom: "0.3rem", color: colors.darkBlue }}>UIET, Panjab University, Chandigarh</h3>
                <span style={{ fontSize: "0.95rem", fontStyle: "italic", color: colors.teal }}>2020 – 2024</span>
              </div>
              <p style={{ fontSize: "0.95rem", color: colors.darkBlue, marginBottom: "0.3rem" }}>Bachelor of Engineering, Computer Science and Engineering</p>
              <p style={{ fontSize: "0.9rem", fontStyle: "italic", color: colors.teal }}>CGPA: 8.97</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: colors.orange }}>Get in Touch</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            <a href="mailto:aashidenod@gmail.com" style={linkStyle}>Email</a>
            <a href="https://github.com/Aashi-001" style={linkStyle}>GitHub</a>
            <a href="https://www.linkedin.com/in/aashi-38621919b/" style={linkStyle}>LinkedIn</a>
          </div>
        </section>

        <footer style={{ marginTop: "3rem", textAlign: "center", fontSize: "0.95rem", color: colors.darkBlue }}>
          &copy; {new Date().getFullYear()} Aashi. Designed with a retro flair 🎸
        </footer>
        </div>
    </div>
  );
}
