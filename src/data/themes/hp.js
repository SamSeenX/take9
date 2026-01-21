export default {
  startNodes: ["s1_journey"],
  nodes: {
    s1_journey: {
      text: "The steam clears. You stand on a platform between worlds. A whistle blows in the distance. How do you feel?",
      options: [
        {
          text: "Eager. The adventure begins.",
          next: "s2_arch",
          traits: ["gryffindor"],
        },
        {
          text: "Calculated. I am ready.",
          next: "s2_arch",
          traits: ["slytherin"],
        },
        {
          text: "Curious. So much to learn.",
          next: "s2_arch",
          traits: ["ravenclaw"],
        },
        {
          text: "Warm. I am coming home.",
          next: "s2_arch",
          traits: ["hufflepuff"],
        },
      ],
    },

    s2_arch: {
      text: "Huge oak doors groan open. The Great Hall is filled with floating lights. One hovers directly in front of you. What color is it?",
      options: [
        {
          text: "A piercing, cold silver.",
          next: "s3_challenge",
          traits: ["slytherin", "ravenclaw"],
        },
        {
          text: "A warm, flickering gold.",
          next: "s3_challenge",
          traits: ["gryffindor", "hufflepuff"],
        },
      ],
    },

    s3_challenge: {
      text: "You are lost in the shifting staircases. A painting whispers a secret shortcut, but it is forbidden. Do you take it?",
      options: [
        {
          text: "Yes. Rules are guidelines.",
          next: "s4_dungeon",
          traits: ["slytherin", "gryffindor"],
        },
        {
          text: "No. I will find the proper way.",
          next: "s4_tower",
          traits: ["hufflepuff", "ravenclaw"],
        },
      ],
    },

    s4_dungeon: {
      text: "The air grows cold. You find a mirror that shows not your reflection, but your desire. You see...",
      options: [
        {
          text: "Myself, holding glory and power.",
          next: "s5_conflict",
          traits: ["slytherin"],
        },
        {
          text: "Myself, standing tall against fear.",
          next: "s5_conflict",
          traits: ["gryffindor"],
        },
      ],
    },
    s4_tower: {
      text: "You reach a high window. The wind howls. A riddle is etched into the stone ledge.",
      options: [
        {
          text: "I solve it for the joy of knowing.",
          next: "s5_conflict",
          traits: ["ravenclaw"],
        },
        {
          text: "I share the answer with those behind me.",
          next: "s5_conflict",
          traits: ["hufflepuff"],
        },
      ],
    },

    s5_conflict: {
      text: "A duel breaks out in the courtyard. A friend is outnumbered.",
      options: [
        {
          text: "I jump in, wand blazing.",
          next: "s6_artifact",
          traits: ["gryffindor"],
        },
        {
          text: "I strategize a counter-ambush.",
          next: "s6_artifact",
          traits: ["ravenclaw", "slytherin"],
        },
        {
          text: "I shield them and call for help.",
          next: "s6_artifact",
          traits: ["hufflepuff"],
        },
      ],
    },

    s6_artifact: {
      text: "In the restricted section, you find an ancient book. It is locked.",
      options: [
        {
          text: "Force the lock. The knowledge is mine.",
          next: "s7_final",
          traits: ["slytherin", "gryffindor"],
        },
        {
          text: "Study the mechanism. Patience is key.",
          next: "s7_final",
          traits: ["ravenclaw", "hufflepuff"],
        },
      ],
    },

    s7_final: {
      text: "The Hat is placed upon your head. It sees everything. One last thought crosses your mind...",
      options: [
        { text: "Let me be great.", next: "end", traits: ["slytherin"] },
        { text: "Let me be brave.", next: "end", traits: ["gryffindor"] },
        { text: "Let me be wise.", next: "end", traits: ["ravenclaw"] },
        { text: "Let me belong.", next: "end", traits: ["hufflepuff"] },
      ],
    },
  },
  results: {
    gryffindor: {
      title: "THE LION",
      description:
        "You are defined by what you do when you are afraid. Fire burns in your chest. You act while others hesitate. You are the shield and the sword.",
    },
    slytherin: {
      title: "THE SERPENT",
      description:
        "You see the world as a game of chess. You are always three moves ahead. Ambition is not a sin, but a fuel. You will rise, no matter the cost.",
    },
    ravenclaw: {
      title: "THE EAGLE",
      description:
        "Your mind is a vast library of questions. You seek truth in the shadows of ignorance. Wit is your weapon, and wisdom your shield.",
    },
    hufflepuff: {
      title: "THE BADGER",
      description:
        "You are the earth beneath the feet of giants. Unshakeable, loyal, and true. You find strength in unity and honor in hard work.",
    },
  },
};
