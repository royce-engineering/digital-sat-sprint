import type { Course } from "./types";

export const crossTextCourse: Course = {
  "id": "cross-text",
  "title": "Cross-Text Connections",
  "subtitle": "Compare claims, evidence, assumptions, and perspectives across two texts.",
  "description": "Learn to represent each text fairly before identifying agreement, qualification, challenge, extension, or difference in emphasis.",
  "estimatedMinutes": 85,
  "difficulty": "Hard",
  "objectives": [
    "Summarize each text independently",
    "Distinguish disagreement from different emphasis",
    "Identify how evidence in one text affects another",
    "Predict how one author would respond"
  ],
  "concepts": [
    {
      "title": "Two summaries first",
      "body": "Do not compare until you can state each text’s main claim."
    },
    {
      "title": "Relationship vocabulary",
      "body": "Agree, qualify, challenge, extend, reframe, and differ in emphasis are distinct."
    },
    {
      "title": "Same evidence, different judgment",
      "body": "Authors may accept the same facts but interpret them differently."
    },
    {
      "title": "Response questions",
      "body": "Predict only what the author’s stated reasoning supports."
    }
  ],
  "strategy": [
    {
      "title": "Label Text 1",
      "body": "Write its claim in a few words."
    },
    {
      "title": "Label Text 2",
      "body": "Do the same without borrowing Text 1’s language."
    },
    {
      "title": "Find common ground",
      "body": "Identify the shared topic or accepted premise."
    },
    {
      "title": "Name the relationship",
      "body": "Use one precise relationship verb."
    },
    {
      "title": "Test direction",
      "body": "Check which text is qualifying or challenging which."
    }
  ],
  "traps": [
    {
      "title": "False contradiction",
      "body": "Different emphasis is treated as complete disagreement."
    },
    {
      "title": "Reversed direction",
      "body": "Correct relationship, but Text 1 and Text 2 are switched."
    },
    {
      "title": "One-text answer",
      "body": "Accurately describes one passage but never compares them."
    },
    {
      "title": "Outside synthesis",
      "body": "Adds a conclusion neither text supports."
    }
  ],
  "coachTips": [
    "Represent both authors generously before comparing them.",
    "“Different reasons” does not necessarily mean “different conclusions.”",
    "For response questions, reuse the author’s logic—not your own opinion."
  ],
  "workedExamples": [
    {
      "id": "cross-1",
      "passage": "Text 1 argues that remote work increases productivity by reducing interruptions. Text 2 agrees that interruptions decline but notes that mentoring new employees becomes more difficult.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 qualifies Text 1 by identifying a cost that Text 1 does not address.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections",
      "walkthrough": [
        "Summarize each text separately.",
        "Identify shared ground.",
        "Choose the most precise relationship verb and verify its direction."
      ]
    },
    {
      "id": "cross-2",
      "passage": "Text 1 attributes the decline in bee populations mainly to pesticides. Text 2 emphasizes habitat loss but acknowledges that pesticides can intensify the problem.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "The texts emphasize different primary causes while recognizing interacting factors.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections",
      "walkthrough": [
        "Summarize each text separately.",
        "Identify shared ground.",
        "Choose the most precise relationship verb and verify its direction."
      ]
    },
    {
      "id": "cross-3",
      "passage": "Text 1 praises a novel’s fragmented narration as realistic. Text 2 finds the same fragmentation emotionally distancing.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "The authors evaluate the same feature differently.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections",
      "walkthrough": [
        "Summarize each text separately.",
        "Identify shared ground.",
        "Choose the most precise relationship verb and verify its direction."
      ]
    },
    {
      "id": "cross-4",
      "passage": "Text 1 predicts that a new material will lower construction costs. Text 2 presents early field data showing that installation remains expensive.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 provides evidence that complicates Text 1’s prediction.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections",
      "walkthrough": [
        "Summarize each text separately.",
        "Identify shared ground.",
        "Choose the most precise relationship verb and verify its direction."
      ]
    },
    {
      "id": "cross-5",
      "passage": "Text 1 claims the inscription was ceremonial. Text 2 cites wear patterns suggesting frequent practical use.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 challenges Text 1 with physical evidence.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections",
      "walkthrough": [
        "Summarize each text separately.",
        "Identify shared ground.",
        "Choose the most precise relationship verb and verify its direction."
      ]
    },
    {
      "id": "cross-6",
      "passage": "Text 1 defines innovation as creating new products. Text 2 argues that redesigning processes can also count as innovation.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 broadens the definition used in Text 1.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections",
      "walkthrough": [
        "Summarize each text separately.",
        "Identify shared ground.",
        "Choose the most precise relationship verb and verify its direction."
      ]
    },
    {
      "id": "cross-7",
      "passage": "Text 1 supports restoring wetlands for flood control. Text 2 supports restoration primarily for biodiversity.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "The texts endorse the same action for different reasons.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections",
      "walkthrough": [
        "Summarize each text separately.",
        "Identify shared ground.",
        "Choose the most precise relationship verb and verify its direction."
      ]
    },
    {
      "id": "cross-8",
      "passage": "Text 1 reports a correlation between sleep and grades. Text 2 warns that the study cannot establish causation.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 limits the conclusion that can be drawn from Text 1.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections",
      "walkthrough": [
        "Summarize each text separately.",
        "Identify shared ground.",
        "Choose the most precise relationship verb and verify its direction."
      ]
    },
    {
      "id": "cross-9",
      "passage": "Text 1 views public monuments as fixed statements. Text 2 describes how public interpretation changes over time.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 reframes monuments as dynamic in meaning.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections",
      "walkthrough": [
        "Summarize each text separately.",
        "Identify shared ground.",
        "Choose the most precise relationship verb and verify its direction."
      ]
    },
    {
      "id": "cross-10",
      "passage": "Text 1 argues that the policy failed nationally. Text 2 shows that it succeeded in cities with strong local enforcement.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 identifies conditions under which Text 1’s generalization does not hold.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections",
      "walkthrough": [
        "Summarize each text separately.",
        "Identify shared ground.",
        "Choose the most precise relationship verb and verify its direction."
      ]
    }
  ],
  "questions": [
    {
      "id": "cross-11",
      "passage": "Text 1 argues that remote work increases productivity by reducing interruptions. Text 2 agrees that interruptions decline but notes that mentoring new employees becomes more difficult.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 qualifies Text 1 by identifying a cost that Text 1 does not address.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-12",
      "passage": "Text 1 attributes the decline in bee populations mainly to pesticides. Text 2 emphasizes habitat loss but acknowledges that pesticides can intensify the problem.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "The texts emphasize different primary causes while recognizing interacting factors.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-13",
      "passage": "Text 1 praises a novel’s fragmented narration as realistic. Text 2 finds the same fragmentation emotionally distancing.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "The authors evaluate the same feature differently.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-14",
      "passage": "Text 1 predicts that a new material will lower construction costs. Text 2 presents early field data showing that installation remains expensive.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 provides evidence that complicates Text 1’s prediction.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-15",
      "passage": "Text 1 claims the inscription was ceremonial. Text 2 cites wear patterns suggesting frequent practical use.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 challenges Text 1 with physical evidence.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-16",
      "passage": "Text 1 defines innovation as creating new products. Text 2 argues that redesigning processes can also count as innovation.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 broadens the definition used in Text 1.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-17",
      "passage": "Text 1 supports restoring wetlands for flood control. Text 2 supports restoration primarily for biodiversity.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "The texts endorse the same action for different reasons.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-18",
      "passage": "Text 1 reports a correlation between sleep and grades. Text 2 warns that the study cannot establish causation.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 limits the conclusion that can be drawn from Text 1.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-19",
      "passage": "Text 1 views public monuments as fixed statements. Text 2 describes how public interpretation changes over time.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 reframes monuments as dynamic in meaning.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-20",
      "passage": "Text 1 argues that the policy failed nationally. Text 2 shows that it succeeded in cities with strong local enforcement.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 identifies conditions under which Text 1’s generalization does not hold.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-21",
      "passage": "Text 1 argues that remote work increases productivity by reducing interruptions. Text 2 agrees that interruptions decline but notes that mentoring new employees becomes more difficult.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 qualifies Text 1 by identifying a cost that Text 1 does not address.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-22",
      "passage": "Text 1 attributes the decline in bee populations mainly to pesticides. Text 2 emphasizes habitat loss but acknowledges that pesticides can intensify the problem.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "The texts emphasize different primary causes while recognizing interacting factors.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-23",
      "passage": "Text 1 praises a novel’s fragmented narration as realistic. Text 2 finds the same fragmentation emotionally distancing.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "The authors evaluate the same feature differently.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-24",
      "passage": "Text 1 predicts that a new material will lower construction costs. Text 2 presents early field data showing that installation remains expensive.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 provides evidence that complicates Text 1’s prediction.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-25",
      "passage": "Text 1 claims the inscription was ceremonial. Text 2 cites wear patterns suggesting frequent practical use.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 challenges Text 1 with physical evidence.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-26",
      "passage": "Text 1 defines innovation as creating new products. Text 2 argues that redesigning processes can also count as innovation.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 broadens the definition used in Text 1.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-27",
      "passage": "Text 1 supports restoring wetlands for flood control. Text 2 supports restoration primarily for biodiversity.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "The texts endorse the same action for different reasons.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-28",
      "passage": "Text 1 reports a correlation between sleep and grades. Text 2 warns that the study cannot establish causation.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 limits the conclusion that can be drawn from Text 1.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-29",
      "passage": "Text 1 views public monuments as fixed statements. Text 2 describes how public interpretation changes over time.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 reframes monuments as dynamic in meaning.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Cross-Text Connections"
    },
    {
      "id": "cross-30",
      "passage": "Text 1 argues that the policy failed nationally. Text 2 shows that it succeeded in cities with strong local enforcement.",
      "prompt": "Which choice best describes the relationship between the two texts?",
      "choices": [
        {
          "text": "Text 2 identifies conditions under which Text 1’s generalization does not hold.",
          "rationale": "Correct: This accurately states both the shared topic and the relationship between the texts."
        },
        {
          "text": "The texts discuss unrelated questions and cannot be compared.",
          "rationale": "Not best: Both texts clearly address the same subject."
        },
        {
          "text": "Text 2 simply repeats Text 1 in more detail.",
          "rationale": "Not best: Text 2 adds a distinct qualification, challenge, or perspective."
        },
        {
          "text": "Text 1 completely disproves Text 2.",
          "rationale": "Not best: The relationship is not total contradiction in this direction."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Cross-Text Connections"
    }
  ],
  "flashcards": [
    {
      "front": "What does “qualify” mean across texts?",
      "back": "To limit a claim without rejecting it entirely."
    },
    {
      "front": "What does “extend” mean?",
      "back": "To add a new implication or application consistent with the first text."
    },
    {
      "front": "What is false contradiction?",
      "back": "Mistaking different focus or degree for total disagreement."
    },
    {
      "front": "How do you answer response questions?",
      "back": "Apply the responding author’s stated principles to the other text."
    },
    {
      "front": "Why summarize separately?",
      "back": "It prevents one text from distorting your reading of the other."
    },
    {
      "front": "What should you identify first?",
      "back": "The exact cross-text connections task named in the question stem."
    },
    {
      "front": "What makes an answer defensible?",
      "back": "Specific language in the passage, not outside knowledge."
    },
    {
      "front": "What is the safest elimination rule?",
      "back": "Reject any choice that is too strong, too broad, or only partly supported."
    },
    {
      "front": "Why paraphrase before reading choices?",
      "back": "It reduces attraction to polished but inaccurate distractors."
    },
    {
      "front": "What does precision mean on the SAT?",
      "back": "Matching the scope, degree, and function of the passage exactly."
    },
    {
      "front": "Cross-Text Connections checkpoint 11",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 12",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 13",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 14",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 15",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 16",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 17",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 18",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 19",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 20",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 21",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 22",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 23",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 24",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 25",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 26",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 27",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 28",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 29",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Cross-Text Connections checkpoint 30",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    }
  ],
  "nextCourseId": "rhetorical-synthesis"
};
