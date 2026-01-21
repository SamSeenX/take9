import { Typewriter } from "./Typewriter";
import { ThemeSelector } from "./ThemeSelector";

export class ScreenManager {
  constructor(appElement, soundManager) {
    this.app = appElement;
    this.soundManager = soundManager;
    this.typewriter = new Typewriter(30);
  }

  async playTypeSound() {
    if (this.soundManager) this.soundManager.playType();
  }

  async playClickSound() {
    if (this.soundManager) this.soundManager.playClick();
  }

  async playHoverSound() {
    if (this.soundManager) this.soundManager.playHover();
  }

  showLoading() {
    this.app.innerHTML = `
        <div class="screen loading-screen">
            <h2 class="glitch" data-text="LOADING...">LOADING...</h2>
            <div class="terminal-text">Accessing Secure Archives...</div>
        </div>
      `;
  }

  async showStart(themes, onSelectTheme) {
    this.app.innerHTML = `
      <div class="screen start-screen">
        <h1 class="glitch" data-text="TAKE 9">TAKE 9</h1>
        <div id="intro-text" class="terminal-text"></div>
        <div id="theme-selector-container"></div>
      </div>
    `;

    const introText =
      "Identity Verification Required.\nSelect Assessment Protocol:";
    const textContainer = this.app.querySelector("#intro-text");

    await this.typewriter.type(textContainer, introText, () =>
      this.playTypeSound(),
    );

    const container = this.app.querySelector("#theme-selector-container");

    // Fade in Effect
    container.style.opacity = "0";
    container.style.transition = "opacity 1s ease";

    const onThemeClick = (theme) => {
      this.playClickSound();
      onSelectTheme(theme);
    };

    const selector = new ThemeSelector(container, themes, onThemeClick);
    selector.render();

    // Attach hover sounds to dynamic buttons
    container.querySelectorAll(".theme-card").forEach((btn) => {
      btn.addEventListener("mouseenter", () => this.playHoverSound());
    });

    setTimeout(() => {
      container.style.opacity = "1";
    }, 100);
  }

  async showQuestion(questionData, step, onAnswer) {
    this.app.innerHTML = `
      <div class="screen game-screen">
        <div class="header">STATUS: ANALYZING [ ${step} / 9 ]</div>
        <div id="question-text" class="question-text"></div>
        <div id="options-container" class="options-grid"></div>
      </div>
    `;

    const qEl = this.app.querySelector("#question-text");
    await this.typewriter.type(qEl, questionData.text, () =>
      this.playTypeSound(),
    );

    const optionsContainer = this.app.querySelector("#options-container");
    questionData.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.textContent = `> ${opt.text}`;
      btn.className = "option-btn";

      setTimeout(() => {
        optionsContainer.appendChild(btn);
        btn.addEventListener("mouseenter", () => this.playHoverSound());
        btn.addEventListener("click", () => {
          this.playClickSound();
          onAnswer(index);
        });
        this.playTypeSound(); // Sound on button appear
      }, index * 200);
    });
  }

  async showResult(result, onRestart) {
    this.app.innerHTML = `
      <div class="screen result-screen">
        <h2>ANALYSIS COMPLETE</h2>
        <h1 id="result-title" class="result-title"></h1>
        <div id="result-desc" class="result-desc"></div>
        <button id="restart-btn" style="display:none; margin-top: 2rem;">[ REBOOT SYSTEM ]</button>
      </div>
    `;

    await this.typewriter.type(
      this.app.querySelector("#result-title"),
      result.title,
      () => this.playTypeSound(),
    );
    await this.typewriter.type(
      this.app.querySelector("#result-desc"),
      result.description,
      () => this.playTypeSound(),
    );

    const btn = this.app.querySelector("#restart-btn");
    btn.style.display = "inline-block";
    btn.addEventListener("mouseenter", () => this.playHoverSound());
    btn.addEventListener("click", () => {
      this.playClickSound();
      onRestart();
    });
  }
}
