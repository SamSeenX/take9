export default {
  startNodes: ["s1_origin"],
  nodes: {
    s1_origin: {
      text: "The hero falls at your feet. The crowd screams. They call you a monster. You smile because...",
      options: [
        {
          text: "They finally understand who is in charge.",
          next: "s2_method",
          traits: ["mastermind"],
        },
        {
          text: "The hypocrisy of their 'hero' is exposed.",
          next: "s2_method",
          traits: ["fallen"],
        },
        { text: "It was fun.", next: "s2_method", traits: ["chaos"] },
        { text: "I was hungry.", next: "s2_method", traits: ["beast"] },
      ],
    },
    s2_method: {
      text: "Your fortress is built. What is its foundation?",
      options: [
        {
          text: "Logic. A perfect system with no flaws.",
          next: "s3_minion",
          traits: ["mastermind"],
        },
        {
          text: "Pain. Every brick is a memory of betrayal.",
          next: "s3_minion",
          traits: ["fallen"],
        },
        {
          text: "Chance. It shifts and changes every hour.",
          next: "s3_minion",
          traits: ["chaos"],
        },
        {
          text: "Bone. The remains of those who opposed me.",
          next: "s3_minion",
          traits: ["beast"],
        },
      ],
    },
    s3_minion: {
      text: "A subordinate fails you. How do you respond?",
      options: [
        {
          text: "Execute them publicly. An example is needed.",
          next: "s4_threat",
          traits: ["beast", "mastermind"],
        },
        {
          text: "Forgive them. Their debt to me grows.",
          next: "s4_threat",
          traits: ["mastermind", "fallen"],
        },
        {
          text: "Laugh. Mistakes are entertaining.",
          next: "s4_threat",
          traits: ["chaos"],
        },
        {
          text: "I do not have minions. I work alone.",
          next: "s4_threat",
          traits: ["fallen", "beast"],
        },
      ],
    },
    s4_threat: {
      text: "The resistance is gathering. They have a plan.",
      options: [
        {
          text: "Let them come. I am ready.",
          next: "s5_endgame",
          traits: ["beast"],
        },
        {
          text: "I already knew. I wrote their plan.",
          next: "s5_endgame",
          traits: ["mastermind"],
        },
        {
          text: "I blow up the meeting spot.",
          next: "s5_endgame",
          traits: ["chaos"],
        },
        {
          text: "I offer them a chance to join me.",
          next: "s5_endgame",
          traits: ["fallen"],
        },
      ],
    },
    s5_endgame: {
      text: "You have won. The world is yours. What now?",
      options: [
        { text: "Order.", next: "end", traits: ["mastermind"] },
        { text: "Silence.", next: "end", traits: ["fallen"] },
        { text: "Fire.", next: "end", traits: ["chaos"] },
        { text: "Feast.", next: "end", traits: ["beast"] },
      ],
    },
  },
  results: {
    mastermind: {
      title: "THE MASTERMIND",
      description:
        "You do not want to destroy the world; you want to fix it. Cold, calculated, and always three steps ahead. You are the necessary evil.",
    },
    fallen: {
      title: "THE FALLEN HERO",
      description:
        "You were once good, but the world was cruel. Now you are the mirror that reflects its ugly truth. Your villainy is a tragedy, not a choice.",
    },
    chaos: {
      title: "THE CHAOS AGENT",
      description:
        "Some people just want to watch the world burn. You are the glitch in the system, the wild card. You have no plan, and that makes you terrifying.",
    },
    beast: {
      title: "THE BEAST",
      description:
        "You are nature's wrath incarnate. No politics, no speeches, just raw power. You are the storm that levels the city.",
    },
  },
};
