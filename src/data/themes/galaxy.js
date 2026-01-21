export default {
  startNodes: ["s1_stars"],
  nodes: {
    s1_stars: {
      text: "Hyperspace collapses. The stars stretch into lines, then dots. You drift in silence. What do you seek out here?",
      options: [
        {
          text: "Balance. The universe is in pain.",
          next: "s2_cantina",
          traits: ["guardian"],
        },
        {
          text: "Power. Limits are meant to be broken.",
          next: "s2_cantina",
          traits: ["conqueror"],
        },
        {
          text: "Freedom. I go where the credits are.",
          next: "s2_cantina",
          traits: ["mercenary"],
        },
        {
          text: "Logic. Probability is the only truth.",
          next: "s2_cantina",
          traits: ["architect"],
        },
      ],
    },
    s2_cantina: {
      text: "The outpost reeks of ozone and spice. A figure in the shadows offers you a job. It's dangerous, but it pays.",
      options: [
        {
          text: "I ask for the details. What is the target?",
          next: "s3_ship",
          traits: ["mercenary", "conqueror"],
        },
        {
          text: "I sense their intent. Are they trustworthy?",
          next: "s3_ship",
          traits: ["guardian"],
        },
        {
          text: "I calculate the odds of survival.",
          next: "s3_ship",
          traits: ["architect"],
        },
      ],
    },
    s3_ship: {
      text: "You need a vessel. The hangar bay is open. Which ship calls to you?",
      options: [
        {
          text: "The sleek, silver interceptor. Fast and deadly.",
          next: "s4_force",
          traits: ["conqueror", "mercenary"],
        },
        {
          text: "The battered freighter. Experienced and reliable.",
          next: "s4_force",
          traits: ["guardian"],
        },
        {
          text: "The geometric drone-ship. Efficient and precise.",
          next: "s4_force",
          traits: ["architect"],
        },
      ],
    },
    s4_force: {
      text: "You land on an ancient planet. The air hums with an invisible energy. It feels like...",
      options: [
        {
          text: "A river. Connecting all living things.",
          next: "s5_duel",
          traits: ["guardian"],
        },
        {
          text: "A fire. Burning to be unleashed.",
          next: "s5_duel",
          traits: ["conqueror"],
        },
        {
          text: "Just radiation. Measureable and cold.",
          next: "s5_duel",
          traits: ["architect"],
        },
        {
          text: "A storm. Best to keep your head down.",
          next: "s5_duel",
          traits: ["mercenary"],
        },
      ],
    },
    s5_duel: {
      text: "Red lights ignite in the fog. An enemy approaches.",
      options: [
        {
          text: "I ignite my weapon. Peace is a lie.",
          next: "s6_final",
          traits: ["conqueror"],
        },
        {
          text: "I calm my mind. Defense is the best offense.",
          next: "s6_final",
          traits: ["guardian"],
        },
        { text: "I shoot first.", next: "s6_final", traits: ["mercenary"] },
        {
          text: "I analyze their fighting style for weakness.",
          next: "s6_final",
          traits: ["architect"],
        },
      ],
    },
    s6_final: {
      text: "The galaxy remembers you. How?",
      options: [
        {
          text: "As a protector of the light.",
          next: "end",
          traits: ["guardian"],
        },
        { text: "As a ruler of the dark.", next: "end", traits: ["conqueror"] },
        {
          text: "As a legend who survived.",
          next: "end",
          traits: ["mercenary"],
        },
        {
          text: "As a ghost in the machine.",
          next: "end",
          traits: ["architect"],
        },
      ],
    },
  },
  results: {
    guardian: {
      title: "THE GUARDIAN",
      description:
        "Peace. Knowledge. Serenity. You do not seek power, but you will stand as a wall against the darkness. You are the keeper of the balance.",
    },
    conqueror: {
      title: "THE CONQUEROR",
      description:
        "Passion. Strength. Victory. You believe that peace is a lie told by the weak. You break your chains and reshape the galaxy in your image.",
    },
    mercenary: {
      title: "THE SURVIVOR",
      description:
        "This is the way. You serve no master but yourself and your code. In a chaotic universe, you are the only constant.",
    },
    architect: {
      title: "THE ARCHITECT",
      description:
        "Logic. Protocol. Efficiency. You are more machine than man. You see the universe as a problem to be solved, and you are the solution.",
    },
  },
};
