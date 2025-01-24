const themes = ["default", "noir", "ocean"]; // Add all available themes here
let currentIndex = localStorage.getItem("themeIndex") ? parseInt(localStorage.getItem("themeIndex")) : 0;

const updateTheme = () => {
  const theme = themes[currentIndex];
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("current-theme").textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
  localStorage.setItem("themeIndex", currentIndex);
};

document.getElementById("switch-theme").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % themes.length;
  updateTheme();
});

updateTheme();