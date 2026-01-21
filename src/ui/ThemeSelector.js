export class ThemeSelector {
  constructor(container, themes, onSelect) {
    this.container = container;
    this.themes = themes;
    this.onSelect = onSelect;
  }

  render() {
    this.container.innerHTML = `
      <div class="theme-selector-grid">
        ${this.themes
          .map(
            (theme) => `
          <button class="theme-card" data-id="${theme.id}">
            <h3>${theme.title}</h3>
            <p>${theme.description}</p>
          </button>
        `,
          )
          .join("")}
      </div>
    `;

    // Bind events
    this.container.querySelectorAll(".theme-card").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const theme = this.themes.find((t) => t.id === id);
        this.onSelect(theme);
      });
    });
  }
}
