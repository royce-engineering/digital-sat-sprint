import type { Course } from "@/content/courses/types";

export const verbFormsCourse: Course = {
  "id": "verb-forms",
  "title": "Verb Forms & Agreement",
  "subtitle": "Match subjects and verbs, control tense, and choose precise finite forms.",
  "description": "Learn to identify the true subject, maintain logical tense, distinguish finite verbs from participles, and handle compound and intervening structures.",
  "estimatedMinutes": 55,
  "difficulty": "Medium",
  "objectives": [
    "Match singular and plural subjects with verbs",
    "Maintain consistent and logical verb tense",
    "Distinguish participles from finite verbs",
    "Handle interrupting phrases and compound subjects"
  ],
  "concepts": [
    {
      "title": "Subject–verb agreement",
      "body": "The verb agrees with the grammatical subject, not with a nearby noun inside a phrase."
    },
    {
      "title": "Tense logic",
      "body": "Verb tense should reflect the sequence of events and remain consistent unless time genuinely changes."
    },
    {
      "title": "Finite vs. nonfinite forms",
      "body": "A sentence needs a finite verb; participles such as running or designed cannot serve as the only verb."
    },
    {
      "title": "Compound subjects",
      "body": "Subjects joined by and are usually plural; with either/or and neither/nor, the nearer subject often controls agreement."
    }
  ],
  "strategy": [
    {
      "title": "Find the verb slot",
      "body": "Identify the word or blank acting as the main verb."
    },
    {
      "title": "Find the true subject",
      "body": "Ignore intervening prepositional phrases and modifiers."
    },
    {
      "title": "Check number",
      "body": "Decide whether the subject is singular or plural."
    },
    {
      "title": "Build the timeline",
      "body": "Determine when each action occurs."
    },
    {
      "title": "Read the whole sentence",
      "body": "Confirm that the chosen form is both grammatical and logical."
    }
  ],
  "traps": [
    {
      "title": "Nearby-noun trap",
      "body": "A plural noun near the verb may not be the subject."
    },
    {
      "title": "Participial-fragment trap",
      "body": "An -ing or -ed form may need an auxiliary verb."
    },
    {
      "title": "Unnecessary tense shift",
      "body": "Do not change tense without a time-based reason."
    },
    {
      "title": "Collective-noun trap",
      "body": "In standard SAT usage, a collective noun acting as one unit is usually singular."
    }
  ],
  "coachTips": [
    "Bracket prepositional phrases before checking agreement.",
    "Words such as each, every, either, and neither are singular.",
    "Use past perfect only to clarify an earlier past action.",
    "Check whether an -ing form is a modifier or part of a complete verb phrase."
  ],
  "workedExamples": [
    {
      "id": "verb-forms-ex1",
      "passage": "The collection of maps is stored in a climate-controlled room.",
      "prompt": "Which verb agrees with the subject?",
      "choices": [
        {
          "text": "are",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "is",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "were",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "have been",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Verb Forms & Agreement",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "verb-forms-ex2",
      "passage": "By the time the lecture began, the students had reviewed the article.",
      "prompt": "Why is had reviewed appropriate?",
      "choices": [
        {
          "text": "It marks an action completed before another past action",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "It marks a future action",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "It agrees with lecture",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "It creates a passive voice",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Verb Forms & Agreement",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "verb-forms-ex3",
      "passage": "Each of the samples contains a different mineral.",
      "prompt": "Which choice is correct?",
      "choices": [
        {
          "text": "contain",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "contains",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "containing",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "have contained",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Verb Forms & Agreement",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "verb-forms-ex4",
      "passage": "The engineers testing the prototype discovered a flaw.",
      "prompt": "Which word is the finite verb?",
      "choices": [
        {
          "text": "engineers",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "testing",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "prototype",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "discovered",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        }
      ],
      "answer": 3,
      "difficulty": "Easy",
      "skill": "Verb Forms & Agreement",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "verb-forms-ex5",
      "passage": "Neither the assistants nor the curator was available.",
      "prompt": "Why is was correct?",
      "choices": [
        {
          "text": "Curator is the nearer subject and is singular",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "Assistants is plural",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Neither is always plural",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Available controls the verb",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Verb Forms & Agreement",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "verb-forms-ex6",
      "passage": "The study began in 2022 and continues today.",
      "prompt": "Why do the tenses differ?",
      "choices": [
        {
          "text": "The timeline shifts from a past start to a present condition",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "The subject changes",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "The sentence is incorrect",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Today requires past tense",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Verb Forms & Agreement",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "verb-forms-ex7",
      "passage": "A series of workshops offers students practical experience.",
      "prompt": "Which word is the subject?",
      "choices": [
        {
          "text": "workshops",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "students",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "series",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "experience",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Verb Forms & Agreement",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "verb-forms-ex8",
      "passage": "The birds migrating along the coast have altered their route.",
      "prompt": "Which phrase forms the complete verb?",
      "choices": [
        {
          "text": "migrating along",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "have altered",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "birds migrating",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "altered their",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Verb Forms & Agreement",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "verb-forms-ex9",
      "passage": "Every painting and sculpture in the gallery is insured.",
      "prompt": "Which verb is correct?",
      "choices": [
        {
          "text": "are",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "were",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "is",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "have",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Verb Forms & Agreement",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "verb-forms-ex10",
      "passage": "The team analyzed the data and published its findings.",
      "prompt": "What does the parallel tense show?",
      "choices": [
        {
          "text": "Two completed actions by the same subject",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "A fragment",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "A future action",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "A disagreement",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Verb Forms & Agreement",
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
      "id": "verb-forms-q1",
      "passage": "The bouquet of wildflowers fills the room with fragrance.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "fill",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "fills",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "filling",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "have filled",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q2",
      "passage": "Several factors contribute to the decline.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "contributes",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "contribute",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "contributing",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "has contributed",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q3",
      "passage": "Before the restoration began, experts had documented the damage.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "document",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "documented",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "had documented",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "are documenting",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q4",
      "passage": "The scientist examining the samples noticed a pattern.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "examining",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "samples",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "noticed",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "pattern",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q5",
      "passage": "Neither the director nor the actors were ready.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "was",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "were",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "is",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "has been",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q6",
      "passage": "A set of instructions accompanies the device.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "accompany",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "accompanies",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "accompanying",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "have accompanied",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q7",
      "passage": "The city opened the park in May and has maintained it since then.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "maintained",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "has maintained",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "maintains then",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "had maintain",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q8",
      "passage": "Each of the proposals addresses the budget issue.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "address",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "addresses",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "addressing",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "have addressed",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q9",
      "passage": "The paintings displayed near the entrance belong to the museum.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "belongs",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "belong",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "belonging",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "has belonged",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q10",
      "passage": "By 1900, the company had expanded into five states.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "expands",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "expanded tomorrow",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "had expanded",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "has expand",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q11",
      "passage": "The committee meets every Tuesday.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "meet",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "meets",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "meeting",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "have met",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q12",
      "passage": "The researchers collecting the data are based in Chicago.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "is",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "are",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "was",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "has",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q13",
      "passage": "Either the buses or the train is likely to arrive first.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "are",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "were",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "is",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "have",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q14",
      "passage": "The number of applicants has increased.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "have",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "has",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "are",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "increase",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q15",
      "passage": "Last year, the museum acquired the sculpture.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "acquires",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "acquired",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "has acquire",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "acquiring",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q16",
      "passage": "The device was tested and approved before release.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "was tested and approved",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "tested and approving",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "has test and approve",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "was testing and approves",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q17",
      "passage": "Every student in the two classes receives a handbook.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "receive",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "receives",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "receiving",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "have received",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q18",
      "passage": "The effects of the policy remain uncertain.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "remains",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "remain",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "remaining",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "has remained",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q19",
      "passage": "When the storm arrived, crews were reinforcing the barrier.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "reinforce",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "were reinforcing",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "had reinforce",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "are reinforced",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Verb Forms & Agreement"
    },
    {
      "id": "verb-forms-q20",
      "passage": "A pair of binoculars is stored in the cabinet.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "are",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "is",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "were",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "have",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Verb Forms & Agreement"
    }
  ],
  "flashcards": [
    {
      "front": "Subject–verb agreement",
      "back": "The verb agrees with the grammatical subject, not with a nearby noun inside a phrase."
    },
    {
      "front": "Tense logic",
      "back": "Verb tense should reflect the sequence of events and remain consistent unless time genuinely changes."
    },
    {
      "front": "Finite vs. nonfinite forms",
      "back": "A sentence needs a finite verb; participles such as running or designed cannot serve as the only verb."
    },
    {
      "front": "Compound subjects",
      "back": "Subjects joined by and are usually plural; with either/or and neither/nor, the nearer subject often controls agreement."
    },
    {
      "front": "Nearby-noun trap",
      "back": "A plural noun near the verb may not be the subject."
    },
    {
      "front": "Participial-fragment trap",
      "back": "An -ing or -ed form may need an auxiliary verb."
    },
    {
      "front": "Unnecessary tense shift",
      "back": "Do not change tense without a time-based reason."
    },
    {
      "front": "Collective-noun trap",
      "back": "In standard SAT usage, a collective noun acting as one unit is usually singular."
    },
    {
      "front": "Strategy step 1: Find the verb slot",
      "back": "Identify the word or blank acting as the main verb."
    },
    {
      "front": "Strategy step 2: Find the true subject",
      "back": "Ignore intervening prepositional phrases and modifiers."
    },
    {
      "front": "Strategy step 3: Check number",
      "back": "Decide whether the subject is singular or plural."
    },
    {
      "front": "Strategy step 4: Build the timeline",
      "back": "Determine when each action occurs."
    },
    {
      "front": "Strategy step 5: Read the whole sentence",
      "back": "Confirm that the chosen form is both grammatical and logical."
    },
    {
      "front": "Editor tip",
      "back": "Bracket prepositional phrases before checking agreement."
    },
    {
      "front": "Editor tip",
      "back": "Words such as each, every, either, and neither are singular."
    },
    {
      "front": "Editor tip",
      "back": "Use past perfect only to clarify an earlier past action."
    },
    {
      "front": "Editor tip",
      "back": "Check whether an -ing form is a modifier or part of a complete verb phrase."
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
  "nextCourseId": "pronouns"
};
