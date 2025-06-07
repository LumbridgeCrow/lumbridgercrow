// const bannerColor = "#b84041";

// document.getElementsByClassName("ribbon-inner")[0].children[0].style.backgroundColor=bannerColor;
// document.getElementsByClassName("ribbon-inner")[0].children[1].style.backgroundColor=bannerColor;


// Customize Merlot theme colors here
const themeColors = {
  bannerColor: '#0066cc',     // Example: blue banner
  headerColor: '#003366',     // Example: darker blue header background
  backgroundColor: '#494035', // Example: solarized light background
  textColor: '#333333'        // Example: dark gray text
};

function applyMerlotThemeOverrides(colors) {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("forkme_banner").style.display="none";
    document.getElementsByClassName("right-tail")[0].style.display = "none";
    document.getElementsByClassName("left-tail")[0].style.display = "none";
    document.getElementsByClassName("inner")[0].style.display = "none";
    // Background color and text color
    document.body.style.backgroundColor = colors.backgroundColor;
    document.body.style.color = colors.textColor;


    const audio = document.createElement('audio');
    audio.src = 'https://oldschool.runescape.wiki/images/Newbie_Melody.ogg?8dcd8';
    audio.loop = true; // Loop the music
    audio.volume = 0.5; // Optional: set volume (0.0 to 1.0)
    audio.style.display = 'none'; // Keep it hidden

    // Required for autoplay on some browsers — play after user interaction
    const startAudio = () => {
      audio.play().catch(e => console.warn("Autoplay failed:", e));
      document.removeEventListener('click', startAudio);
    };

    document.body.appendChild(audio);
    startAudio();
    document.addEventListener('click', startAudio);
    
    // // Header ribbon outer (span.ribbon-inner inside header and footer)
    // document.querySelectorAll('header span.ribbon-inner, footer span.ribbon-inner').forEach(el => {
    //   el.style.backgroundColor = colors.bannerColor;
    // });

    // // Header H1 and H2
    // document.querySelectorAll('header h1, header h2').forEach(el => {
    //   el.style.backgroundColor = colors.headerColor;
    // });

    // // Optional: main content header levels
    // document.querySelectorAll('.header-level-1, .header-level-2').forEach(el => {
    //   el.style.color = colors.headerColor;
    // });

    // // Optional: links
    // document.querySelectorAll('a').forEach(el => {
    //   el.style.color = colors.bannerColor;
    // });
  });
}

applyMerlotThemeOverrides(themeColors);
