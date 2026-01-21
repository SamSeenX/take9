import "./style.css";
import { GameEngine } from "./engine/Game";
import { ScreenManager } from "./ui/ScreenManager";
import { SoundManager } from "./ui/SoundManager";
import { themes } from "./data/themes";

const app = document.querySelector("#app");
const game = new GameEngine();
const soundManager = new SoundManager();
const ui = new ScreenManager(app, soundManager);

// Global interaction listener to unlock AudioContext
const unlockAudio = async () => {
  await soundManager.resume();
  window.removeEventListener("click", unlockAudio);
  window.removeEventListener("keydown", unlockAudio);
};
window.addEventListener("click", unlockAudio);
window.addEventListener("keydown", unlockAudio);

// Helper to update SEO Meta Tags
const updateMetadata = (theme) => {
  const baseTitle = "Take 9 - Personality Test";
  const themeTitle = theme ? `Take 9: ${theme.title}` : baseTitle;
  const themeDesc = theme
    ? theme.description
    : "Discover your digital soul in 9 questions. A retro-futuristic personality assessment.";

  document.title = themeTitle;

  // Update standard description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", themeDesc);

  // Update OG meta tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", themeTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", themeDesc);
};

// Initializer
const initApp = () => {
  const path = window.location.pathname.replace(/^\/|\/$/g, ""); // strip slashes
  const themeByPath = themes.find((t) => t.id === path);

  if (themeByPath) {
    handleThemeSelect(themeByPath, true);
  } else {
    updateMetadata(null); // Reset to default
    // Show Theme Selector
    ui.showStart(themes, handleThemeSelect);
  }
};

const handleGoHome = () => {
  if (window.location.pathname !== "/") {
    window.history.pushState({}, "", "/");
  }
  updateMetadata(null);
  ui.showStart(themes, handleThemeSelect);
};

const handleThemeSelect = async (theme, isInitial = false) => {
  // Ensure Audio Context is resumed (user gesture) - skip on initial load to avoid warning
  if (!isInitial) {
    await soundManager.resume();
  }

  // Show Loading
  ui.showLoading();

  // Update Metadata
  updateMetadata(theme);

  // Update URL if needed (for navigation or manual selection)
  if (window.location.pathname !== `/${theme.id}`) {
    window.history.pushState({}, "", `/${theme.id}`);
  }

  try {
    // Load the theme data chunk
    const module = await theme.loader();
    const themeData = module.default; // Assuming default export

    // Init Game with chosen theme data
    const firstQuestion = game.init(themeData, theme.title);
    ui.showQuestion(
      firstQuestion,
      game.currentStep,
      themes,
      handleAnswer,
      handleGoHome,
    );
  } catch (error) {
    console.error("Failed to load theme:", error);
    // Could show error screen here
    ui.showStart(themes, handleThemeSelect); // Go back for now
  }
};

const handleAnswer = (index) => {
  const result = game.submitAnswer(index);
  if (!result) return;

  if (result.completed) {
    ui.showResult(
      result.result,
      result.themeTitle,
      themes,
      handleThemeSelect,
      initApp,
      handleGoHome,
    );
  } else {
    ui.showQuestion(
      result.question,
      game.currentStep,
      themes,
      handleAnswer,
      handleGoHome,
    );
  }
};

// Start
initApp();
