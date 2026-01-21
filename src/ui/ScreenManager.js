import { Typewriter } from "./Typewriter";
import { ThemeSelector } from "./ThemeSelector";
import { CertificateGenerator } from "./CertificateGenerator";

export class ScreenManager {
  constructor(appElement, soundManager) {
    this.app = appElement;
    this.soundManager = soundManager;
    this.typewriter = new Typewriter(30);
  }

  // Helper to inject script-based ads into a container
  injectAd(container) {
    if (!container) return;
    container.innerHTML = ""; // Clear placeholder

    // Create config script
    const scriptConfig = document.createElement("script");
    scriptConfig.type = "text/javascript";
    scriptConfig.text = `
        atOptions = {
            'key' : '09fff31257b4407bf1174069e75b969c',
            'format' : 'iframe',
            'height' : 60,
            'width' : 468,
            'params' : {}
        };
    `;

    // Create invoke script
    const scriptInvoke = document.createElement("script");
    scriptInvoke.type = "text/javascript";
    scriptInvoke.src =
      "//www.highperformanceformat.com/09fff31257b4407bf1174069e75b969c/invoke.js";

    container.appendChild(scriptConfig);
    container.appendChild(scriptInvoke);
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

  async showQuestion(questionData, step, themes, onAnswer, onHome) {
    this.app.innerHTML = `
      <div class="screen game-screen">
        <div class="header-nav">
            <button id="home-link" class="terminal-link">[ BACK TO TERMINALS ]</button>
            <div class="header">STATUS: ANALYZING [ ${step} / 9 ]</div>
        </div>
        <div class="theme-context">
            <div id="theme-display-title" class="theme-context-title">PROTOCOL: UNKNOWN</div>
            <div id="theme-display-desc" class="theme-context-desc">Initializing assessment parameters...</div>
        </div>
        <div id="question-text" class="question-text"></div>
        <div id="options-container" class="options-grid"></div>
        <div class="ad-container" id="ad-question-bottom">
        </div>
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

    const homeBtn = this.app.querySelector("#home-link");
    homeBtn.addEventListener("click", () => {
      this.playClickSound();
      if (onHome) onHome();
    });

    // Set theme context if available
    const themeId = window.location.pathname.replace(/^\/|\/$/g, "");
    const currentTheme = themes.find((t) => t.id === themeId);
    if (currentTheme) {
      this.app.querySelector("#theme-display-title").textContent =
        `PROTOCOL: ${currentTheme.title.toUpperCase()}`;
      this.app.querySelector("#theme-display-desc").textContent =
        currentTheme.description;
    }
  }

  async showResult(
    result,
    themeTitle,
    allThemes,
    onSelectTheme,
    onRestart,
    onHome,
  ) {
    this.app.innerHTML = `
      <div class="screen result-screen">
        <div class="header-nav" style="width: 100%;">
            <button id="home-link-res" class="terminal-link">[ BACK TO TERMINALS ]</button>
            <h2>ANALYSIS COMPLETE</h2>
        </div>
        <div class="theme-context" style="border-left-color: var(--color-accent); opacity: 0.9;">
            <div id="theme-display-title-res" class="theme-context-title">PROTOCOL: ${themeTitle.toUpperCase()}</div>
        </div>
        <h1 id="result-title" class="result-title"></h1>
        <div id="result-desc" class="result-desc"></div>
        
        <!-- Ad Slot: Result Page (High Visibility) -->
        <div class="ad-container" id="ad-result-bottom">
        </div>

        <div class="action-buttons" style="display:flex; flex-wrap:wrap; justify-content:center; gap: 1rem; margin-top: 2rem;">
            <button id="download-btn">[ DOWNLOAD ID CARD ]</button>
            <button id="share-x-btn" style="display:none;">[ POST TO X ]</button>
            <button id="share-fb-btn" style="display:none;">[ SHARE FB ]</button>
            <button id="restart-btn" style="display:none;">[ REBOOT SYSTEM ]</button>
            <button id="bmc-btn" style="display:none; color: var(--color-accent); border-color: var(--color-accent);">[ BUY ME A COFFEE ]</button>
        </div>

        <div class="suggestions-section" style="margin-top: 1.5rem; border-top: 1px solid #008f11; padding-top: 1rem;">
            <div class="terminal-text" style="color: #008f11; margin-bottom: 1rem; font-size: 1rem;">OTHER AVAILABLE PROTOCOLS:</div>
            <div id="suggestions-grid" class="suggestions-grid"></div>
        </div>
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

    // Suggestions Logic
    const suggestionsGrid = this.app.querySelector("#suggestions-grid");
    const currentThemeId =
      window.location.pathname.replace(/^\/|\/$/g, "") || "core";
    const others = allThemes
      .filter((t) => t.id !== currentThemeId)
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);

    others.forEach((t) => {
      const card = document.createElement("div");
      card.className = "suggestion-card";
      card.innerHTML = `
            <div class="card-header">
                <h3>${t.title}</h3>
                <span class="card-arrow">></span>
            </div>
            <p>${t.description}</p>
        `;
      card.addEventListener("click", () => {
        this.playClickSound();
        onSelectTheme(t);
      });
      card.addEventListener("mouseenter", () => this.playHoverSound());
      suggestionsGrid.appendChild(card);
    });

    // Inject live ad
    this.injectAd(this.app.querySelector("#ad-result-bottom"));

    const btn = this.app.querySelector("#restart-btn");
    const xBtn = this.app.querySelector("#share-x-btn");
    const fbBtn = this.app.querySelector("#share-fb-btn");
    const dlBtn = this.app.querySelector("#download-btn");
    const bmcBtn = this.app.querySelector("#bmc-btn");

    [btn, xBtn, fbBtn, dlBtn, bmcBtn].forEach((b) =>
      b.classList.add("btn-small"),
    );

    // Show buttons
    btn.style.display = "inline-block";
    xBtn.style.display = "inline-block";
    fbBtn.style.display = "inline-block";
    bmcBtn.style.display = "inline-block";

    // Download Logic
    dlBtn.addEventListener("mouseenter", () => this.playHoverSound());
    dlBtn.addEventListener("click", async () => {
      this.playClickSound();
      dlBtn.textContent = "[ GENERATING... ]";
      try {
        const dataUrl = await CertificateGenerator.generate(result, themeTitle);
        const link = document.createElement("a");
        link.download = `take9-identity-${Date.now()}.png`;
        link.href = dataUrl;
        link.click();
        dlBtn.textContent = "[ DOWNLOAD ID CARD ]";
      } catch (e) {
        console.error(e);
        dlBtn.textContent = "[ DATA CORRUPT ]";
      }
    });

    // Restart Logic
    btn.addEventListener("mouseenter", () => this.playHoverSound());
    btn.addEventListener("click", () => {
      this.playClickSound();
      onRestart();
    });

    // Share Logic
    const shareText = `I got: ${result.title} - ${result.description}\nDiscover your digital soul:`;
    const shareUrl = "https://t9.samseen.dev/"; // Hardcoded production URL

    // X (Twitter)
    xBtn.addEventListener("mouseenter", () => this.playHoverSound());
    xBtn.addEventListener("click", () => {
      this.playClickSound();
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
      window.open(url, "_blank");
    });

    // Facebook
    fbBtn.addEventListener("mouseenter", () => this.playHoverSound());
    fbBtn.addEventListener("click", () => {
      this.playClickSound();
      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
      window.open(url, "_blank");
    });

    const homeBtnRes = this.app.querySelector("#home-link-res");
    homeBtnRes.addEventListener("click", () => {
      this.playClickSound();
      if (onHome) onHome();
    });

    // BMC Logic
    bmcBtn.addEventListener("mouseenter", () => this.playHoverSound());
    bmcBtn.addEventListener("click", () => {
      this.playClickSound();
      window.open("https://buymeacoffee.com/samseen", "_blank");
    });
  }
}
