export default {
  id: "galaxy_quest",
  startNodes: ["q1"],
  results: {
    commander: {
      title: "THE COMMANDER",
      description:
        "You thrive in the spotlight, but when things get real, you lead from the front. Never give up, never surrender.",
    },
    lieutenant: {
      title: "THE LIEUTENANT",
      description:
        "Logic is your language, but resentment fuels you. You repeat the line, but you want to rewrite the script.",
    },
    scientist: {
      title: "THE SCIENTIST",
      description:
        "A scholar of higher purpose, forced into absurdity. You find dignity in the ridiculous.",
    },
    fan: {
      title: "THE REDSHIRT",
      description:
        "You're just happy to be here. You expect doom at every turn, but your survival instinct is sharp.",
    },
    thermian: {
      title: "THE BELIEVER",
      description: "Innocent, loyal, and pure. To you, the stories are real.",
    },
  },
  nodes: {
    q1: {
      text: "Aliens have abducted you. They believe you are a hero.",
      options: [
        {
          text: "Play the part. Save them.",
          next: "q2a",
          traits: ["commander", "thermian"],
        },
        {
          text: "Explain it's all fake.",
          next: "q2b",
          traits: ["lieutenant", "scientist"],
        },
        {
          text: "Detailed safety check. Am I going to die?",
          next: "q2c",
          traits: ["fan"],
        },
      ],
    },
    q2a: {
      text: "The ship is under attack. The enemy is real.",
      options: [
        {
          text: "Give the order to fire!",
          next: "q3a",
          traits: ["commander", "thermian"],
        },
        {
          text: "Activate the Omega 13.",
          next: "q3b",
          traits: ["scientist", "commander"],
        },
      ],
    },
    q2b: {
      text: "The aliens don't understand 'fiction'. They look confused.",
      options: [
        {
          text: "Sigh and do the job anyway.",
          next: "q3a",
          traits: ["scientist", "lieutenant"],
        },
        {
          text: "Show them the historical documents.",
          next: "q3b",
          traits: ["thermian"],
        },
      ],
    },
    q2c: {
      text: "You are sent down to the planet surface. You have no name.",
      options: [
        { text: "Stick to the Commander.", next: "q3a", traits: ["fan"] },
        { text: "Panic.", next: "q3c", traits: ["fan"] },
      ],
    },
    q3a: {
      text: "The self-destruct is ticking down.",
      options: [
        {
          text: "Whatever happens, never surrender.",
          next: "end",
          traits: ["commander", "thermian"],
        },
        {
          text: "Cut the blue wire.",
          next: "end",
          traits: ["fan", "lieutenant"],
        },
      ],
    },
    q3b: {
      text: "You must say the catchphrase to save the day.",
      options: [
        {
          text: "Say it with passion. By Grabthar's Hammer!",
          next: "end",
          traits: ["scientist", "commander"],
        },
        {
          text: "Mumble it. It's embarrassing.",
          next: "end",
          traits: ["lieutenant"],
        },
      ],
    },
    q3c: {
      text: "Something cute and fuzzy approaches.",
      options: [
        { text: "Run away! It has teeth!", next: "end", traits: ["fan"] },
        { text: "Pet it.", next: "end", traits: ["thermian"] },
      ],
    },
  },
};
