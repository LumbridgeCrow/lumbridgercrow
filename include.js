// const bannerColor = "#b84041";
document.getElementById("forkme_banner").style.display="none";

// document.getElementsByClassName("ribbon-inner")[0].children[0].style.backgroundColor=bannerColor;
// document.getElementsByClassName("ribbon-inner")[0].children[1].style.backgroundColor=bannerColor;
const style = document.createElement("style");
style.innerHTML = `
  body {
    background-color: #fdf6e3 !important;
    color: #333 !important;
  }

  header .inner {
    background: #004488 !important;
    background-image: none !important;
  }

  header h1, header h2 {
    background: #003366 !important;
    background-image: none !important;
    color: #f8f8f8 !important;
  }

  header span.ribbon-inner,
  footer span.ribbon-inner {
    background-color: #990033 !important;
    background-image: none !important;
  }

  header:before, header:after {
    background: #990033 !important;
    background-image: none !important;
  }

  .ribbon {
    background-color: #336699 !important;
    background-image: none !important;
  }

  a {
    color: #0066cc !important;
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
