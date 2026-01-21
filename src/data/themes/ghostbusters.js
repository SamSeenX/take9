export default {
  id: "specter",
  startNodes: ["q1"],
  results: {
    mouth: {
      title: "THE MOUTH",
      description:
        "Charming, skeptical, and arguably the leader. You talk your way out of anything.",
    },
    heart: {
      title: "THE HEART",
      description:
        "Pure enthusiasm and genuine belief. You love the work, even when it gets slimed.",
    },
    brain: {
      title: "THE BRAIN",
      description:
        "Stoic, brilliant, and socially awkward. You focus on the data, not the drama.",
    },
    realist: {
      title: "THE REALIST",
      description:
        "You didn't sign up for this, but you'll handle it. Practicality is your superpower.",
    },
    keymaster: {
      title: "THE GATEKEEPER",
      description:
        "Chaos summons you. You are the bridge between worlds, willing or not.",
    },
  },
  nodes: {
    q1: {
      text: "A floating vapor hovers above the books. It looks angry.",
      options: [
        {
          text: "Talk to it. Try to calm it down.",
          next: "q2a",
          traits: ["mouth", "heart"],
        },
        { text: "Scan it. Get the readings.", next: "q2b", traits: ["brain"] },
        {
          text: "Blast it. Ask questions later.",
          next: "q2c",
          traits: ["realist", "keymaster"],
        },
      ],
    },
    q2a: {
      text: "It slimed you. Covered in ectoplasm.",
      options: [
        {
          text: "Disgusting. Send the bill to the hotel.",
          next: "q3a",
          traits: ["mouth", "realist"],
        },
        {
          text: "Fascinating! Actual physical contact!",
          next: "q3b",
          traits: ["heart", "brain"],
        },
      ],
    },
    q2b: {
      text: "The readings are off the charts. It's a Class 5.",
      options: [
        {
          text: "We need a trap. Now.",
          next: "q3a",
          traits: ["brain", "realist"],
        },
        {
          text: "Describe the ionization rate.",
          next: "q3b",
          traits: ["heart"],
        },
      ],
    },
    q2c: {
      text: "You crossed the streams. The universe shudders.",
      options: [
        {
          text: "I thought you said it was bad?",
          next: "q3a",
          traits: ["mouth", "keymaster"],
        },
        { text: "It worked, didn't it?", next: "q3b", traits: ["realist"] },
      ],
    },
    q3a: {
      text: "The mayor wants to shut you down.",
      options: [
        {
          text: "Charm him. Mention the voters.",
          next: "end",
          traits: ["mouth"],
        },
        {
          text: "Show him the containment unit.",
          next: "end",
          traits: ["brain", "heart"],
        },
        {
          text: "Tell him what's coming is worse.",
          next: "end",
          traits: ["realist", "keymaster"],
        },
      ],
    },
    q3b: {
      text: "A giant marshmallow man walks down the street.",
      options: [
        {
          text: "I tried to think of something harmless!",
          next: "end",
          traits: ["heart", "mouth"],
        },
        {
          text: "Calculate the structural density.",
          next: "end",
          traits: ["brain", "realist"],
        },
        { text: "It's beautiful.", next: "end", traits: ["keymaster"] },
      ],
    },
  },
};
