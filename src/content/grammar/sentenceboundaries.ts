import type { Course } from "@/content/courses/types";

export const sentenceBoundariesCourse: Course = {
  "id": "sentence-boundaries",
  "title": "Sentence Boundaries",
  "subtitle": "Join, separate, and punctuate complete thoughts with confidence.",
  "description": "Learn to recognize independent clauses and choose periods, semicolons, commas, conjunctions, and subordinators that create complete, logical sentences.",
  "estimatedMinutes": 55,
  "difficulty": "Medium",
  "objectives": [
    "Identify independent and dependent clauses",
    "Repair run-ons and comma splices",
    "Use coordinating and subordinating conjunctions",
    "Distinguish fragments from complete sentences"
  ],
  "concepts": [
    {
      "title": "Independent clauses",
      "body": "An independent clause contains a subject and a finite verb and can stand alone as a sentence.",
      "bullets": [
        "The researchers published the results.",
        "The results surprised the committee."
      ]
    },
    {
      "title": "Dependent clauses",
      "body": "A dependent clause begins with a word such as although, because, when, or which and cannot stand alone."
    },
    {
      "title": "Four legal joins",
      "body": "Use a period, a semicolon, a comma plus FANBOYS, or a subordinating relationship to connect complete thoughts."
    },
    {
      "title": "Fragments",
      "body": "A fragment lacks a complete independent clause, even when it is long or contains several modifiers."
    }
  ],
  "strategy": [
    {
      "title": "Find the verbs",
      "body": "Locate the finite verbs and their subjects."
    },
    {
      "title": "Count clauses",
      "body": "Decide which clauses can stand alone."
    },
    {
      "title": "Inspect the join",
      "body": "Look at the punctuation and connector between clauses."
    },
    {
      "title": "Test legality",
      "body": "Choose a join that matches the clause types."
    },
    {
      "title": "Read for logic",
      "body": "Confirm that the relationship between ideas still makes sense."
    }
  ],
  "traps": [
    {
      "title": "Comma splice",
      "body": "A comma alone cannot join two independent clauses."
    },
    {
      "title": "Conjunctive-adverb trap",
      "body": "Words such as however and therefore do not make a comma sufficient."
    },
    {
      "title": "Long-fragment trap",
      "body": "Length does not create a complete sentence."
    },
    {
      "title": "False clause break",
      "body": "A phrase containing an -ing verb may not be an independent clause."
    }
  ],
  "coachTips": [
    "Draw a vertical line between complete thoughts before evaluating punctuation.",
    "FANBOYS works only when the conjunction appears directly after the comma.",
    "A semicolon acts like a period; both sides must be independent clauses.",
    "Do not choose punctuation by pause alone—choose it by grammar."
  ],
  "workedExamples": [
    {
      "id": "sentence-boundaries-ex1",
      "passage": "The museum extended its hours, attendance increased during the summer.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "hours, attendance",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "hours; attendance",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "hours attendance",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "hours: attendance",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Sentence Boundaries",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "sentence-boundaries-ex2",
      "passage": "Although the archive contains thousands of letters. Only a few have been digitized.",
      "prompt": "Which revision best corrects the sentence boundary error?",
      "choices": [
        {
          "text": "letters, only",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "letters; only",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "letters, and only",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "letters, only a few",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        }
      ],
      "answer": 3,
      "difficulty": "Easy",
      "skill": "Sentence Boundaries",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "sentence-boundaries-ex3",
      "passage": "The experiment initially failed; however, the team revised the protocol.",
      "prompt": "Which choice is grammatically correct?",
      "choices": [
        {
          "text": "failed, however,",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "failed however;",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "failed; however,",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "failed: however",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Sentence Boundaries",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "sentence-boundaries-ex4",
      "passage": "The city installed rain gardens because the neighborhood flooded frequently.",
      "prompt": "Which choice preserves a complete sentence?",
      "choices": [
        {
          "text": "gardens, because",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "gardens; because",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "gardens because",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "gardens. Because",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Sentence Boundaries",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "sentence-boundaries-ex5",
      "passage": "The sculpture, created from recycled glass, reflects sunlight across the atrium.",
      "prompt": "Which part is the independent clause?",
      "choices": [
        {
          "text": "created from recycled glass",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "The sculpture reflects sunlight across the atrium",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "across the atrium",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "from recycled glass",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Sentence Boundaries",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "sentence-boundaries-ex6",
      "passage": "The report was concise, and it addressed every major concern.",
      "prompt": "Why is the comma correct?",
      "choices": [
        {
          "text": "It separates a phrase",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "It introduces a list",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "It joins two independent clauses with a coordinating conjunction",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "It marks a dependent clause",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Sentence Boundaries",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "sentence-boundaries-ex7",
      "passage": "Walking through the restored prairie at dawn.",
      "prompt": "Which revision creates a complete sentence?",
      "choices": [
        {
          "text": "Walking through the restored prairie at dawn.",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "The ecologist walking through the restored prairie at dawn.",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "The ecologist walked through the restored prairie at dawn.",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "Through the restored prairie at dawn.",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Sentence Boundaries",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "sentence-boundaries-ex8",
      "passage": "The sample was small; nevertheless, the pattern was consistent.",
      "prompt": "Which explanation is correct?",
      "choices": [
        {
          "text": "A semicolon joins independent clauses before a conjunctive adverb",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "A comma must replace the semicolon",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Nevertheless is a coordinating conjunction",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "The second clause is dependent",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Sentence Boundaries",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "sentence-boundaries-ex9",
      "passage": "When the lecture ended, the audience remained for questions.",
      "prompt": "What is the structure?",
      "choices": [
        {
          "text": "Two independent clauses joined by a comma",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "A dependent clause followed by an independent clause",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "A fragment followed by a phrase",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Two dependent clauses",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Sentence Boundaries",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "sentence-boundaries-ex10",
      "passage": "The device is inexpensive it is also remarkably durable.",
      "prompt": "Which choice best corrects the text?",
      "choices": [
        {
          "text": "inexpensive, it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "inexpensive; it",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "inexpensive because it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "inexpensive it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Sentence Boundaries",
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
      "id": "sentence-boundaries-q1",
      "passage": "The rainfall ended, the river continued to rise.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "ended, the",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "ended; the",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "ended the",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "ended: and the",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q2",
      "passage": "Because the manuscript was fragile. The curator limited access.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "fragile, the",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "fragile; the",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "fragile, so the",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "fragile the",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q3",
      "passage": "The telescope is compact, yet it produces sharp images.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "compact yet",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "compact; yet",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "compact, yet",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "compact: yet",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q4",
      "passage": "The committee postponed the vote however, members continued debating.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "vote, however,",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "vote; however,",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "vote however;",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "vote: and however",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q5",
      "passage": "Researchers tracking the birds across three migration seasons.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "Researchers tracking",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Researchers tracked",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "Tracking researchers",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "The tracking of researchers",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q6",
      "passage": "The road reopened after crews cleared the debris.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "reopened, after",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "reopened; after",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "reopened after",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "reopened. After",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q7",
      "passage": "The model predicts demand accurately, it cannot account for sudden shortages.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "accurately, it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "accurately; it",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "accurately because it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "accurately it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q8",
      "passage": "Although the alloy is lightweight, it is exceptionally strong.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "lightweight it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "lightweight; it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "lightweight, it",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "lightweight: it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q9",
      "passage": "The garden attracts pollinators and improves soil quality.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "pollinators, and",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "pollinators and",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "pollinators; and",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "pollinators. And",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q10",
      "passage": "The data were incomplete; therefore, the conclusion remained tentative.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "incomplete, therefore",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "incomplete; therefore,",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "incomplete therefore;",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "incomplete: therefore",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q11",
      "passage": "Designed to withstand extreme heat.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "Designed to withstand extreme heat.",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "The coating was designed to withstand extreme heat.",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "The coating designed to withstand extreme heat.",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Withstanding extreme heat.",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q12",
      "passage": "The author revised the chapter after reviewers requested clarification.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "chapter, after",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "chapter; after",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "chapter after",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "chapter. After",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q13",
      "passage": "The trial ended early, for the treatment showed no measurable benefit.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "early for",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "early, for",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "early; for",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "early: for",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q14",
      "passage": "The lamps use less energy they also last longer.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "energy, they",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "energy; they",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "energy because they",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "energy they",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q15",
      "passage": "While the team waited for new equipment, it analyzed existing data.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "equipment it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "equipment; it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "equipment, it",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "equipment: it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Hard",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q16",
      "passage": "The painting was displayed in Paris and later traveled to Madrid.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "Paris, and",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Paris and",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "Paris; and",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Paris. And",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q17",
      "passage": "The software is reliable; moreover, it is easy to update.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "reliable, moreover,",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "reliable; moreover,",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "reliable moreover;",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "reliable: moreover",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q18",
      "passage": "Which had been stored in a climate-controlled room.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "Which had been stored in a climate-controlled room.",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "The textiles, which had been stored in a climate-controlled room, remained intact.",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "Stored in a room which.",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "The climate-controlled room which stored.",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q19",
      "passage": "The study replicated the earlier result, so confidence in the finding increased.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "result so",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "result; so",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "result, so",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "result: so",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Hard",
      "skill": "Sentence Boundaries"
    },
    {
      "id": "sentence-boundaries-q20",
      "passage": "The alarm sounded when smoke reached the sensor.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "sounded, when",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "sounded; when",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "sounded when",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "sounded. When",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Hard",
      "skill": "Sentence Boundaries"
    }
  ],
  "flashcards": [
    {
      "front": "Independent clauses",
      "back": "An independent clause contains a subject and a finite verb and can stand alone as a sentence."
    },
    {
      "front": "Dependent clauses",
      "back": "A dependent clause begins with a word such as although, because, when, or which and cannot stand alone."
    },
    {
      "front": "Four legal joins",
      "back": "Use a period, a semicolon, a comma plus FANBOYS, or a subordinating relationship to connect complete thoughts."
    },
    {
      "front": "Fragments",
      "back": "A fragment lacks a complete independent clause, even when it is long or contains several modifiers."
    },
    {
      "front": "Comma splice",
      "back": "A comma alone cannot join two independent clauses."
    },
    {
      "front": "Conjunctive-adverb trap",
      "back": "Words such as however and therefore do not make a comma sufficient."
    },
    {
      "front": "Long-fragment trap",
      "back": "Length does not create a complete sentence."
    },
    {
      "front": "False clause break",
      "back": "A phrase containing an -ing verb may not be an independent clause."
    },
    {
      "front": "Strategy step 1: Find the verbs",
      "back": "Locate the finite verbs and their subjects."
    },
    {
      "front": "Strategy step 2: Count clauses",
      "back": "Decide which clauses can stand alone."
    },
    {
      "front": "Strategy step 3: Inspect the join",
      "back": "Look at the punctuation and connector between clauses."
    },
    {
      "front": "Strategy step 4: Test legality",
      "back": "Choose a join that matches the clause types."
    },
    {
      "front": "Strategy step 5: Read for logic",
      "back": "Confirm that the relationship between ideas still makes sense."
    },
    {
      "front": "Editor tip",
      "back": "Draw a vertical line between complete thoughts before evaluating punctuation."
    },
    {
      "front": "Editor tip",
      "back": "FANBOYS works only when the conjunction appears directly after the comma."
    },
    {
      "front": "Editor tip",
      "back": "A semicolon acts like a period; both sides must be independent clauses."
    },
    {
      "front": "Editor tip",
      "back": "Do not choose punctuation by pause alone—choose it by grammar."
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
  "nextCourseId": "punctuation"
};
