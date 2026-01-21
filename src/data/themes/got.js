export default {
  startNodes: ["s1_warning"],
  nodes: {
    s1_warning: {
      text: "A raven arrives in the dead of night. The seal is broken. The message is just one word: 'Prepare'. How do you interpret it?",
      options: [
        {
          text: "A threat to my family. I summon the bannermen.",
          next: "s2_gathering",
          traits: ["stark"],
        },
        {
          text: "An opportunity. Chaos is a ladder.",
          next: "s2_gathering",
          traits: ["lannister", "tyrell"],
        },
        {
          text: "A challenge. I welcome the fire.",
          next: "s2_gathering",
          traits: ["targaryen"],
        },
      ],
    },
    s2_gathering: {
      text: "The small council meets. Arguments erupt over the treasury. They look to you.",
      options: [
        {
          text: "Gold wins wars. Buy the sellswords.",
          next: "s3_enemy",
          traits: ["lannister"],
        },
        {
          text: "Honor is free. Lead by example.",
          next: "s3_enemy",
          traits: ["stark"],
        },
        {
          text: "Influence is key. Whisper the right words.",
          next: "s3_enemy",
          traits: ["tyrell"],
        },
        {
          text: "Burn them all if they dissent.",
          next: "s3_enemy",
          traits: ["targaryen"],
        },
      ],
    },
    s3_enemy: {
      text: "The enemy is at the gates. Their army is twice the size of yours.",
      options: [
        {
          text: "We meet them in the open field.",
          next: "s4_betrayal",
          traits: ["stark", "targaryen"],
        },
        {
          text: "We hold the castle and wait for winter.",
          next: "s4_betrayal",
          traits: ["stark", "tyrell"],
        },
        {
          text: "We invite their leader to 'dinner'.",
          next: "s4_betrayal",
          traits: ["lannister"],
        },
      ],
    },
    s4_betrayal: {
      text: "Your most trusted advisor hands you a goblet of wine. It smells familiar. Sweet. Too sweet.",
      options: [
        {
          text: "I drink. I trust them with my life.",
          next: "s5_legacy",
          traits: ["stark"],
        },
        {
          text: "I make them drink first.",
          next: "s5_legacy",
          traits: ["lannister", "targaryen"],
        },
        {
          text: "I spill it 'accidentally'. Use the moment.",
          next: "s5_legacy",
          traits: ["tyrell"],
        },
      ],
    },
    s5_legacy: {
      text: "The war is over. The cost was high. You gaze upon the Iron Throne. It looks...",
      options: [
        {
          text: "Cold and uncomfortable. But necessary.",
          next: "end",
          traits: ["stark"],
        },
        {
          text: "Like a birthright. Mine.",
          next: "end",
          traits: ["targaryen", "lannister"],
        },
        {
          text: "Like a trap. I prefer to rule from the shadows.",
          next: "end",
          traits: ["tyrell"],
        },
      ],
    },
  },
  results: {
    stark: {
      title: "THE WOLF",
      description:
        "The lone wolf dies, but the pack survives. You are driven by honor, duty, and the bitter cold truth. You do not play games; you survive them.",
    },
    lannister: {
      title: "THE LION",
      description:
        "A lion does not concern himself with the opinion of sheep. You build legacies with gold and blood. You pay your debts, and you ensure others pay theirs.",
    },
    targaryen: {
      title: "THE DRAGON",
      description:
        "You are fire made flesh. You do not beg for power; you take it. Your destiny is written in flame, creating a world of ash and bone if necessary.",
    },
    tyrell: {
      title: "THE ROSE",
      description:
        "Growing Strong. You are beautiful to behold but dangerous to touch. Your thorns are hidden, your roots runs deep, and you survive every winter.",
    },
  },
};
