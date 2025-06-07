// const bannerColor = "#b84041";
document.getElementById("forkme_banner").style.display="none";

// document.getElementsByClassName("ribbon-inner")[0].children[0].style.backgroundColor=bannerColor;
// document.getElementsByClassName("ribbon-inner")[0].children[1].style.backgroundColor=bannerColor;

const theme = {
  background: "#1b1b1b",
  text: "#f0f0f0",
  headerBg: "#202a44", // banner body (shield)
  shieldBg: "#0f172a", // central box
  shieldText: "#e0e0ff",
  ribbonBg: "#6b0000",  // red side ribbons
  githubRibbon: "#800000", // top-left "Fork me" banner
  link: "#9dcaff"
};

const style = document.createElement("style");
style.innerHTML = `
  :root {
    --bg-color: ${theme.background};
    --text-color: ${theme.text};
    --header-bg: ${theme.headerBg};
    --shield-bg: ${theme.shieldBg};
    --shield-text: ${theme.shieldText};
    --ribbon-bg: ${theme.ribbonBg};
    --link-color: ${theme.link};
    --github-ribbon: ${theme.githubRibbon};
  }

  body {
    background-color: var(--bg-color) !important;
    color: var(--text-color) !important;
  }

  a {
    color: var(--link-color) !important;
  }

  header .inner {
    background: var(--header-bg) !important;
    background-image: none !important;
  }

  header h1, header h2 {
    background: var(--shield-bg) !important;
    background-image: none !important;
    color: var(--shield-text) !important;
  }

  header span.ribbon-inner,
  footer span.ribbon-inner {
    background-color: var(--ribbon-bg) !important;
    background-image: none !important;
  }

  header:before,
  header:after {
    background: var(--ribbon-bg) !important;
    background-image: none !important;
  }

  .ribbon {
    background-color: var(--github-ribbon) !important;
    background-image: none !important;
  }

  /* Optional: softer borders & shadows for shield feel */
  header h1, header h2 {
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
`;
document.head.appendChild(style);


// // Customize Merlot theme colors here
// const themeColors = {
//   bannerColor: '#0066cc',     // Example: blue banner
//   headerColor: '#003366',     // Example: darker blue header background
//   backgroundColor: '#fdf6e3', // Example: solarized light background
//   textColor: '#333333'        // Example: dark gray text
// };

// function applyMerlotThemeOverrides(colors) {
//   document.addEventListener('DOMContentLoaded', () => {
//     // Background color and text color
//     document.body.style.backgroundColor = colors.backgroundColor;
//     document.body.style.color = colors.textColor;

//     // Header ribbon outer (span.ribbon-inner inside header and footer)
//     document.querySelectorAll('header span.ribbon-inner, footer span.ribbon-inner').forEach(el => {
//       el.style.backgroundColor = colors.bannerColor;
//     });

//     // Header H1 and H2
//     document.querySelectorAll('header h1, header h2').forEach(el => {
//       el.style.backgroundColor = colors.headerColor;
//     });

//     // Optional: main content header levels
//     document.querySelectorAll('.header-level-1, .header-level-2').forEach(el => {
//       el.style.color = colors.headerColor;
//     });

//     // Optional: links
//     document.querySelectorAll('a').forEach(el => {
//       el.style.color = colors.bannerColor;
//     });
//   });
// }

// applyMerlotThemeOverrides(themeColors);
