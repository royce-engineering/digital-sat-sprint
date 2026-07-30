import type { Course } from "./types";

export const organizationCourse: Course = {
  "id": "organization",
  "title": "Organization & Structure",
  "subtitle": "Map how ideas develop and why each part is there.",
  "description": "Master questions about paragraph function, transitions, sequence, comparison, concession, and the relationship between examples and claims.",
  "estimatedMinutes": 80,
  "difficulty": "Hard",
  "objectives": [
    "Summarize the passage as a sequence of moves",
    "Identify the function of a sentence or paragraph",
    "Recognize common argument structures",
    "Connect transitions to structural purpose"
  ],
  "concepts": [
    {
      "title": "Structure is movement",
      "body": "Ask what changes from the beginning to the end."
    },
    {
      "title": "Function is local purpose",
      "body": "A sentence may define, illustrate, qualify, contrast, or support."
    },
    {
      "title": "Transitions are road signs",
      "body": "However signals contrast; for example signals illustration; therefore signals conclusion."
    },
    {
      "title": "Examples serve claims",
      "body": "Determine whether a detail introduces, supports, limits, or complicates a larger point."
    }
  ],
  "strategy": [
    {
      "title": "Chunk the passage",
      "body": "Divide it into two or three meaningful parts."
    },
    {
      "title": "Give each chunk a verb",
      "body": "Use verbs such as introduces, contrasts, explains, or qualifies."
    },
    {
      "title": "Track the turn",
      "body": "Find the sentence where the passage changes direction."
    },
    {
      "title": "Link the moves",
      "body": "Express the relationship between chunks."
    },
    {
      "title": "Match the full sequence",
      "body": "Reject choices that describe only one part."
    }
  ],
  "traps": [
    {
      "title": "Content-only trap",
      "body": "Mentions the topic but not the organization."
    },
    {
      "title": "Partial map",
      "body": "Accurately describes the first half while ignoring the rest."
    },
    {
      "title": "Wrong relationship",
      "body": "Calls an example a contradiction or a concession a conclusion."
    },
    {
      "title": "Invented chronology",
      "body": "Assumes time order when the passage is organized by logic."
    }
  ],
  "coachTips": [
    "Write a two-verb map: “introduces, then challenges.”",
    "For function questions, finish the sentence “This detail is included to…”",
    "The best structural answer usually covers the whole passage in order."
  ],
  "workedExamples": [
    {
      "id": "org-1",
      "passage": "The passage first describes a long-standing theory, then introduces evidence that challenges it.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "present a view and then revise it in light of new evidence",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure",
      "walkthrough": [
        "Divide the passage into major moves.",
        "Assign a function verb to each move.",
        "Select the answer that preserves their order and relationship."
      ]
    },
    {
      "id": "org-2",
      "passage": "The author opens with a broad problem, examines two attempted solutions, and ends by proposing a third.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "move from problem to evaluated alternatives to a recommendation",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure",
      "walkthrough": [
        "Divide the passage into major moves.",
        "Assign a function verb to each move.",
        "Select the answer that preserves their order and relationship."
      ]
    },
    {
      "id": "org-3",
      "passage": "After defining the phenomenon, the passage gives a historical example and then explains its modern relevance.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "define, illustrate, and connect to the present",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure",
      "walkthrough": [
        "Divide the passage into major moves.",
        "Assign a function verb to each move.",
        "Select the answer that preserves their order and relationship."
      ]
    },
    {
      "id": "org-4",
      "passage": "The passage contrasts two methods before explaining why researchers combined them.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "compare approaches and motivate a synthesis",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure",
      "walkthrough": [
        "Divide the passage into major moves.",
        "Assign a function verb to each move.",
        "Select the answer that preserves their order and relationship."
      ]
    },
    {
      "id": "org-5",
      "passage": "The author begins with an apparent contradiction and resolves it by distinguishing two meanings of the same term.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "pose and resolve a conceptual puzzle",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure",
      "walkthrough": [
        "Divide the passage into major moves.",
        "Assign a function verb to each move.",
        "Select the answer that preserves their order and relationship."
      ]
    },
    {
      "id": "org-6",
      "passage": "A specific case study leads into a broader claim about urban planning.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "use an example to develop a general conclusion",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure",
      "walkthrough": [
        "Divide the passage into major moves.",
        "Assign a function verb to each move.",
        "Select the answer that preserves their order and relationship."
      ]
    },
    {
      "id": "org-7",
      "passage": "The passage lists several observations and then offers a hypothesis that accounts for all of them.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "build from evidence to an explanatory hypothesis",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure",
      "walkthrough": [
        "Divide the passage into major moves.",
        "Assign a function verb to each move.",
        "Select the answer that preserves their order and relationship."
      ]
    },
    {
      "id": "org-8",
      "passage": "The author states a claim, acknowledges a limitation, and narrows the claim accordingly.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "qualify an argument in response to a limitation",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure",
      "walkthrough": [
        "Divide the passage into major moves.",
        "Assign a function verb to each move.",
        "Select the answer that preserves their order and relationship."
      ]
    },
    {
      "id": "org-9",
      "passage": "The passage describes a failed experiment, identifies the design flaw, and explains the corrected procedure.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "trace failure, diagnosis, and revision",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure",
      "walkthrough": [
        "Divide the passage into major moves.",
        "Assign a function verb to each move.",
        "Select the answer that preserves their order and relationship."
      ]
    },
    {
      "id": "org-10",
      "passage": "Two scholars’ interpretations are summarized before the author identifies a shared assumption.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "compare positions and reveal common ground",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure",
      "walkthrough": [
        "Divide the passage into major moves.",
        "Assign a function verb to each move.",
        "Select the answer that preserves their order and relationship."
      ]
    }
  ],
  "questions": [
    {
      "id": "org-11",
      "passage": "The passage first describes a long-standing theory, then introduces evidence that challenges it.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "present a view and then revise it in light of new evidence",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-12",
      "passage": "The author opens with a broad problem, examines two attempted solutions, and ends by proposing a third.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "move from problem to evaluated alternatives to a recommendation",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-13",
      "passage": "After defining the phenomenon, the passage gives a historical example and then explains its modern relevance.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "define, illustrate, and connect to the present",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-14",
      "passage": "The passage contrasts two methods before explaining why researchers combined them.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "compare approaches and motivate a synthesis",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-15",
      "passage": "The author begins with an apparent contradiction and resolves it by distinguishing two meanings of the same term.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "pose and resolve a conceptual puzzle",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-16",
      "passage": "A specific case study leads into a broader claim about urban planning.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "use an example to develop a general conclusion",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-17",
      "passage": "The passage lists several observations and then offers a hypothesis that accounts for all of them.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "build from evidence to an explanatory hypothesis",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-18",
      "passage": "The author states a claim, acknowledges a limitation, and narrows the claim accordingly.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "qualify an argument in response to a limitation",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-19",
      "passage": "The passage describes a failed experiment, identifies the design flaw, and explains the corrected procedure.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "trace failure, diagnosis, and revision",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-20",
      "passage": "Two scholars’ interpretations are summarized before the author identifies a shared assumption.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "compare positions and reveal common ground",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-21",
      "passage": "The passage first describes a long-standing theory, then introduces evidence that challenges it.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "present a view and then revise it in light of new evidence",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-22",
      "passage": "The author opens with a broad problem, examines two attempted solutions, and ends by proposing a third.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "move from problem to evaluated alternatives to a recommendation",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-23",
      "passage": "After defining the phenomenon, the passage gives a historical example and then explains its modern relevance.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "define, illustrate, and connect to the present",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-24",
      "passage": "The passage contrasts two methods before explaining why researchers combined them.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "compare approaches and motivate a synthesis",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-25",
      "passage": "The author begins with an apparent contradiction and resolves it by distinguishing two meanings of the same term.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "pose and resolve a conceptual puzzle",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-26",
      "passage": "A specific case study leads into a broader claim about urban planning.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "use an example to develop a general conclusion",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-27",
      "passage": "The passage lists several observations and then offers a hypothesis that accounts for all of them.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "build from evidence to an explanatory hypothesis",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-28",
      "passage": "The author states a claim, acknowledges a limitation, and narrows the claim accordingly.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "qualify an argument in response to a limitation",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-29",
      "passage": "The passage describes a failed experiment, identifies the design flaw, and explains the corrected procedure.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "trace failure, diagnosis, and revision",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Organization & Structure"
    },
    {
      "id": "org-30",
      "passage": "Two scholars’ interpretations are summarized before the author identifies a shared assumption.",
      "prompt": "Which choice best describes the overall organization of the passage?",
      "choices": [
        {
          "text": "compare positions and reveal common ground",
          "rationale": "Correct: This accurately maps the sequence and purpose of the passage."
        },
        {
          "text": "present unrelated facts in chronological order",
          "rationale": "Not best: The parts are logically connected, not merely chronological."
        },
        {
          "text": "introduce a claim and repeat it with stronger language",
          "rationale": "Not best: The later portion changes or develops the first."
        },
        {
          "text": "describe a debate without evaluating either side",
          "rationale": "Not best: The passage performs a more specific structural move."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Organization & Structure"
    }
  ],
  "flashcards": [
    {
      "front": "What does “qualify” mean structurally?",
      "back": "To limit or refine a claim."
    },
    {
      "front": "What does a concession do?",
      "back": "Acknowledges a point before advancing or refining an argument."
    },
    {
      "front": "What does an example usually do?",
      "back": "Illustrates or supports a broader idea."
    },
    {
      "front": "What signals contrast?",
      "back": "Words such as however, yet, whereas, and in contrast."
    },
    {
      "front": "What is a passage map?",
      "back": "A brief sequence of function verbs summarizing the text."
    },
    {
      "front": "What should you identify first?",
      "back": "The exact organization & structure task named in the question stem."
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
      "front": "Organization & Structure checkpoint 11",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 12",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 13",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 14",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 15",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 16",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 17",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 18",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 19",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 20",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 21",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 22",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 23",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 24",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 25",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 26",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 27",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 28",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 29",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Organization & Structure checkpoint 30",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    }
  ],
  "nextCourseId": "cross-text"
};
