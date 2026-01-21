export class GameEngine {
  constructor() {
    this.currentStep = 0;
    this.maxSteps = 9;
    this.currentNodeId = null;
    this.history = []; // Stores traits collected
    this.started = false;
    this.data = null; // Will hold the current theme data
    this.currentThemeTitle = "";
  }

  init(themeData, themeTitle) {
    this.data = themeData;
    this.currentThemeTitle = themeTitle || "Unknown Protocol";
    // Pick a random start node
    const starts = this.data.startNodes;
    this.currentNodeId = starts[Math.floor(Math.random() * starts.length)];
    this.started = true;
    this.currentStep = 1;
    this.history = [];
    console.log("Game Initialized. Start Node:", this.currentNodeId);
    return this.getCurrentQuestion();
  }

  getCurrentQuestion() {
    if (!this.currentNodeId || !this.data) return null;
    return this.data.nodes[this.currentNodeId];
  }

  submitAnswer(optionIndex) {
    const question = this.getCurrentQuestion();
    if (!question) return null;

    const option = question.options[optionIndex];
    if (!option) {
      console.error("Invalid option index:", optionIndex);
      return null;
    }

    // Collect traits
    if (option.traits) {
      this.history.push(...option.traits);
    }

    // Move to next node
    this.currentNodeId = option.next;
    this.currentStep++;

    // Check end condition
    if (this.currentStep > this.maxSteps || this.currentNodeId === "end") {
      return {
        completed: true,
        result: this.calculateResult(),
        themeTitle: this.currentThemeTitle,
      };
    }

    return { completed: false, question: this.getCurrentQuestion() };
  }

  calculateResult() {
    // Logic: Count trait frequency
    const traitCounts = {};
    this.history.forEach((trait) => {
      traitCounts[trait] = (traitCounts[trait] || 0) + 1;
    });

    console.log("Traits collected:", traitCounts);

    // Determine winner
    // If we have precise mappings in results, we try to match the highest trait count to a result key
    const results = this.data.results;
    const resultKeys = Object.keys(results);

    let winnerKey = resultKeys[0];
    let maxScore = -1;

    // Iterating through result keys to see which one has the most collected traits
    // (Assuming traits map 1:1 to result keys e.g. "gryffindor" trait -> "gryffindor" result)
    // If traits are abstract (e.g. "bold"), this simple logic might need mapping.
    // For now, we assume the traits include the result key or are mapped simply.

    // Better Logic:
    // Count hits for each result key based on traits.
    // If a trait matches a result key, +1.

    let scores = {};
    resultKeys.forEach((key) => (scores[key] = 0));

    this.history.forEach((trait) => {
      if (scores[trait] !== undefined) {
        scores[trait]++;
      } else {
        // Handle mapping if needed, for CORE we rely on random/mock logic previously
        // For now, if no direct match, we might skip or have backup logic.
        if (this.data === "core") {
          // core traits like 'bold' don't map directly to 'cyber_sage' without logic
          // fallback to random if no scores
        }
      }
    });

    // Find max
    Object.keys(scores).forEach((key) => {
      if (scores[key] > maxScore) {
        maxScore = scores[key];
        winnerKey = key;
      }
    });

    // Fallback for ties or 0 scores (Core theme uses abstract traits)
    if (maxScore <= 0) {
      winnerKey = resultKeys[Math.floor(Math.random() * resultKeys.length)];
    }

    return results[winnerKey];
  }

  getMaxSteps() {
    return this.maxSteps;
  }
}
