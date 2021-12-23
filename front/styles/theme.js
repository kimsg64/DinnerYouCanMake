const size = {
  // ~767px 모바일
  mobile: "800px",
  // 768px~1023px 태블릿
  tablet: "1024px",
  // 1024~ 데스크탑
  desktop: "1800px",
};

const mode = {
  light: {
    nav: {
      bg: "white",
      bgOnHover: "#e66767",
      bgOnActive: "#ff6b6b",
      font: "#222f3e",
      fontOnHover: "white",
      fontOnActive: "white",
      border: "#e66767",
      others: "#ffb8b8",
    },
    header: {
      font: "white",
    },
    content: {
      bg: "white",
      font: "#222f3e",
      others: "rgba(75, 207, 250, 0.2)",
    },
  },
  dark: {
    nav: {
      bg: "#222f3e",
      bgOnHover: "#e66767",
      bgOnActive: "#ff6b6b",
      font: "#a4b0be",
      fontOnHover: "#222f3e",
      fontOnActive: "#222f3e",
      border: "#222f3e",
      others: "#8395a7",
    },
    header: {
      font: "#a4b0be",
    },
    content: {
      bg: "#596275",
      font: "white",
      others: "#e66767",
    },
  },
};

const theme = {
  size: {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(max-width: ${size.desktop})`,
  },
  mode,
};

export default theme;
