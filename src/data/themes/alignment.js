export default {
  startNodes: ["s1_law"],
  nodes: {
    s1_law: {
      text: "A thief steals bread to feed a starving child. The law demands their hand. What is justice?",
      options: [
        {
          text: "The law is absolute. Cut the hand.",
          next: "s2_power",
          traits: ["warlock"],
        },
        {
          text: "The law is flawed. Feed the child.",
          next: "s2_power",
          traits: ["paladin"],
        },
        {
          text: "Break the law. Steal the bakery.",
          next: "s2_power",
          traits: ["rogue"],
        },
        {
          text: "Nature cares not for laws or bread.",
          next: "s2_power",
          traits: ["druid"],
        },
      ],
    },
    s2_power: {
      text: "You are offered immense power, but it requires a sacrifice.",
      options: [
        {
          text: "I sacrifice myself for others.",
          next: "s3_enemy",
          traits: ["paladin"],
        },
        {
          text: "I sacrifice others for myself.",
          next: "s3_enemy",
          traits: ["warlock"],
        },
        {
          text: "I cheat the system. I take both.",
          next: "s3_enemy",
          traits: ["rogue"],
        },
        {
          text: "I reject the power. Balance is key.",
          next: "s3_enemy",
          traits: ["druid"],
        },
      ],
    },
    s3_enemy: {
      text: "Your enemy is defeated and begs for mercy.",
      options: [
        {
          text: "I show mercy. It is the righteous path.",
          next: "s4_guide",
          traits: ["paladin"],
        },
        {
          text: "I end them. They are a threat.",
          next: "s4_guide",
          traits: ["warlock"],
        },
        {
          text: "I spare them... for a price.",
          next: "s4_guide",
          traits: ["rogue"],
        },
        {
          text: "I return them to the earth.",
          next: "s4_guide",
          traits: ["druid"],
        },
      ],
    },
    s4_guide: {
      text: "What guides your blade?",
      options: [
        { text: "Honor.", next: "s5_final", traits: ["paladin"] },
        { text: "Ambition.", next: "s5_final", traits: ["warlock"] },
        { text: "Freedom.", next: "s5_final", traits: ["rogue"] },
        { text: "Instinct.", next: "s5_final", traits: ["druid"] },
      ],
    },
    s5_final: {
      text: "The gods judge your soul. They see...",
      options: [
        { text: "Light.", next: "end", traits: ["paladin"] },
        { text: "Shadow.", next: "end", traits: ["warlock"] },
        { text: "Chaos.", next: "end", traits: ["rogue"] },
        { text: "Life.", next: "end", traits: ["druid"] },
      ],
    },
  },
  results: {
    paladin: {
      title: "THE PALADIN",
      description:
        "Lawful Good. You believe in order, justice, and protection. You are the shield that guards the innocent, even if the weight crushes you.",
    },
    rogue: {
      title: "THE ROGUE",
      description:
        "Chaotic Neutral. You value freedom above all. Rules are chains, and you were born to break them. You live for the thrill and the open road.",
    },
    warlock: {
      title: "THE WARLOCK",
      description:
        "Neutral Evil. You understand that power is the only currency that matters. You are willing to make the hard choices others are too weak to consider.",
    },
    druid: {
      title: "THE DRUID",
      description:
        "True Neutral. You serve the cycle of nature. Life and death are two sides of the same coin. You seek balance in a world tipping into madness.",
    },
  },
};
