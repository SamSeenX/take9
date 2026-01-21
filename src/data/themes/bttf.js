export default {
  id: "bttf",
  startNodes: ["q1"],
  results: {
    traveler: {
      title: "THE TRAVELER",
      description:
        "You adapt to chaos. The journey is more important than the destination.",
    },
    inventor: {
      title: "THE INVENTOR",
      description:
        "A visionary mind. You see potential where others see madness.",
    },
    guardian: {
      title: "THE GUARDIAN",
      description:
        "Protector of the timeline. You value stability and order above all.",
    },
    rebel: {
      title: "THE REBEL",
      description:
        "You make your own luck. Destiny is what you create, not what is written.",
    },
  },
  nodes: {
    q1: {
      text: "The clock strikes 88. A path opens not in space, but in time.",
      options: [
        {
          text: "Go back. Fix the mistake.",
          next: "q2a",
          traits: ["guardian", "rebel"],
        },
        {
          text: "Go forward. See the result.",
          next: "q2b",
          traits: ["inventor", "traveler"],
        },
        {
          text: "Stay here. This is my time.",
          next: "q2c",
          traits: ["guardian"],
        },
      ],
    },
    q2a: {
      text: "You see your parents before they were who you knew.",
      options: [
        {
          text: "Interfere. Ensure they meet.",
          next: "q3a",
          traits: ["rebel", "traveler"],
        },
        {
          text: "Observe. Do not touch.",
          next: "q3b",
          traits: ["guardian", "inventor"],
        },
      ],
    },
    q2b: {
      text: "The future is chrome, but cold. Humanity is efficient but distant.",
      options: [
        {
          text: "Bring back technology to save the present.",
          next: "q3a",
          traits: ["inventor", "rebel"],
        },
        {
          text: "Leave it be. We aren't ready.",
          next: "q3b",
          traits: ["guardian"],
        },
        { text: "Explore the wasteland.", next: "q3c", traits: ["traveler"] },
      ],
    },
    q2c: {
      text: "A letter arrives from a century ago. It has your name on it.",
      options: [
        {
          text: "Open it immediately.",
          next: "q3a",
          traits: ["traveler", "rebel"],
        },
        {
          text: "Burn it. Some things should stay buried.",
          next: "q3b",
          traits: ["guardian"],
        },
      ],
    },
    q3a: {
      text: "The machine is broken. You are stranded in a foreign decade.",
      options: [
        { text: "Build a new life here.", next: "end", traits: ["traveler"] },
        {
          text: "Invent a way home.",
          next: "end",
          traits: ["inventor", "rebel"],
        },
      ],
    },
    q3b: {
      text: "You hold the almanac of all outcomes.",
      options: [
        { text: "Use it for personal gain.", next: "end", traits: ["rebel"] },
        {
          text: "Destroy it to preserve fairness.",
          next: "end",
          traits: ["guardian", "inventor"],
        },
      ],
    },
    q3c: {
      text: "The timeline flickers. Someone is fading away.",
      options: [
        {
          text: "Save them at all costs.",
          next: "end",
          traits: ["rebel", "guardian"],
        },
        {
          text: "Let fate take its course.",
          next: "end",
          traits: ["traveler"],
        },
      ],
    },
  },
};
