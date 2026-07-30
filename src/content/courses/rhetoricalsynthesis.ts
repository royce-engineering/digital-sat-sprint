import type { Course } from "./types";

export const rhetoricalSynthesisCourse: Course = {
  "id": "rhetorical-synthesis",
  "title": "Rhetorical Synthesis",
  "subtitle": "Select and combine notes to achieve a precise writing goal.",
  "description": "Turn source notes into concise, accurate sentences by prioritizing only the information needed for the stated purpose.",
  "estimatedMinutes": 85,
  "difficulty": "Hard",
  "objectives": [
    "Translate the rhetorical goal into a checklist",
    "Select relevant notes and omit distractions",
    "Combine ideas with accurate logical relationships",
    "Avoid unsupported claims and distorted emphasis"
  ],
  "concepts": [
    {
      "title": "Goal controls selection",
      "body": "A comparison requires different notes than a historical overview."
    },
    {
      "title": "Selection beats coverage",
      "body": "The best answer often omits true but irrelevant details."
    },
    {
      "title": "Relationships matter",
      "body": "Use because, although, while, and therefore only when the notes justify them."
    },
    {
      "title": "No invention",
      "body": "Do not add causes, judgments, or certainty absent from the notes."
    }
  ],
  "strategy": [
    {
      "title": "Circle the goal",
      "body": "Identify the exact purpose: explain, compare, introduce, support, or qualify."
    },
    {
      "title": "Mark relevant notes",
      "body": "Select only facts that serve that purpose."
    },
    {
      "title": "Name the relationship",
      "body": "Decide whether the facts contrast, cause, illustrate, or qualify."
    },
    {
      "title": "Predict the sentence",
      "body": "Draft a compact version before reading choices."
    },
    {
      "title": "Audit accuracy",
      "body": "Check every word against the notes and goal."
    }
  ],
  "traps": [
    {
      "title": "Everything answer",
      "body": "Includes many true notes but fails the rhetorical goal."
    },
    {
      "title": "Unsupported link",
      "body": "Creates causation or certainty not established by the notes."
    },
    {
      "title": "Wrong emphasis",
      "body": "Highlights a secondary detail instead of the requested focus."
    },
    {
      "title": "Goal mismatch",
      "body": "Produces a clear sentence that performs the wrong function."
    }
  ],
  "coachTips": [
    "Read the goal before the notes.",
    "True information can still be irrelevant.",
    "The strongest answer is usually both selective and explicit about the relationship among facts."
  ],
  "workedExamples": [
    {
      "id": "synth-1",
      "passage": "Notes: A city planted 5,000 street trees in 2018. Summer surface temperatures fell most in blocks with continuous canopy. Researchers caution that irrigation and tree survival affect long-term results.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To explain the finding while preserving its limitation?",
      "choices": [
        {
          "text": "A 2018 tree-planting program was associated with the greatest cooling on blocks with continuous canopy, though long-term benefits depend partly on irrigation and tree survival.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis",
      "walkthrough": [
        "Translate the rhetorical goal into required content.",
        "Select only the notes that serve it.",
        "Check that the sentence expresses the correct logical relationship."
      ]
    },
    {
      "id": "synth-2",
      "passage": "Notes: Poet Ada Lim published her first collection in 1998. Critics initially focused on its urban imagery. Recent scholars emphasize its unusual sound patterns.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To highlight a change in critical emphasis?",
      "choices": [
        {
          "text": "Although early critics emphasized the urban imagery in Ada Lim’s 1998 debut, recent scholarship has focused more on the collection’s distinctive sound patterns.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis",
      "walkthrough": [
        "Translate the rhetorical goal into required content.",
        "Select only the notes that serve it.",
        "Check that the sentence expresses the correct logical relationship."
      ]
    },
    {
      "id": "synth-3",
      "passage": "Notes: Solar panels produce less electricity on cloudy days. Battery storage can reduce the effect of short fluctuations. Seasonal shortages may still require other sources.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To present a balanced assessment?",
      "choices": [
        {
          "text": "Battery storage can smooth short-term drops in solar generation, but it may not fully address seasonal shortages.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis",
      "walkthrough": [
        "Translate the rhetorical goal into required content.",
        "Select only the notes that serve it.",
        "Check that the sentence expresses the correct logical relationship."
      ]
    },
    {
      "id": "synth-4",
      "passage": "Notes: Museum attendance rose 12% after evening hours were added. Surveys show the increase was largest among working adults. Ticket prices did not change.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To support the claim that scheduling affected access?",
      "choices": [
        {
          "text": "After the museum added evening hours without changing ticket prices, attendance rose 12%, with the largest increase among working adults.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis",
      "walkthrough": [
        "Translate the rhetorical goal into required content.",
        "Select only the notes that serve it.",
        "Check that the sentence expresses the correct logical relationship."
      ]
    },
    {
      "id": "synth-5",
      "passage": "Notes: Two alloys were tested. Alloy A was lighter. Alloy B resisted corrosion longer. The design team selected B for a marine component.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To explain a design choice?",
      "choices": [
        {
          "text": "The team selected the heavier Alloy B because its superior corrosion resistance better suited the marine component.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis",
      "walkthrough": [
        "Translate the rhetorical goal into required content.",
        "Select only the notes that serve it.",
        "Check that the sentence expresses the correct logical relationship."
      ]
    },
    {
      "id": "synth-6",
      "passage": "Notes: Historian Malik uses tax records. The records omit informal trade. Malik combines them with port diaries.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To explain why two source types are combined?",
      "choices": [
        {
          "text": "Because tax records omit informal trade, Malik supplements them with port diaries.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis",
      "walkthrough": [
        "Translate the rhetorical goal into required content.",
        "Select only the notes that serve it.",
        "Check that the sentence expresses the correct logical relationship."
      ]
    },
    {
      "id": "synth-7",
      "passage": "Notes: Study included 40 schools. Scores rose in schools using the program. Schools volunteered to participate. Researchers call for randomized trials.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To state the result cautiously?",
      "choices": [
        {
          "text": "Scores rose at participating schools, but because the schools volunteered, randomized trials are needed before the program’s effect can be established.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis",
      "walkthrough": [
        "Translate the rhetorical goal into required content.",
        "Select only the notes that serve it.",
        "Check that the sentence expresses the correct logical relationship."
      ]
    },
    {
      "id": "synth-8",
      "passage": "Notes: The bridge opened in 1924. It used a then-novel cable design. Engineers later adapted the design for longer spans.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To emphasize historical influence?",
      "choices": [
        {
          "text": "The bridge’s novel 1924 cable design later influenced engineers constructing longer spans.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis",
      "walkthrough": [
        "Translate the rhetorical goal into required content.",
        "Select only the notes that serve it.",
        "Check that the sentence expresses the correct logical relationship."
      ]
    },
    {
      "id": "synth-9",
      "passage": "Notes: Species X nests near rivers. Flooding destroys some nests. Flooding also creates open sandbars used the next year.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To show a complex ecological effect?",
      "choices": [
        {
          "text": "Flooding can destroy current nests of Species X while creating sandbar habitat for future nesting.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis",
      "walkthrough": [
        "Translate the rhetorical goal into required content.",
        "Select only the notes that serve it.",
        "Check that the sentence expresses the correct logical relationship."
      ]
    },
    {
      "id": "synth-10",
      "passage": "Notes: Company reduced packaging weight by 20%. Shipping emissions fell. Product damage increased slightly.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To compare benefits and tradeoffs?",
      "choices": [
        {
          "text": "Reducing packaging weight lowered shipping emissions but slightly increased product damage.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis",
      "walkthrough": [
        "Translate the rhetorical goal into required content.",
        "Select only the notes that serve it.",
        "Check that the sentence expresses the correct logical relationship."
      ]
    }
  ],
  "questions": [
    {
      "id": "synth-11",
      "passage": "Notes: A city planted 5,000 street trees in 2018. Summer surface temperatures fell most in blocks with continuous canopy. Researchers caution that irrigation and tree survival affect long-term results.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To explain the finding while preserving its limitation?",
      "choices": [
        {
          "text": "A 2018 tree-planting program was associated with the greatest cooling on blocks with continuous canopy, though long-term benefits depend partly on irrigation and tree survival.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-12",
      "passage": "Notes: Poet Ada Lim published her first collection in 1998. Critics initially focused on its urban imagery. Recent scholars emphasize its unusual sound patterns.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To highlight a change in critical emphasis?",
      "choices": [
        {
          "text": "Although early critics emphasized the urban imagery in Ada Lim’s 1998 debut, recent scholarship has focused more on the collection’s distinctive sound patterns.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-13",
      "passage": "Notes: Solar panels produce less electricity on cloudy days. Battery storage can reduce the effect of short fluctuations. Seasonal shortages may still require other sources.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To present a balanced assessment?",
      "choices": [
        {
          "text": "Battery storage can smooth short-term drops in solar generation, but it may not fully address seasonal shortages.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-14",
      "passage": "Notes: Museum attendance rose 12% after evening hours were added. Surveys show the increase was largest among working adults. Ticket prices did not change.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To support the claim that scheduling affected access?",
      "choices": [
        {
          "text": "After the museum added evening hours without changing ticket prices, attendance rose 12%, with the largest increase among working adults.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-15",
      "passage": "Notes: Two alloys were tested. Alloy A was lighter. Alloy B resisted corrosion longer. The design team selected B for a marine component.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To explain a design choice?",
      "choices": [
        {
          "text": "The team selected the heavier Alloy B because its superior corrosion resistance better suited the marine component.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-16",
      "passage": "Notes: Historian Malik uses tax records. The records omit informal trade. Malik combines them with port diaries.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To explain why two source types are combined?",
      "choices": [
        {
          "text": "Because tax records omit informal trade, Malik supplements them with port diaries.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-17",
      "passage": "Notes: Study included 40 schools. Scores rose in schools using the program. Schools volunteered to participate. Researchers call for randomized trials.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To state the result cautiously?",
      "choices": [
        {
          "text": "Scores rose at participating schools, but because the schools volunteered, randomized trials are needed before the program’s effect can be established.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-18",
      "passage": "Notes: The bridge opened in 1924. It used a then-novel cable design. Engineers later adapted the design for longer spans.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To emphasize historical influence?",
      "choices": [
        {
          "text": "The bridge’s novel 1924 cable design later influenced engineers constructing longer spans.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-19",
      "passage": "Notes: Species X nests near rivers. Flooding destroys some nests. Flooding also creates open sandbars used the next year.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To show a complex ecological effect?",
      "choices": [
        {
          "text": "Flooding can destroy current nests of Species X while creating sandbar habitat for future nesting.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-20",
      "passage": "Notes: Company reduced packaging weight by 20%. Shipping emissions fell. Product damage increased slightly.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To compare benefits and tradeoffs?",
      "choices": [
        {
          "text": "Reducing packaging weight lowered shipping emissions but slightly increased product damage.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-21",
      "passage": "Notes: A city planted 5,000 street trees in 2018. Summer surface temperatures fell most in blocks with continuous canopy. Researchers caution that irrigation and tree survival affect long-term results.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To explain the finding while preserving its limitation?",
      "choices": [
        {
          "text": "A 2018 tree-planting program was associated with the greatest cooling on blocks with continuous canopy, though long-term benefits depend partly on irrigation and tree survival.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-22",
      "passage": "Notes: Poet Ada Lim published her first collection in 1998. Critics initially focused on its urban imagery. Recent scholars emphasize its unusual sound patterns.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To highlight a change in critical emphasis?",
      "choices": [
        {
          "text": "Although early critics emphasized the urban imagery in Ada Lim’s 1998 debut, recent scholarship has focused more on the collection’s distinctive sound patterns.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-23",
      "passage": "Notes: Solar panels produce less electricity on cloudy days. Battery storage can reduce the effect of short fluctuations. Seasonal shortages may still require other sources.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To present a balanced assessment?",
      "choices": [
        {
          "text": "Battery storage can smooth short-term drops in solar generation, but it may not fully address seasonal shortages.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-24",
      "passage": "Notes: Museum attendance rose 12% after evening hours were added. Surveys show the increase was largest among working adults. Ticket prices did not change.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To support the claim that scheduling affected access?",
      "choices": [
        {
          "text": "After the museum added evening hours without changing ticket prices, attendance rose 12%, with the largest increase among working adults.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-25",
      "passage": "Notes: Two alloys were tested. Alloy A was lighter. Alloy B resisted corrosion longer. The design team selected B for a marine component.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To explain a design choice?",
      "choices": [
        {
          "text": "The team selected the heavier Alloy B because its superior corrosion resistance better suited the marine component.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-26",
      "passage": "Notes: Historian Malik uses tax records. The records omit informal trade. Malik combines them with port diaries.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To explain why two source types are combined?",
      "choices": [
        {
          "text": "Because tax records omit informal trade, Malik supplements them with port diaries.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-27",
      "passage": "Notes: Study included 40 schools. Scores rose in schools using the program. Schools volunteered to participate. Researchers call for randomized trials.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To state the result cautiously?",
      "choices": [
        {
          "text": "Scores rose at participating schools, but because the schools volunteered, randomized trials are needed before the program’s effect can be established.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-28",
      "passage": "Notes: The bridge opened in 1924. It used a then-novel cable design. Engineers later adapted the design for longer spans.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To emphasize historical influence?",
      "choices": [
        {
          "text": "The bridge’s novel 1924 cable design later influenced engineers constructing longer spans.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-29",
      "passage": "Notes: Species X nests near rivers. Flooding destroys some nests. Flooding also creates open sandbars used the next year.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To show a complex ecological effect?",
      "choices": [
        {
          "text": "Flooding can destroy current nests of Species X while creating sandbar habitat for future nesting.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Rhetorical Synthesis"
    },
    {
      "id": "synth-30",
      "passage": "Notes: Company reduced packaging weight by 20%. Shipping emissions fell. Product damage increased slightly.",
      "prompt": "Which choice most effectively uses the notes to accomplish this goal: To compare benefits and tradeoffs?",
      "choices": [
        {
          "text": "Reducing packaging weight lowered shipping emissions but slightly increased product damage.",
          "rationale": "Correct: This uses only relevant notes and directly fulfills the stated rhetorical goal."
        },
        {
          "text": "The notes contain several facts about the topic.",
          "rationale": "Not best: This vague sentence does not synthesize the relevant information."
        },
        {
          "text": "Every detail in the notes is equally important and should be listed.",
          "rationale": "Not best: Effective synthesis selects rather than copies all notes."
        },
        {
          "text": "The topic is important for many reasons not mentioned here.",
          "rationale": "Not best: This introduces unsupported information."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Rhetorical Synthesis"
    }
  ],
  "flashcards": [
    {
      "front": "What is rhetorical synthesis?",
      "back": "Selecting and combining source information to accomplish a specific writing goal."
    },
    {
      "front": "What should you read first?",
      "back": "The rhetorical goal."
    },
    {
      "front": "Why omit true notes?",
      "back": "They may be irrelevant to the requested purpose."
    },
    {
      "front": "What is an unsupported link?",
      "back": "A causal or logical relationship not established by the notes."
    },
    {
      "front": "What does “introduce” usually require?",
      "back": "Identifying the subject and the most relevant context, not every detail."
    },
    {
      "front": "What should you identify first?",
      "back": "The exact rhetorical synthesis task named in the question stem."
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
      "front": "Rhetorical Synthesis checkpoint 11",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 12",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 13",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 14",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 15",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 16",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 17",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 18",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 19",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 20",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 21",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 22",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 23",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 24",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 25",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 26",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 27",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 28",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 29",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Rhetorical Synthesis checkpoint 30",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    }
  ],
  "nextCourseId": "reading-workflow"
};
