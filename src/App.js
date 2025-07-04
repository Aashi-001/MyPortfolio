import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Portfolio() {
  const colors = {
    darkBlue: "#01204E",
    teal: "#028391",
    cream: "#F6DCAC",
    peach: "#FAA968",
    orange: "#F85525",
    coral: "#FF7D5C",
    steelBlue: "#19647E",
  };

  const sectionStyle = {
    backgroundColor: colors.cream,
    padding: "2rem",
    borderRadius: "0.75rem",
    boxShadow: `5px 5px 0 ${colors.teal}`,
    border: `3px dashed ${colors.orange}`,
    marginBottom: "2.5rem",
  };

  const cardStyle = {
    ...sectionStyle,
    flex: "1 1 45%",
    backgroundColor: colors.cream,
    borderLeft: `10px solid ${colors.teal}`,
    transition: "transform 0.3s ease-in-out",
    fontWeight: "520",
  };

  const linkStyle = {
    color: colors.cream,
    backgroundColor: colors.steelBlue,
    padding: "0.5rem 0.7rem",
    borderRadius: "30px",
    border: `2px solid ${colors.teal}`,
    fontWeight: "700",
    textDecoration: "none",
    boxShadow: `2px 2px 0 ${colors.orange}`,
    transition: "all 0.3s ease",
  };

  const retroFont = {
    fontFamily: "'Courier New', Courier, monospace",
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
      fontSize: "2rem",
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

  // const cf_resp = fetch('https://codeforces.com/api/user.info?handles=aashi2673&checkHistoricHandles=false');
  // console.log(cf_resp);

  // async function getUserInfo() {
  //   const cf_resp = await fetch('https://codeforces.com/api/user.info?handles=aashi2673&checkHistoricHandles=false');
  //   const data = await cf_resp.json(); // parse JSON
  //   console.log(data);
  //   console.log(data.result[0].rating)
  // }

  // getUserInfo();

  const [cfRating, setCfRating] = useState(null);
  const [cfRank, setCfRank] = useState(null);

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await fetch(
          "https://codeforces.com/api/user.info?handles=aashi2673"
        );
        const data = await response.json();
        if (data.status === "OK") {
          console.log(data.result[0]);
          setCfRating(data.result[0].rating);
          setCfRank(data.result[0].rank);
        }
      } catch (error) {
        console.error("Failed to fetch Codeforces rating:", error);
      }
    }

    getUserInfo();
  }, []);

  return (
    <div style={{...retroFont, background: `linear-gradient(${colors.peach}, ${colors.peach} 30%, ${colors.darkBlue} 60%)`, minHeight: "100vh", padding: "0",}}>
      <style>{globalStyles}</style>

      {/* Navbar */}
      <nav style={{backgroundColor: colors.darkBlue, padding: "1rem 2rem", color: colors.cream, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap",}}>
        <span style={{ textAlign: "center", fontSize: "1.5em" }}> Aashi </span>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {[
            "~/about",
            "~/experience",
            "~/projects",
            "~/education",
            "~/contact",
          ].map((section) => (
            <a key={section} href={`#${section.slice(2)}`} style={{color: colors.cream, textDecoration: "none", fontWeight: "bold",}}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      <div className="responsive-container" style={{ maxWidth: "960px", margin: "0 auto", padding: "2rem" }}>
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{fontSize: "3rem", fontWeight: "700", fontStyle: "italic", color: colors.darkBlue,}}>
            <Typewriter
              words={["Hi, I'm Aashi", "Coder", "Guitarist"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </h1>
          <p style={{fontSize: "1.2rem", color: colors.teal, fontWeight: "550",}}> Coder | Guitarist </p>
        </header>

        {/* About */}
        <section id="about" style={{...sectionStyle, marginBottom: "2rem", borderLeft: `6px solid ${colors.teal}`,}}>
          <h2 style={{fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.8rem", color: colors.orange,}}> About Me </h2>
          <p style={{lineHeight: "1.6", color: colors.darkBlue, fontWeight: "520",}} >
            I'm Aashi, a passionate computer science student who enjoys solving
            real-world problems through code.
          </p>
        </section>

        <br></br>
        {/* Experience */}
        <section id="experience" style={{ marginBottom: "2rem" }}>
          <h2 style={{fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.2rem", color: colors.orange,}}>
            Experience
          </h2>
          <div style={cardStyle}>
            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center",}}>
                <h3 style={{ fontWeight: "bold", marginBottom: "0.2rem", color: colors.darkBlue,}}>
                  Indraprastha Institute of Information Technology, Delhi -
                  Teaching Assistant
                </h3>
                <span style={{fontSize: "0.95rem",fontStyle: "italic",color: colors.orange,}}>
                  Aug 2024 – Present
                </span>
              </div>
              <p style={{fontSize: "0.9rem",color: colors.teal,marginBottom: "0.8rem",}}> New Delhi, India · 9 months </p>
              <div style={{marginLeft: "1rem",maxWidth: "650px",display: "grid",gridTemplateColumns: "1fr auto",rowGap: "0.4rem",}}>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", rowGap: "0.5rem", columnGap: "1rem", paddingLeft: "1.2rem", fontSize: "0.9rem", color: colors.darkBlue, lineHeight: "1.6",}}>
                  
                  <div>• Decision Making for Multi-robot Systems (CSE667)</div>
                  
                  <div style={{ fontStyle: "italic", color: colors.teal }}> Jan 2025 – May 2025</div>
                  
                  <div>• Introduction to Programming (CSE101)</div>
                  
                  <div style={{ fontStyle: "italic", color: colors.teal }}> Aug 2024 – Dec 2024</div>
                
                </div>
              </div>
            </div>
            <div>
              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
                }}
              >
                <h3
                  style={{ fontWeight: "bold", marginBottom: "0.2rem", color: colors.darkBlue,
                  }}
                >
                  NeenOpal Intelligent Solutions PVT LTD - Data Analyst Intern
                </h3>
                <span
                  style={{ fontSize: "0.95rem", fontStyle: "italic", color: colors.orange,
                  }}
                >
                  Jan 2024 – Apr 2024
                </span>
              </div>
              <p
                style={{ fontSize: "0.9rem", color: colors.teal, marginBottom: "0.8rem",
                }}
              >
                Bangalore, India (Remote) · 4 months
              </p>
              <ul
                style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: colors.darkBlue, lineHeight: "1.6",
                }}
              >
                <li>
                  Managed and optimized databases on the AWS cloud platform,
                  exploring blue-green deployment.
                </li>
                <li>
                  Utilized Azure Data Factory to streamline data dumping
                  processes, exploring pipelines and activities.
                </li>
                <li>
                  Analyzed over 30 reports of client’s database on Salesforce to
                  identify suitable data points.
                </li>
                <li>
                  Developed over 10 wireframe dashboards based on client’s
                  requirements.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <br></br>
        {/* Skills */}
        <section id="skills" style={{ ...sectionStyle, marginBottom: "2rem", borderLeft: `6px solid ${colors.steelBlue}`,}}>
          <h2 style={{fontSize: "1.5rem",fontWeight: "600",marginBottom: "1rem",color: colors.orange,}}> Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {[
              "JavaScript",
              "React.js",
              // "Tailwind CSS",
              "Node.js",
              "Python",
              // "Flask",
              "Go",
              "C++",
              // "Java",
              "Git & GitHub",
              // "Docker",
              "Linux",
              "SQL",
              "MongoDB",
              "Networking",
              "WebRTC",
            ].map((skill) => (
              <span key={skill} style={{ backgroundColor: colors.teal, color: colors.cream, padding: "0.4rem 0.8rem", borderRadius: "30px", fontSize: "0.9rem", fontWeight: "600",}}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <br></br>
        {/* Projects */}
        <section id="projects" style={{ marginBottom: "2rem" }}>
          <h2
            style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.2rem", color: colors.orange,
            }}
          >
            Projects
          </h2>
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "space-between",
            }}
          >
            {[
              {
                name: "FileHopP2P",
                desc: "A web-based peer-to-peer file sharing tool using WebRTC with encrypted chunked transfers.",
                link: "https://p2p-filesharing.vercel.app",
                bullets: [
                  "Enables secure, direct peer-to-peer file transfers via WebRTC data channels with chunked encryption.",
                  "Custom Node.js WebSocket signaling server with TURN fallback for robust NAT traversal.",
                  "Real-time transfer progress tracking with intuitive React UI, optimized for large files.",
                  "Deployed with custom TURN server on AWS Lightsail to ensure connectivity across restrictive networks."
                ],
              },
              {
                name: "cpuPulse",
                desc: "A  CLI tool to run arbitrary commands and sample their CPU and memory usage in real-time.",
                link: "https://github.com/Aashi-001/cpuPulse",
                bullets: [
                  "Run arbitrary commands and sample their CPU and memory usage in real-time.",
                  "Targets burst processes that evade traditional monitoring tools like ‘top‘ or ‘htop‘.",
                  "Dynamic flag support (–log, –plot) with CSV export and static performance plots.",
                  "Designed for lightweight usage benchmarking and profiling",
                ],
              },
              {
                name: "Load Balancer",
                desc: "Custom application-layer load balancer in Go with dynamic request routing and performance benchmarking.",
                link: "https://github.com/Aashi-001/Load-Balancer",
                bullets: [
                  "Built a load balancer in Go that distributes HTTP requests across multiple backend servers using round-robin and least connections strategies.",
                  // "Benchmarked performance under simulated load using concurrent clients and measured response latency and throughput.",
                  // "Implemented custom connection handling, routing logic, and graceful backend failure detection.",
                ],
              },
              {
                name: "Verdant Voyages",
                desc: "A hackathon project that rewards users for eco-conscious accommodation choices using a full-stack MERN architecture.",
                link: "https://github.com/Aashi-001/techtinkerers_hackout",
                bullets: [
                  "Team project for a hackathon (3 members)",
                  "Built eco-score logic to promote green travel",
                  "Used MongoDB, Express, React, Node.js (MERN stack)",
                ],
              },

              {
                name: "Urban Estimator",
                desc: "A machine learning project to predict housing prices using scikit-learn and a user-friendly interface built with Gradio.",
                link: "https://huggingface.co/spaces/Aashiue/Real_Estate_Price_Prediction",
                bullets: [
                  "Trained Linear Regression, Lasso, and Decision Tree models on Bangalore housing dataset",
                  "Used GridSearchCV to tune hyperparameters and boost prediction accuracy to 84%",
                  "Implemented an interactive Gradio interface for real-time price prediction by users",
                ],
              },
              // {
              //   name: "Graph Visualizer",
              //   desc: "React-based Dijkstra path visualizer with interactive node editing and shortest path animation.",
              //   link: "https://github.com/Aashi-001/visualiser",
              //   bullets: [
              //     "Frontend in React with dynamic graph editing and animation",
              //     "Implemented Dijkstra’s algorithm step-by-step",
              //     "Clean UI for educational and demonstration purposes",
              //   ],
              // },
              {
                name: "YTDownloader",
                desc: "A CLI tool to download, trim, and convert YouTube videos using `yt-dlp` and `ffmpeg`.",
                link: "https://github.com/Aashi-001/ytdownloader",
                bullets: [
                  "Downloads high-quality videos using `yt-dlp` and merges streams into MKV format",
                  "Trims videos between custom start and end times with precise `ffmpeg` control",
                  "Converts trimmed clips to MP4 with re-encoded audio for universal compatibility",
                ],
              },
              {
                name: "MyNotebook",
                desc: "A simple browser-based note-taking tool built using HTML and JavaScript with local storage support.",
                link: "https://github.com/Aashi-001/note_taking_app.github.io",
                bullets: [
                  "Built using vanilla JS, HTML, and localStorage",
                  "Create, delete, and manage notes directly in-browser",
                  "Minimal design for distraction-free usage",
                ],
              },
              {
                name: "HTTP Server (from scratch)",
                desc: "A lightweight static file server built in C, implementing core HTTP/1.0 features.",
                link: "https://github.com/Aashi-001/httpServer",
                bullets: [
                  "Built using low-level socket programming (C) without external libraries",
                  "Serves static files with proper MIME types and HTTP status responses (200, 404, etc.)",
                  "Implements basic request parsing, error handling, and multithreading",
                  "Designed based on RFC1945 for learning HTTP protocols and system programming",
                ],
              },
              {
                name: "InitMate",
                desc: "A lightweight CLI utility to automate GitHub repository setup using Python and Bash scripts.",
                link: "https://github.com/Aashi-001/shell_script_automation.github.io",
                bullets: [
                  "Automates creation and initialization of local and remote GitHub repositories",
                  "Generates standard file structure: README.md, LICENSE, and .gitignore templates",
                  "Uses a Python CLI wrapper for dynamic Git command generation and user input handling",
                  "Simplifies repetitive developer workflows by integrating Git, Bash, and Python automation",
                ],
              },
              {
                name: "Weatherify",
                desc: "A full-stack weather dashboard using OpenWeatherMap API for real-time weather updates.",
                link: "https://weatherifyui.onrender.com/",
                bullets: [
                  "Client-server structure for frontend-backend separation",
                  "Live weather fetched using OpenWeatherMap API",
                  "Deployed and styled with dynamic feedback",
                ],
              },
            ].map((proj) => (
              <div key={proj.name} className="project-card" style={{ ...cardStyle, width: "48%", boxSizing: "border-box", marginBottom: "1rem",}} >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",}}>
                  <h3 style={{fontWeight: "700",fontSize: "1.1rem",color: colors.darkBlue,margin: 0,flex: 1,}} > {proj.name}</h3>
                  <a href={proj.link} style={linkStyle} target="_blank" rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
                <p
                  style={{ fontSize: "0.95rem", color: colors.darkBlue, marginBottom: "0.6rem",
                  }}
                >
                  {proj.desc}
                </p>
                <ul
                  style={{ paddingLeft: "1.2rem", color: colors.darkBlue, fontSize: "0.9rem", lineHeight: "1.5",}} >
                  {proj.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <br></br>
        {/* College/Capstone Projects */}
        <section id="college-projects" style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.2rem", color: colors.orange,}}> Academic Projects </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "space-between",}}>
            {[
              {
                name: "Speaker Source Separation",
                desc: "A team project to isolate speakers' voices from mixed audio using classical signal processing and Random Forest classification.",
                link: "https://huggingface.co/spaces/Aashiue/speaker-source-separation",
                bullets: [
                  "Used nussl's REPET, REPET-Sim, and 2DFT algorithms to separate foreground/background signals.",
                  "Evaluated quality with PSNR, SNR, and KL Divergence metrics.",
                  "Built a Gradio demo to allow users to upload and separate audio files.",
                  "Trained a Random Forest model on extracted time-frequency features for classification.",
                ],
              },
              {
                name: "SweetPred",
                desc: "Improved and deployed an AI-based web tool for molecular sweetness prediction by integrating JSME editor and refining the UI using Flask.",
                link: "https://cosylab.iiitd.edu.in/sweetpred/",
                bullets: [
                  "Enhanced the UI of the SweetPred web app for better user experience.",
                  "Integrated JSME Molecular Editor for drawing chemical structures.",
                  "Deployed the updated version using Flask and hosted it with user-friendly access.",
                ],
              },
              {
                name: "QUIC vs TCP Performance Evaluation on Android",
                desc: "Empirical comparison of QUIC and TCP protocols for video streaming and file transfers on a rooted Android device under varied mobility and network conditions.",
                link: "https://youtu.be/xvFZjo5PgG0?si=qF-0BmHpVtvWbl5i",
                bullets: [
                  "Deployed OpenLiteSpeed server with HTTP/3 and HTTP/2 support; tested playback and download workloads over 4G and WiFi while sitting and walking.",
                  "Measured CPU usage, memory consumption, rebuffer metrics, and analyzed protocol fallback from QUIC to TCP using adb, tcpdump, and DevTools.",
                  "Discovered trade-offs: QUIC enabled faster playback in stable networks but incurred higher CPU usage and fallback under mobile 4G conditions.",
                ],
              },
            ].map((proj) => (
              <div key={proj.name} className="project-card" style={{ ...cardStyle, width: "48%", boxSizing: "border-box", marginBottom: "1rem",}}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",}}>
                  <h3 style={{ fontWeight: "700", fontSize: "1.1rem", color: colors.darkBlue, margin: 0, flex: 1, }}> {proj.name}</h3>
                  <a href={proj.link} style={linkStyle} target="_blank" rel="noopener noreferrer"> View Project → </a>
                </div>
                <p style={{ fontSize: "0.95rem", color: colors.darkBlue, marginBottom: "0.6rem",}}> {proj.desc}</p>
                <ul style={{ paddingLeft: "1.2rem", color: colors.darkBlue, fontSize: "0.9rem", lineHeight: "1.5", }}>
                  {proj.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <br></br>
        {/* Education */}
        <section id="education" style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.2rem", color: colors.orange, }}> Education </h2>
          <div style={cardStyle}>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}> 
                <h3 style={{ fontWeight: "bold", marginBottom: "0.3rem", color: colors.darkBlue,   }} > Indraprastha Institute of Information Technology, Delhi </h3>
                <span style={{ fontSize: "0.95rem", fontStyle: "italic", color: colors.teal,   }} >   2024 – 2026 </span>
              </div>
              <p style={{fontSize: "0.95rem", color: colors.darkBlue, marginBottom: "0.3rem",  }}> Master of Technology, Computer Science and Engineering</p>
              <p style={{fontSize: "0.9rem",fontStyle: "italic",color: colors.teal, }}> CGPA: 8.31</p>
            </div>
            <div>
              <div
                style={{display: "flex",justifyContent: "space-between",alignItems: "center",
                }}
              >
                <h3
                  style={{fontWeight: "bold",marginBottom: "0.3rem",color: colors.darkBlue,
                  }}
                >
                  University Institute of Engineering and Technology, Panjab
                  University, Chandigarh
                </h3>
                <span
                  style={{fontSize: "0.95rem",fontStyle: "italic",color: colors.teal,
                  }}
                >
                  2020 – 2024
                </span>
              </div>
              <p
                style={{fontSize: "0.95rem",color: colors.darkBlue,marginBottom: "0.3rem",
                }}
              >
                Bachelor of Engineering, Computer Science and Engineering
              </p>
              <p
                style={{ fontSize: "0.9rem", fontStyle: "italic", color: colors.teal,
                }}
              >
                CGPA: 8.97
              </p>
            </div>
          </div>
        </section>
        <br></br>
        {/* Extra-Curriculars & Achievements */}
        <section
          id="extras"
          style={{ ...sectionStyle, marginBottom: "2rem", borderLeft: `6px solid ${colors.teal}`, fontWeight: "550",}} >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: colors.orange,}}> Extra-Curriculars & Achievements </h2>
          <ul style={{ paddingLeft: "1.2rem", fontSize: "0.95rem", color: colors.darkBlue, lineHeight: "1.7",}}>
            <li>
              Co-Convener of Euphoria UIET – official music committee at UIET
              Panjab University.
            </li>
            <li>Active member of AudioBytes, IIIT Delhi.</li>
            <li>
              District Topper in Class 12 Science Stream with 100/100 in
              Mathematics.
            </li>
            <li>
              Represented Haryana at the 25th National Children Science
              Congress, 2017.
            </li>
            <li>
              Codeforces Rating: 1035 | Solved 800+ DSA problems in C++ and 100+
              SQL problems on LeetCode/GFG/HackerRank.
            </li>
          </ul>
        </section>
        <br></br>
        {/* Hobbies */}
        <section
          id="hobbies"
          style={{ ...sectionStyle, marginBottom: "2rem", borderLeft: `6px solid ${colors.peach}`, // fontWeight: "550"
          }}
        >
          <h2 style={{fontSize: "1.5rem",fontWeight: "600",marginBottom: "1rem",color: colors.orange,}}> Hobbies & Interests </h2>
          <ul style={{paddingLeft: "1.2rem",fontSize: "0.95rem",color: colors.darkBlue,lineHeight: "1.7",fontWeight: "550",}}>
            <li> Playing and listening to music.</li>
            <li> Watching cricket (king!) and tennis.</li>
            <li> Reading history and fictions.</li>
            <li> Learning about new cultures and languages.</li>
          </ul>
        </section>

        {/* Coding Profiles */}
        <section id="coding-profiles" style={{ textAlign: "center", marginTop: "2rem" }}>
          <h2 style={{fontSize: "1.5rem",fontWeight: "600",marginBottom: "1rem",color: colors.orange,}}> Coding Profiles </h2>
          <div style={{display: "flex",justifyContent: "center",gap: "2rem",flexWrap: "wrap",}}>
            <a href="https://leetcode.com/aashi_uiet" style={linkStyle} target="_blank" rel="noopener noreferrer">LeetCode (900+ solved)</a>
            <a href="https://codeforces.com/profile/aashi2673" style={linkStyle} target="_blank" rel="noopener noreferrer"> Codeforces ({cfRank} - {cfRating ?? "Loading..."})</a>
            <a href="https://www.hackerrank.com/aashi2673" style={linkStyle} target="_blank" rel="noopener noreferrer"> HackerRank (5⭐️ SQL)</a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: colors.orange,}}> Get in Touch</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap",}}>
            <a href="mailto:aashidenod@gmail.com" style={linkStyle}> Email </a>
            <a href="https://github.com/Aashi-001" style={linkStyle}> GitHub</a>
            <a href="https://www.linkedin.com/in/aashi-38621919b/" style={linkStyle}> LinkedIn</a>
          </div>
        </section>

        <footer style={{marginTop: "3rem", textAlign: "center", fontSize: "0.95rem", color: colors.cream,}}>
          &copy; {new Date().getFullYear()} Aashi. Designed with a retro flair
          🎸
        </footer>
      </div>
    </div>
  );
}