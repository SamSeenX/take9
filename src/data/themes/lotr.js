export default {
  id: "lotr",
  startNodes: ["q1"],
  results: {
    ringbearer: {
      title: "THE RINGBEARER",
      description:
        "You carry burdens that would crush others. Resilience is your weapon.",
    },
    guide: {
      title: "THE GUIDE",
      description:
        "You know the paths others fear. Wisdom is your shield, but secrets are your danger.",
    },
    king: {
      title: "THE KING",
      description:
        "Born to lead, you fear destiny but embrace it when the time comes. Honor is your guide.",
    },
    shield: {
      title: "THE SHIELD",
      description:
        "Loyalty defines you. You fight not for glory, but for those behind you.",
    },
    shadow: {
      title: "THE SHADOW",
      description:
        "You walk comfortably in the dark. Your motives are complex, but your survival instinct is unmatched.",
    },
  },
  nodes: {
    q1: {
      text: "A small object of immense power lies before you. It whispers.",
      options: [
        {
          text: "Take it. I can use it for good.",
          next: "q2a",
          traits: ["king", "shadow"],
        },
        {
          text: "Hide it. It is too dangerous.",
          next: "q2b",
          traits: ["ringbearer", "guide"],
        },
        {
          text: "Destroy it immediately.",
          next: "q2c",
          traits: ["shield", "ringbearer"],
        },
      ],
    },
    q2a: {
      text: "Your allies question your leadership. They say the path is wrong.",
      options: [
        {
          text: "They must follow my command.",
          next: "q3a",
          traits: ["king", "shadow"],
        },
        {
          text: "I listen, but trust my instinct.",
          next: "q3b",
          traits: ["king", "guide"],
        },
        { text: "I walk alone if I must.", next: "q3c", traits: ["shadow"] },
      ],
    },
    q2b: {
      text: "The road ahead is blocked by an ancient terror.",
      options: [
        {
          text: "Fight it so others can escape.",
          next: "q3a",
          traits: ["shield", "guide"],
        },
        {
          text: "Find a hidden path around it.",
          next: "q3b",
          traits: ["guide", "ringbearer"],
        },
        {
          text: "Use the object's power to pass.",
          next: "q3c",
          traits: ["shadow", "king"],
        },
      ],
    },
    q2c: {
      text: "You are wearied. The weight is physical and mental.",
      options: [
        {
          text: "I cannot stop. I will crawl if needed.",
          next: "q3a",
          traits: ["ringbearer"],
        },
        {
          text: "I ask my friend to carry it for a while.",
          next: "q3b",
          traits: ["ringbearer", "shield"],
        },
        { text: "I rest. I deserve it.", next: "q3c", traits: ["shadow"] },
      ],
    },
    q3a: {
      text: "The final choice. The fire is in front of you. The voices stop.",
      options: [
        { text: "Let it go.", next: "end", traits: ["ringbearer", "shield"] },
        {
          text: "Hold it for just a moment longer.",
          next: "end",
          traits: ["shadow", "king"],
        },
      ],
    },
    q3b: {
      text: "A great city burns on the horizon.",
      options: [
        {
          text: "Ride to its aid, no matter the odds.",
          next: "end",
          traits: ["king", "shield"],
        },
        {
          text: "Stay on the mission. The city is a distraction.",
          next: "end",
          traits: ["guide", "ringbearer"],
        },
      ],
    },
    q3c: {
      text: "You are offered a place of high honor in the new world order.",
      options: [
        {
          text: "I accept. I can do good from within.",
          next: "end",
          traits: ["king", "shadow"],
        },
        {
          text: "I refuse. I belong to the wild.",
          next: "end",
          traits: ["guide", "ringbearer"],
        },
      ],
    },
  },
};
