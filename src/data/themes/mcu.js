export default {
  id: "mcu",
  startNodes: ["q1"],
  results: {
    leader: {
      title: "THE FIRST AVENGER",
      description:
        "A man out of time, defined by honor and sacrifice. You lead by example, even when it costs everything.",
    },
    genius: {
      title: "THE GENIUS",
      description:
        "Brilliant, flawed, and protective. You build walls to save the world, then tear them down to save your friends.",
    },
    warrior: {
      title: "THE GOD OF THUNDER",
      description:
        "Power tempered by loss. You've found humility in the face of absolute strength.",
    },
    spy: {
      title: "THE SPY",
      description:
        "Red in your ledger, but a heart of gold. You do the dirty work so others can stay clean.",
    },
    trickster: {
      title: "THE TRICKSTER",
      description:
        "Your motives are your own. You dance between light and shadow, always one step ahead.",
    },
  },
  nodes: {
    q1: {
      text: "A threat from the stars descends upon the city. You have one moment to act.",
      options: [
        {
          text: "Stand the ground. Protect the civilians.",
          next: "q2a",
          traits: ["leader", "spy"],
        },
        {
          text: "Fly to the source. End it now.",
          next: "q2b",
          traits: ["genius", "warrior"],
        },
        {
          text: "Wait. See how the cards fall.",
          next: "q2c",
          traits: ["trickster"],
        },
      ],
    },
    q2a: {
      text: "A close friend is compromised by the enemy. They are dangerous.",
      options: [
        {
          text: "I can save them. They're still in there.",
          next: "q3a",
          traits: ["leader", "warrior"],
        },
        {
          text: "Do what must be done. The mission comes first.",
          next: "q3b",
          traits: ["spy", "genius"],
        },
      ],
    },
    q2b: {
      text: "You are offered absolute power to 'fix' the world's problems.",
      options: [
        {
          text: "Reject it. No one man should have that.",
          next: "q3a",
          traits: ["leader", "warrior"],
        },
        {
          text: "Accept it. I can make things right.",
          next: "q3b",
          traits: ["genius", "trickster"],
        },
      ],
    },
    q2c: {
      text: "The world thinks you are dead. You have a clean slate.",
      options: [
        {
          text: "Return for one last fight.",
          next: "q3a",
          traits: ["leader", "spy"],
        },
        {
          text: "Stay in the shadows. Watch and wait.",
          next: "q3b",
          traits: ["trickster", "spy"],
        },
      ],
    },
    q3a: {
      text: "The final battle requires a sacrifice. Only one can return.",
      options: [
        {
          text: "I'll go. It's my time.",
          next: "end",
          traits: ["leader", "spy"],
        },
        {
          text: "We find another way. Together.",
          next: "end",
          traits: ["warrior", "genius"],
        },
      ],
    },
    q3b: {
      text: "You've won, but the cost was high. The world is safe, but changed.",
      options: [
        {
          text: "Retire. I've done my part.",
          next: "end",
          traits: ["leader", "genius"],
        },
        {
          text: "Stay vigilant. The next threat is coming.",
          next: "end",
          traits: ["spy", "warrior"],
        },
      ],
    },
  },
};
