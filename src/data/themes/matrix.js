export default {
  id: "matrix",
  startNodes: ["q1"],
  results: {
    one: {
      title: "THE ONE",
      description:
        "You see the code behind the curtain. Limits are only in your mind.",
    },
    sage: {
      title: "THE ORACLE",
      description:
        "You understand the human heart within the machine. Balance is key.",
    },
    believer: {
      title: "THE BELIEVER",
      description:
        "Loyal to the cause. You fight for a truth you can feel but cannot see.",
    },
    architect: {
      title: "THE ARCHITECT",
      description:
        "Order, purpose, and control. Chaos is a variable to be balanced.",
    },
    cypher: {
      title: "THE PLAYER",
      description:
        "Ignorance is bliss. You prefer the comfort of the illusion.",
    },
  },
  nodes: {
    q1: {
      text: "A choice is offered. Two paths defined by color.",
      options: [
        {
          text: "The Red Pill. Truth, no matter how cold.",
          next: "q2a",
          traits: ["one", "believer"],
        },
        {
          text: "The Blue Pill. Comfort and the story ends.",
          next: "q2b",
          traits: ["cypher", "architect"],
        },
      ],
    },
    q2a: {
      text: "The real world is a wasteland. The sky is scorched.",
      options: [
        { text: "We can fix it.", next: "q3a", traits: ["one", "believer"] },
        {
          text: "We must adapt to survive.",
          next: "q3b",
          traits: ["sage", "architect"],
        },
        { text: "I regret waking up.", next: "q3c", traits: ["cypher"] },
      ],
    },
    q2b: {
      text: "You wake up in your bed. It feels real. Is it?",
      options: [
        { text: "Accept it. It feels good.", next: "end", traits: ["cypher"] },
        {
          text: "Investigate. Something is off.",
          next: "q3a",
          traits: ["one", "sage"],
        },
      ],
    },
    q3a: {
      text: "You face an Agent. He moves faster than thought.",
      options: [
        {
          text: "Run. Survival is priority.",
          next: "end",
          traits: ["sage", "believer"],
        },
        {
          text: "Fight. I don't believe in his rules.",
          next: "end",
          traits: ["one", "rebel"],
        },
      ],
    },
    q3b: {
      text: "The Oracle offers you a cookie. She smiles.",
      options: [
        {
          text: "Eat it. I trust her.",
          next: "end",
          traits: ["believer", "sage"],
        },
        {
          text: "Analyze it. Is it code?",
          next: "end",
          traits: ["one", "architect"],
        },
      ],
    },
    q3c: {
      text: "A deal is struck. A steak that tastes juicy and real.",
      options: [
        {
          text: "I want to remember nothing.",
          next: "end",
          traits: ["cypher"],
        },
        {
          text: "I can't do this. Betrayal is wrong.",
          next: "end",
          traits: ["believer"],
        },
      ],
    },
  },
};
