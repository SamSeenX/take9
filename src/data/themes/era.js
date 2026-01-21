export default {
  startNodes: ["s1_insert"],
  nodes: {
    s1_insert: {
      text: "It's midnight. The room is blue with screen light. You insert the media. What sound does it make?",
      options: [
        {
          text: "The mechanical clunk and whir of magnetic tape.",
          next: "s2_screen",
          traits: ["vhs"],
        },
        {
          text: "The sharp click and grind of a disk drive.",
          next: "s2_screen",
          traits: ["floppy"],
        },
        {
          text: "The high-pitched laser spin.",
          next: "s2_screen",
          traits: ["cd"],
        },
        {
          text: "The snap of a plastic case closing.",
          next: "s2_screen",
          traits: ["cassette"],
        },
      ],
    },
    s2_screen: {
      text: "The screen flickers. The tracking is off. How do you fix it?",
      options: [
        {
          text: "I hit the side of the machine.",
          next: "s3_glitch",
          traits: ["vhs", "floppy"],
        },
        {
          text: "I blow on the connectors.",
          next: "s3_glitch",
          traits: ["floppy", "cassette"],
        },
        { text: "I wipe it with my shirt.", next: "s3_glitch", traits: ["cd"] },
        {
          text: "I rewind and try again.",
          next: "s3_glitch",
          traits: ["cassette", "vhs"],
        },
      ],
    },
    s3_glitch: {
      text: "The data corrupts. A piece of memory is lost forever. How does that feel?",
      options: [
        {
          text: "Like a faded photograph. Warm and sad.",
          next: "s4_storage",
          traits: ["vhs"],
        },
        {
          text: "Frustrating. I need that data.",
          next: "s4_storage",
          traits: ["floppy"],
        },
        {
          text: "Like a scratch on a mirror. Sharp.",
          next: "s4_storage",
          traits: ["cd"],
        },
        {
          text: "Like a song stuck in my head.",
          next: "s4_storage",
          traits: ["cassette"],
        },
      ],
    },
    s4_storage: {
      text: "You are a vessel for information. What do you hold?",
      options: [
        {
          text: "Home movies and late-night horror.",
          next: "s5_final",
          traits: ["vhs"],
        },
        {
          text: "Text files and pixel art.",
          next: "s5_final",
          traits: ["floppy"],
        },
        {
          text: "Interactive encyclopedias and demos.",
          next: "s5_final",
          traits: ["cd"],
        },
        {
          text: "Mixtapes for a crush.",
          next: "s5_final",
          traits: ["cassette"],
        },
      ],
    },
    s5_final: {
      text: "The power cuts. Eject.",
      options: [
        { text: "Be kind. Rewind.", next: "end", traits: ["vhs"] },
        { text: "Save not found.", next: "end", traits: ["floppy"] },
        { text: "Disc read error.", next: "end", traits: ["cd"] },
        { text: "Flip sides.", next: "end", traits: ["cassette"] },
      ],
    },
  },
  results: {
    vhs: {
      title: "VHS TAPE",
      description:
        "Magnetic. Warped. Warm. You are defined by your degrades. Every time you are played, you change slightly. You are a collection of fuzzy, beautiful memories.",
    },
    floppy: {
      title: "FLOPPY DISK",
      description:
        "Essential. Limited. Iconic. You hold the core coding of the world. You aren't flashy, but without you, nothing boots up. You are the save button.",
    },
    cd: {
      title: "CD-ROM",
      description:
        "Shiny. Fragile. Futuristic. You promised a new world of interactivity. You reflect the light in rainbows, but one scratch can ruin the track.",
    },
    cassette: {
      title: "CASSETTE",
      description:
        "Personal. Loopable. Tangible. You are the soundtrack of a life. Tangled ribbons of emotion that can always be spooled back in with a pencil.",
    },
  },
};
