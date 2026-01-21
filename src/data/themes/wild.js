export default {
  startNodes: ["s1_forest"],
  nodes: {
    s1_forest: {
      text: "The treeline breaks. You step into the ancient wood. The air is thick with moss and memory. How do you move?",
      options: [
        {
          text: "With the pack. Strength in numbers.",
          next: "s2_weather",
          traits: ["wolf"],
        },
        {
          text: "Silently. I am unseen.",
          next: "s2_weather",
          traits: ["owl", "fox"],
        },
        {
          text: "Boldly. I have nothing to fear.",
          next: "s2_weather",
          traits: ["bear"],
        },
      ],
    },
    s2_weather: {
      text: "The sky turns grey. A storm is coming. The thunder shakes the ground.",
      options: [
        {
          text: "I find a high branch and watch.",
          next: "s3_hunt",
          traits: ["owl"],
        },
        { text: "I dig a den. I endure.", next: "s3_hunt", traits: ["bear"] },
        {
          text: "I run. I outpace the wind.",
          next: "s3_hunt",
          traits: ["wolf", "fox"],
        },
      ],
    },
    s3_hunt: {
      text: "Hunger wakes you. You spot movement in the brush.",
      options: [
        {
          text: "I chase it down. The thrill is the point.",
          next: "s4_night",
          traits: ["wolf"],
        },
        {
          text: "I wait. Patience is a weapon.",
          next: "s4_night",
          traits: ["owl", "bear"],
        },
        {
          text: "I trick it. Smarts beat strength.",
          next: "s4_night",
          traits: ["fox"],
        },
      ],
    },
    s4_night: {
      text: "Night falls. Eyes glow in the dark. A stranger enters your territory.",
      options: [
        { text: "I roar. Leave or fight.", next: "s5_final", traits: ["bear"] },
        { text: "I howl. Call my kin.", next: "s5_final", traits: ["wolf"] },
        {
          text: "I vanish. They will never see me.",
          next: "s5_final",
          traits: ["fox", "owl"],
        },
      ],
    },
    s5_final: {
      text: "Dawn breaks. You see your reflection in the stream. Who looks back?",
      options: [
        { text: "The Alpha.", next: "end", traits: ["wolf"] },
        { text: "The Wise.", next: "end", traits: ["owl"] },
        { text: "The Protector.", next: "end", traits: ["bear"] },
        { text: "The Trickster.", next: "end", traits: ["fox"] },
      ],
    },
  },
  results: {
    wolf: {
      title: "THE WOLF",
      description:
        "Loyal, social, and fierce. You are defined by your connection to others. You lead not by force, but by bond. The pack is your strength.",
    },
    owl: {
      title: "THE OWL",
      description:
        "Silent, observant, and wise. You see what others miss. You prefer solitude and the high vantage point of the truth.",
    },
    bear: {
      title: "THE BEAR",
      description:
        "Powerful, protective, and enduring. You are a force of nature. Slow to anger, but terrifying when provoked. You stand your ground.",
    },
    fox: {
      title: "THE FOX",
      description:
        "Clever, adaptable, and quick. You survive by your wits. You play the game by your own rules and always find a way out.",
    },
  },
};
