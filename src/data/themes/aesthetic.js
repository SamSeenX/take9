export default {
  startNodes: ["s1_place"],
  nodes: {
    s1_place: {
      text: "You wake up in a place that feels like a memory. What do you see?",
      options: [
        {
          text: "Dust motes dancing in a sunlit library.",
          next: "s2_sound",
          traits: ["scholar"],
        },
        {
          text: "Wildflowers growing over a rusted fence.",
          next: "s2_sound",
          traits: ["dreamer"],
        },
        {
          text: "Neon rain on black pavement.",
          next: "s2_sound",
          traits: ["glitch"],
        },
        {
          text: "A white room with no doors.",
          next: "s2_sound",
          traits: ["void"],
        },
      ],
    },
    s2_sound: {
      text: "Close your eyes. What do you hear?",
      options: [
        {
          text: "The scratch of a quill on parchment.",
          next: "s3_object",
          traits: ["scholar"],
        },
        {
          text: "Bees humming in the lavender.",
          next: "s3_object",
          traits: ["dreamer"],
        },
        {
          text: "The deep bass of a distant server.",
          next: "s3_object",
          traits: ["glitch"],
        },
        { text: "Static. Just static.", next: "s3_object", traits: ["void"] },
      ],
    },
    s3_object: {
      text: "There is an object in your hand. It feels heavy.",
      options: [
        {
          text: "A leather-bound book, locked.",
          next: "s4_feeling",
          traits: ["scholar"],
        },
        { text: "A warm cup of tea.", next: "s4_feeling", traits: ["dreamer"] },
        {
          text: "A glowing data drive.",
          next: "s4_feeling",
          traits: ["glitch"],
        },
        { text: "An eyeball.", next: "s4_feeling", traits: ["void"] },
      ],
    },
    s4_feeling: {
      text: "How does this make you feel?",
      options: [
        {
          text: "Nostalgic for a time I never lived.",
          next: "s5_final",
          traits: ["scholar"],
        },
        {
          text: "Peaceful. I want to stay here.",
          next: "s5_final",
          traits: ["dreamer"],
        },
        {
          text: "Wired. I am connected.",
          next: "s5_final",
          traits: ["glitch"],
        },
        {
          text: "Uncomfortable. Is this real?",
          next: "s5_final",
          traits: ["void"],
        },
      ],
    },
    s5_final: {
      text: "The memory fades. You remain as...",
      options: [
        { text: "A story.", next: "end", traits: ["scholar"] },
        { text: "A garden.", next: "end", traits: ["dreamer"] },
        { text: "A signal.", next: "end", traits: ["glitch"] },
        { text: "A ghost.", next: "end", traits: ["void"] },
      ],
    },
  },
  results: {
    scholar: {
      title: "DARK ACADEMIA",
      description:
        "Candlelight, tweed, and forbidden knowledge. You are an old soul seeking truth in dusty pages. You romanticize the pursuit of wisdom.",
    },
    dreamer: {
      title: "COTTAGECORE",
      description:
        "Sunlight, moss, and slow living. You reject the hustle for a simpler existence. You find magic in the mundane and strength in softness.",
    },
    glitch: {
      title: "CYBERCORE",
      description:
        "Chrome, neon, and digital decay. You are the future crashing into the present. You find beauty in the artificial and the efficient.",
    },
    void: {
      title: "WEIRDCORE",
      description:
        "Liminal spaces, eyes, and confusion. You exist in the uncomfortable spaces between reality. You are the feeling of déjà vu.",
    },
  },
};
