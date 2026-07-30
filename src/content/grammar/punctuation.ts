import type { Course } from "@/content/courses/types";

export const punctuationCourse: Course = {
  "id": "punctuation",
  "title": "Punctuation",
  "subtitle": "Use commas, semicolons, colons, dashes, and apostrophes by rule—not by sound.",
  "description": "Master the punctuation patterns most frequently tested on the Digital SAT, including nonessential information, lists, explanations, possession, and sentence joins.",
  "estimatedMinutes": 55,
  "difficulty": "Medium",
  "objectives": [
    "Punctuate nonessential modifiers",
    "Use colons and dashes after complete clauses",
    "Distinguish semicolons from commas",
    "Apply apostrophes for possession and contractions"
  ],
  "concepts": [
    {
      "title": "Commas around nonessential information",
      "body": "Information that can be removed without changing the core identity or meaning is set off with matching commas."
    },
    {
      "title": "Colon rule",
      "body": "A colon must follow a complete clause and introduce an explanation, example, or list."
    },
    {
      "title": "Dash pairs",
      "body": "A pair of dashes can set off an interruption; one dash can introduce a dramatic explanation after a complete clause."
    },
    {
      "title": "Apostrophes",
      "body": "Use apostrophes for possession or omitted letters, never simply to make a noun plural."
    }
  ],
  "strategy": [
    {
      "title": "Read without punctuation",
      "body": "Identify the sentence core."
    },
    {
      "title": "Label the insertion",
      "body": "Decide whether material is essential, nonessential, a list, or an explanation."
    },
    {
      "title": "Check both sides",
      "body": "Paired punctuation must open and close correctly."
    },
    {
      "title": "Apply the exact rule",
      "body": "Ignore how long the pause sounds."
    },
    {
      "title": "Protect meaning",
      "body": "Make sure punctuation does not change which noun a phrase modifies."
    }
  ],
  "traps": [
    {
      "title": "One-comma trap",
      "body": "A nonessential phrase in the middle needs punctuation on both sides."
    },
    {
      "title": "Colon-after-fragment trap",
      "body": "A colon cannot directly follow a verb or preposition when the preceding words are incomplete."
    },
    {
      "title": "Plural-apostrophe trap",
      "body": "Most plural nouns need no apostrophe."
    },
    {
      "title": "Semicolon-list confusion",
      "body": "Semicolons separate complex list items only when commas already occur within those items."
    }
  ],
  "coachTips": [
    "Temporarily cross out a modifier; if the core remains complete, paired commas may be appropriate.",
    "Look immediately to the left of a colon: the words there must form a complete sentence.",
    "Apostrophes do not show emphasis.",
    "Do not mix punctuation pairs, such as opening with a comma and closing with a dash."
  ],
  "workedExamples": [
    {
      "id": "punctuation-ex1",
      "passage": "Maya Lin, an architect and artist, designed the memorial.",
      "prompt": "Which punctuation is correct?",
      "choices": [
        {
          "text": "Lin an architect and artist,",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Lin, an architect and artist,",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "Lin; an architect and artist;",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Lin: an architect and artist,",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Punctuation",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "punctuation-ex2",
      "passage": "The lab needed three supplies: gloves, filters, and sterile containers.",
      "prompt": "Why is the colon correct?",
      "choices": [
        {
          "text": "It follows a complete clause and introduces a list",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "It follows a preposition",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "It joins two dependent clauses",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "It marks possession",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Punctuation",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "punctuation-ex3",
      "passage": "The migration route—which spans two continents—has shifted northward.",
      "prompt": "What do the dashes mark?",
      "choices": [
        {
          "text": "A required definition",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "A nonessential interruption",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "A sentence boundary",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "A possessive noun",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Punctuation",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "punctuation-ex4",
      "passage": "The researchers findings were published.",
      "prompt": "Which choice is correct?",
      "choices": [
        {
          "text": "researchers findings",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "researcher's findings",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "researchers' findings",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "researchers's findings",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Punctuation",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "punctuation-ex5",
      "passage": "The novel’s final chapter is brief but powerful.",
      "prompt": "What does the apostrophe show?",
      "choices": [
        {
          "text": "Plurality",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Possession",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "A quotation",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "An omitted verb",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Punctuation",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "punctuation-ex6",
      "passage": "Her goal was clear: to reduce processing time.",
      "prompt": "Why is the colon acceptable?",
      "choices": [
        {
          "text": "The words before it form a complete clause",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "A colon always precedes an infinitive",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "The goal is a noun",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "The phrase after it is dependent",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Punctuation",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "punctuation-ex7",
      "passage": "The oldest tree in the grove, a redwood planted in 1890, survived the fire.",
      "prompt": "Which phrase is nonessential?",
      "choices": [
        {
          "text": "The oldest tree",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "in the grove",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "a redwood planted in 1890",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "survived the fire",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Punctuation",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "punctuation-ex8",
      "passage": "The conference included speakers from Austin, Texas; Portland, Oregon; and Miami, Florida.",
      "prompt": "Why are semicolons used?",
      "choices": [
        {
          "text": "To join fragments",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "To separate list items that already contain commas",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "To replace apostrophes",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "To introduce an explanation",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Punctuation",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "punctuation-ex9",
      "passage": "The forecast was wrong—the storm moved offshore.",
      "prompt": "What relationship does the dash signal?",
      "choices": [
        {
          "text": "An explanation or result",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "A possessive form",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "A list of three items",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "A dependent clause",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Punctuation",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "punctuation-ex10",
      "passage": "The students’ projects filled the hallway.",
      "prompt": "Which meaning is expressed?",
      "choices": [
        {
          "text": "One student owns several projects",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Several students own the projects",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "The projects are students",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Students is a contraction",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Punctuation",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    }
  ],
  "questions": [
    {
      "id": "punctuation-q1",
      "passage": "Ada Lovelace, a nineteenth-century mathematician, wrote notes on the Analytical Engine.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "Lovelace a nineteenth-century mathematician,",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Lovelace, a nineteenth-century mathematician,",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "Lovelace; a nineteenth-century mathematician;",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Lovelace: a nineteenth-century mathematician,",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q2",
      "passage": "The recipe requires two unusual ingredients: rose water and cardamom.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "ingredients, rose",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "ingredients; rose",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "ingredients: rose",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "ingredients rose",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q3",
      "passage": "The river—once heavily polluted—now supports several fish species.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "river, once heavily polluted—",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "river—once heavily polluted—",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "river; once heavily polluted,",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "river: once heavily polluted—",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q4",
      "passage": "The teachers lounge was renovated.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "teachers lounge",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "teacher's lounge",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "teachers' lounge",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "teachers's lounge",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q5",
      "passage": "The machine has one limitation: it cannot operate below freezing.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "limitation, it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "limitation; it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "limitation: it",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "limitation it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q6",
      "passage": "The island’s shoreline has changed rapidly.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "islands",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "island’s",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "islands’",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "island",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q7",
      "passage": "The exhibit featured works by Lee, a sculptor; Patel, a photographer; and Ruiz, a painter.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "sculptor, Patel",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "sculptor; Patel",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "sculptor: Patel",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "sculptor—Patel",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q8",
      "passage": "The proposal had an unexpected benefit—it reduced maintenance costs.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "benefit, it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "benefit; it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "benefit—it",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "benefit: and it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q9",
      "passage": "The comet, which was first observed in March, became visible without a telescope.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "comet which was first observed in March,",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "comet, which was first observed in March,",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "comet; which was first observed in March;",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "comet: which was first observed in March,",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q10",
      "passage": "Its unusual for the lake to freeze this early.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "Its",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "It's",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "Its'",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "It’s'",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q11",
      "passage": "The committee considered three locations: the library, the gym, and the courtyard.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "locations, the",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "locations; the",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "locations: the",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "locations the",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q12",
      "passage": "The mural—painted by local students—covers the entire wall.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "mural, painted by local students—",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "mural—painted by local students—",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "mural; painted by local students;",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "mural: painted by local students—",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q13",
      "passage": "The engineers’ calculations were verified independently.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "engineers",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "engineer’s",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "engineers’",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "engineers’s",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q14",
      "passage": "The result was surprising: demand increased after the price rose.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "surprising, demand",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "surprising; demand",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "surprising: demand",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "surprising demand",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q15",
      "passage": "The oldest bridge in the county, built in 1912, remains in use.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "county built in 1912,",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "county, built in 1912,",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "county; built in 1912;",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "county: built in 1912,",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q16",
      "passage": "The route included stops in Albany, New York; Erie, Pennsylvania; and Toledo, Ohio.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "York, Erie",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "York; Erie",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "York: Erie",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "York—Erie",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q17",
      "passage": "The company changed its policy.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "it's policy",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "its policy",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "its' policy",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "it policy",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q18",
      "passage": "The evidence pointed to one conclusion—the species had adapted.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "conclusion, the",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "conclusion; the",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "conclusion—the",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "conclusion: and the",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Hard",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q19",
      "passage": "Rachel Carson, whose book Silent Spring influenced environmental policy, was a marine biologist.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "Carson whose book Silent Spring influenced environmental policy,",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Carson, whose book Silent Spring influenced environmental policy,",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "Carson; whose book Silent Spring influenced environmental policy;",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Carson: whose book Silent Spring influenced environmental policy,",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Punctuation"
    },
    {
      "id": "punctuation-q20",
      "passage": "The museum’s new wing opens Friday.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "museums",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "museum’s",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "museums’",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "museum",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Punctuation"
    }
  ],
  "flashcards": [
    {
      "front": "Commas around nonessential information",
      "back": "Information that can be removed without changing the core identity or meaning is set off with matching commas."
    },
    {
      "front": "Colon rule",
      "back": "A colon must follow a complete clause and introduce an explanation, example, or list."
    },
    {
      "front": "Dash pairs",
      "back": "A pair of dashes can set off an interruption; one dash can introduce a dramatic explanation after a complete clause."
    },
    {
      "front": "Apostrophes",
      "back": "Use apostrophes for possession or omitted letters, never simply to make a noun plural."
    },
    {
      "front": "One-comma trap",
      "back": "A nonessential phrase in the middle needs punctuation on both sides."
    },
    {
      "front": "Colon-after-fragment trap",
      "back": "A colon cannot directly follow a verb or preposition when the preceding words are incomplete."
    },
    {
      "front": "Plural-apostrophe trap",
      "back": "Most plural nouns need no apostrophe."
    },
    {
      "front": "Semicolon-list confusion",
      "back": "Semicolons separate complex list items only when commas already occur within those items."
    },
    {
      "front": "Strategy step 1: Read without punctuation",
      "back": "Identify the sentence core."
    },
    {
      "front": "Strategy step 2: Label the insertion",
      "back": "Decide whether material is essential, nonessential, a list, or an explanation."
    },
    {
      "front": "Strategy step 3: Check both sides",
      "back": "Paired punctuation must open and close correctly."
    },
    {
      "front": "Strategy step 4: Apply the exact rule",
      "back": "Ignore how long the pause sounds."
    },
    {
      "front": "Strategy step 5: Protect meaning",
      "back": "Make sure punctuation does not change which noun a phrase modifies."
    },
    {
      "front": "Editor tip",
      "back": "Temporarily cross out a modifier; if the core remains complete, paired commas may be appropriate."
    },
    {
      "front": "Editor tip",
      "back": "Look immediately to the left of a colon: the words there must form a complete sentence."
    },
    {
      "front": "Editor tip",
      "back": "Apostrophes do not show emphasis."
    },
    {
      "front": "Editor tip",
      "back": "Do not mix punctuation pairs, such as opening with a comma and closing with a dash."
    },
    {
      "front": "Rule check 18",
      "back": "Read the entire sentence, identify the tested structure, and verify that the choice preserves both grammar and meaning."
    },
    {
      "front": "Rule check 19",
      "back": "Read the entire sentence, identify the tested structure, and verify that the choice preserves both grammar and meaning."
    },
    {
      "front": "Rule check 20",
      "back": "Read the entire sentence, identify the tested structure, and verify that the choice preserves both grammar and meaning."
    },
    {
      "front": "Rule check 21",
      "back": "Read the entire sentence, identify the tested structure, and verify that the choice preserves both grammar and meaning."
    },
    {
      "front": "Rule check 22",
      "back": "Read the entire sentence, identify the tested structure, and verify that the choice preserves both grammar and meaning."
    },
    {
      "front": "Rule check 23",
      "back": "Read the entire sentence, identify the tested structure, and verify that the choice preserves both grammar and meaning."
    },
    {
      "front": "Rule check 24",
      "back": "Read the entire sentence, identify the tested structure, and verify that the choice preserves both grammar and meaning."
    },
    {
      "front": "Rule check 25",
      "back": "Read the entire sentence, identify the tested structure, and verify that the choice preserves both grammar and meaning."
    },
    {
      "front": "Rule check 26",
      "back": "Read the entire sentence, identify the tested structure, and verify that the choice preserves both grammar and meaning."
    },
    {
      "front": "Rule check 27",
      "back": "Read the entire sentence, identify the tested structure, and verify that the choice preserves both grammar and meaning."
    },
    {
      "front": "Rule check 28",
      "back": "Read the entire sentence, identify the tested structure, and verify that the choice preserves both grammar and meaning."
    },
    {
      "front": "Rule check 29",
      "back": "Read the entire sentence, identify the tested structure, and verify that the choice preserves both grammar and meaning."
    },
    {
      "front": "Rule check 30",
      "back": "Read the entire sentence, identify the tested structure, and verify that the choice preserves both grammar and meaning."
    }
  ],
  "nextCourseId": "verb-forms"
};
