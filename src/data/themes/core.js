export default {
  startNodes: ["s1_void"],
  nodes: {
    s1_void: {
      text: "The void stares back at you. It asks for a name, but you have none. Do you...",
      options: [
        {
          text: "Forge a new identity.",
          next: "s2_forge",
          traits: ["bold", "creative"],
        },
        {
          text: "Remain formless.",
          next: "s2_formless",
          traits: ["cautious", "abstract"],
        },
      ],
    },

    s2_forge: {
      text: "Your new name burns with neon fire. What color is the flame?",
      options: [
        {
          text: "Electric Blue (Cold Logic)",
          next: "s3_structure",
          traits: ["analytical", "cyber_sage"],
        },
        {
          text: "Crimson Red (Passion)",
          next: "s3_chaos",
          traits: ["emotional", "neon_drifter"],
        },
      ],
    },
    s2_formless: {
      text: "You drift through the data streams. A firewall blocks your path.",
      options: [
        {
          text: "Slip through the cracks.",
          next: "s3_shadows",
          traits: ["stealthy", "data_spectre"],
        },
        {
          text: "Analyze the code.",
          next: "s3_structure",
          traits: ["analytical", "cyber_sage"],
        },
      ],
    },

    s3_structure: {
      text: "The city layout is inefficient. How do you fix it?",
      options: [
        {
          text: "Rewrite the algorithm.",
          next: "s4_code",
          traits: ["cyber_sage", "control"],
        },
        {
          text: "Let it evolve naturally.",
          next: "s4_organic",
          traits: ["analog_soul", "passive"],
        },
      ],
    },
    s3_chaos: {
      text: "The rave is deafening. You feel...",
      options: [
        {
          text: "Alive.",
          next: "s4_energy",
          traits: ["neon_drifter", "extrovert"],
        },
        {
          text: "Overwhelmed.",
          next: "s4_organic",
          traits: ["introvert", "analog_soul"],
        },
      ],
    },
    s3_shadows: {
      text: "A secret file lies unprotected. It contains the truth of the simulation.",
      options: [
        {
          text: "Read it.",
          next: "s4_truth",
          traits: ["data_spectre", "curious"],
        },
        {
          text: "Delete it.",
          next: "s4_code",
          traits: ["cautious", "control"],
        },
      ],
    },

    s4_code: {
      text: "Binary rain falls. It tastes like...",
      options: [
        {
          text: "Metal and mathematics.",
          next: "s5_logic",
          traits: ["cyber_sage"],
        },
        { text: "Nothing.", next: "s5_void", traits: ["data_spectre"] },
      ],
    },
    s4_organic: {
      text: "You find a withered flower in the concrete.",
      options: [
        {
          text: "Upload it to the cloud.",
          next: "s5_preservation",
          traits: ["tech", "cyber_sage"],
        },
        {
          text: "Water it.",
          next: "s5_nurture",
          traits: ["analog_soul", "empathy"],
        },
      ],
    },
    s4_energy: {
      text: "Speed is relevant. Where are you going?",
      options: [
        { text: "Forward.", next: "s5_momentum", traits: ["neon_drifter"] },
        { text: "Nowhere.", next: "s5_void", traits: ["data_spectre"] },
      ],
    },
    s4_truth: {
      text: "The truth hurts. Do you share it?",
      options: [
        {
          text: "Broadcast to all.",
          next: "s5_momentum",
          traits: ["bold", "neon_drifter"],
        },
        {
          text: "Keep it.",
          next: "s5_void",
          traits: ["secretive", "data_spectre"],
        },
      ],
    },

    s5_logic: {
      text: "Order is established. But are you happy?",
      options: [
        {
          text: "Efficiency is happiness.",
          next: "s6_path",
          traits: ["cyber_sage"],
        },
        { text: "I am unsure.", next: "s6_doubt", traits: ["analog_soul"] },
      ],
    },
    s5_void: {
      text: "Silence is...",
      options: [
        { text: "Golden.", next: "s6_path", traits: ["data_spectre"] },
        { text: "Lonely.", next: "s6_connect", traits: ["neon_drifter"] },
      ],
    },
    s5_preservation: {
      text: "Digital immortality. A gift or a curse?",
      options: [
        { text: "Gift.", next: "s6_path", traits: ["cyber_sage"] },
        { text: "Curse.", next: "s6_doubt", traits: ["analog_soul"] },
      ],
    },
    s5_nurture: {
      text: "The real world fades. Do you hold on?",
      options: [
        { text: "Always.", next: "s6_path", traits: ["analog_soul"] },
        { text: "Let go.", next: "s6_doubt", traits: ["data_spectre"] },
      ],
    },
    s5_momentum: {
      text: "No brakes. Only...",
      options: [
        { text: "Acceleration.", next: "s6_path", traits: ["neon_drifter"] },
        { text: "Crash.", next: "s6_doubt", traits: ["analog_soul"] },
      ],
    },

    s6_path: {
      text: "You see the horizon. It is...",
      options: [
        {
          text: "Digital.",
          next: "s7_endgame",
          traits: ["cyber_sage", "data_spectre"],
        },
        {
          text: "Analog.",
          next: "s7_endgame",
          traits: ["analog_soul", "neon_drifter"],
        },
      ],
    },
    s6_doubt: {
      text: "Are we real?",
      options: [
        { text: "Yes.", next: "s7_endgame", traits: ["analog_soul"] },
        { text: "No.", next: "s7_endgame", traits: ["cyber_sage"] },
      ],
    },
    s6_connect: {
      text: "Others approach. Friend or Foe?",
      options: [
        { text: "Analyze threat.", next: "s7_endgame", traits: ["cyber_sage"] },
        { text: "Welcome them.", next: "s7_endgame", traits: ["neon_drifter"] },
      ],
    },

    s7_endgame: {
      text: "The end is near. One final variable...",
      options: [
        { text: "Input 1.", next: "s8_final", traits: ["cyber_sage"] },
        { text: "Input 0.", next: "s8_final", traits: ["analog_soul"] },
      ],
    },
    s8_final: {
      text: "Validation complete. Processing Identity.",
      options: [{ text: "Show me.", next: "end", traits: [] }],
    },
  },
  results: {
    cyber_sage: {
      title: "THE CYBER SAGE",
      description:
        "You interpret the signal within the noise. Your mind is a structured archive of logic and foresight. In a chaotic world, you build systems of order. You are the architect of the new age.",
    },
    neon_drifter: {
      title: "THE NEON DRIFTER",
      description:
        "You flow with the current of the city. Driven by aesthetics and emotion, you find beauty in the temporary. You don't possess the future; you experience it.",
    },
    data_spectre: {
      title: "THE DATA SPECTRE",
      description:
        "Invisible, observant, and silent. You gather information without leaving a trace. You prefer the shadows of the network to the spotlight of reality.",
    },
    analog_soul: {
      title: "THE ANALOG SOUL",
      description:
        "A relic of warmth in a cold digital world. You value connection, memory, and tangible reality over the simulation. You are the heartbeat in the machine.",
    },
  },
};
