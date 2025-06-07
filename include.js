// const bannerColor = "#b84041";
document.getElementById("forkme_banner").style.display="none";

// document.getElementsByClassName("ribbon-inner")[0].children[0].style.backgroundColor=bannerColor;
// document.getElementsByClassName("ribbon-inner")[0].children[1].style.backgroundColor=bannerColor;
// Define your colors in JS
const theme = {
  background: "#fdf6e3",
  text: "#333333",
  headerBg: "#004488",
  shieldBg: "#003366",
  shieldText: "#f8f8f8",
  ribbonBg: "#990033",
  link: "#0066cc",
  githubRibbon: "#336699"
};

// Create a <style> block with CSS variables and use them
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

  header:before, header:after {
    background: var(--ribbon-bg) !important;
    background-image: none !important;
  }

  .ribbon {
    background-color: var(--github-ribbon) !important;
    background-image: none !important;
  }

  a {
    color: var(--link-color) !important;
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
