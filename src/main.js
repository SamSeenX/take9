import "./style.css";
import { GameEngine } from "./engine/Game";
import { ScreenManager } from "./ui/ScreenManager";
import { SoundManager } from "./ui/SoundManager";
import { themes } from "./data/themes";

const app = document.querySelector("#app");
const game = new GameEngine();
const soundManager = new SoundManager();
const ui = new ScreenManager(app, soundManager);

// Initializer
const initApp = () => {
  // Show Theme Selector
  ui.showStart(themes, handleThemeSelect);
};

const handleThemeSelect = async (theme) => {
  // Ensure Audio Context is resumed (first interaction usually)
  if (soundManager.ctx.state === "suspended") {
    soundManager.ctx.resume();
  }

  // Show Loading
  ui.showLoading();

  try {
    // Load the theme data chunk
    const module = await theme.loader();
    const themeData = module.default; // Assuming default export

    // Init Game with chosen theme data
    const firstQuestion = game.init(themeData);
    ui.showQuestion(firstQuestion, game.currentStep, handleAnswer);
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
    ui.showResult(result.result, initApp); // Restart goes back to Theme Selector
  } else {
    ui.showQuestion(result.question, game.currentStep, handleAnswer);
  }
};

// Start
initApp();
