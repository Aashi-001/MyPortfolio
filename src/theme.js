export const colors = {
  darkBlue: "#000000ff",
  teal: "#2f2f2fff",
  cream: "#272727ff",
  peach: "#000000ff",
  orange: "#33FF33",
  coral: "#ffffffff",
  steelBlue: "#19647E",
};

export const sectionStyle = {
  backgroundColor: colors.cream,
  padding: "2rem",
  borderRadius: "0.75rem",
  boxShadow: `5px 5px 0 #33FF33`,
  marginBottom: "2.5rem",
};

export const cardStyle = {
  ...sectionStyle,
  flex: "1 1 45%",
  backgroundColor: colors.cream,
  transition: "transform 0.3s ease-in-out",
  fontWeight: "520",
};

export const linkStyle = {
  color: "white",
  backgroundColor: colors.steelBlue,
  padding: "0.5rem 0.7rem",
  borderRadius: "30px",
  fontWeight: "700",
  textDecoration: "none",
  boxShadow: `2px 2px 0 ${colors.coral}`,
  transition: "all 0.3s ease",
};

export const retroFont = {
  fontFamily: "'Courier New', Courier, monospace, Fira Code",
};

export const globalStyles = `
  html { scroll-behavior: smooth; }
    @keyframes rainbowShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .rainbow-text {
      background: linear-gradient(135deg, #ff5f6d, #ffc371, #47e891, #42a5f5, #7e57c2);
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
