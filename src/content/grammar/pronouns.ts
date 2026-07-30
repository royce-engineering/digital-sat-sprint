import type { Course } from "@/content/courses/types";

export const pronounsCourse: Course = {
  "id": "pronouns",
  "title": "Pronouns",
  "subtitle": "Make every pronoun clear, consistent, and grammatically matched.",
  "description": "Master pronoun–antecedent agreement, case, clarity, and consistency while avoiding ambiguous references and unnecessary shifts in person or number.",
  "estimatedMinutes": 55,
  "difficulty": "Medium",
  "objectives": [
    "Match pronouns with clear antecedents",
    "Choose subject, object, and possessive case",
    "Avoid ambiguous or vague references",
    "Maintain consistent person and number"
  ],
  "concepts": [
    {
      "title": "Agreement",
      "body": "A pronoun must agree with its antecedent in number and, when relevant, person."
    },
    {
      "title": "Case",
      "body": "Use subject forms for subjects, object forms after verbs and prepositions, and possessive forms before nouns."
    },
    {
      "title": "Clarity",
      "body": "A pronoun should point unmistakably to one specific antecedent."
    },
    {
      "title": "Consistency",
      "body": "Do not shift unnecessarily among one, you, we, they, or a singular noun phrase."
    }
  ],
  "strategy": [
    {
      "title": "Circle the pronoun",
      "body": "Identify the form being tested."
    },
    {
      "title": "Find the antecedent",
      "body": "Name the exact noun the pronoun replaces."
    },
    {
      "title": "Check agreement",
      "body": "Match number and person."
    },
    {
      "title": "Check grammatical role",
      "body": "Determine whether subject, object, or possessive case is needed."
    },
    {
      "title": "Test clarity",
      "body": "Replace the pronoun with its antecedent and reread."
    }
  ],
  "traps": [
    {
      "title": "Nearest-noun trap",
      "body": "The closest noun is not always the antecedent."
    },
    {
      "title": "Compound-case trap",
      "body": "Remove the other noun from a compound phrase to test me/I or her/she."
    },
    {
      "title": "Vague this trap",
      "body": "This should clearly refer to a noun or be followed by a summarizing noun."
    },
    {
      "title": "Person-shift trap",
      "body": "Do not shift from students to you without reason."
    }
  ],
  "coachTips": [
    "Cross out the other name in a compound phrase: “for Maya and me” becomes “for me.”",
    "Possessive pronouns such as its, theirs, and yours never take apostrophes.",
    "When two possible antecedents share the same number, rewrite for clarity.",
    "A pronoun can be grammatically matched yet still be logically ambiguous."
  ],
  "workedExamples": [
    {
      "id": "pronouns-ex1",
      "passage": "The researchers published their findings.",
      "prompt": "What is the antecedent of their?",
      "choices": [
        {
          "text": "findings",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "researchers",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "published",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "the study",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Pronouns",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "pronouns-ex2",
      "passage": "The award was presented to Elena and me.",
      "prompt": "Why is me correct?",
      "choices": [
        {
          "text": "It is the object of the preposition to",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "It is the subject",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "It shows possession",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "It agrees with award",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Pronouns",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "pronouns-ex3",
      "passage": "Jordan told Alex that the report needed revision. This comment surprised the editor.",
      "prompt": "Why is “This comment” clearer than “This”?",
      "choices": [
        {
          "text": "It names what this refers to",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "It changes tense",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "It creates agreement",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "It is plural",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Pronouns",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "pronouns-ex4",
      "passage": "The company revised its policy.",
      "prompt": "Which form is correct?",
      "choices": [
        {
          "text": "it's",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "its",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "its'",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "their",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Pronouns",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "pronouns-ex5",
      "passage": "Maya and I reviewed the draft.",
      "prompt": "Which pronoun case is needed?",
      "choices": [
        {
          "text": "Object case",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Subject case",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "Possessive case",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Reflexive case",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Pronouns",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "pronouns-ex6",
      "passage": "When a student submits an essay, the student should keep a copy.",
      "prompt": "Why might repeating “the student” be useful?",
      "choices": [
        {
          "text": "It avoids an unclear pronoun reference",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "It creates a plural noun",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "It changes the person",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "It makes the verb passive",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Pronouns",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "pronouns-ex7",
      "passage": "The two laboratories shared their equipment.",
      "prompt": "Which agreement is correct?",
      "choices": [
        {
          "text": "laboratories/its",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "laboratories/their",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "equipment/their",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "two/its",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Pronouns",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "pronouns-ex8",
      "passage": "Between you and me, the schedule seems unrealistic.",
      "prompt": "Which choice is standard?",
      "choices": [
        {
          "text": "you and I",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "you and me",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "your and mine",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "you and myself",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Pronouns",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "pronouns-ex9",
      "passage": "The committee issued its recommendation.",
      "prompt": "Why is its singular?",
      "choices": [
        {
          "text": "Committee is treated as one unit",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "Recommendation is plural",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Issued requires it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Its is always plural",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Pronouns",
      "walkthrough": [
        "Identify the specific grammar decision being tested.",
        "Find the sentence core and label the relevant words or clauses.",
        "Apply the exact rule instead of choosing by sound.",
        "Confirm that the corrected sentence preserves the intended meaning."
      ]
    },
    {
      "id": "pronouns-ex10",
      "passage": "After Priya spoke with Elena, she revised the proposal.",
      "prompt": "What is the main problem?",
      "choices": [
        {
          "text": "The pronoun she has two possible antecedents",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "The verb is singular",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "The sentence lacks punctuation",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "The pronoun is possessive",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Pronouns",
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
      "id": "pronouns-q1",
      "passage": "The hikers packed their supplies before dawn.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "its",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "their",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "his or her",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "theirs",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q2",
      "passage": "The instructor gave Malik and me additional time.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "Malik and I",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Malik and me",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "Malik and myself",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Malik and mine",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q3",
      "passage": "The robot completed its assigned route.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "it's",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "its",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "its'",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "their",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q4",
      "passage": "Nora and I prepared the presentation.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "Nora and me",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Nora and I",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "Nora and myself",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Nora and mine",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q5",
      "passage": "The two authors revised their manuscript.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "its",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "their",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "his",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "her",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q6",
      "passage": "The prize was divided between Sam and her.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "she",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "her",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "hers",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "herself",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q7",
      "passage": "When the vase struck the table, it cracked. Which revision is clearest?",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "it cracked",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "the vase cracked",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "this cracked",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "they cracked",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q8",
      "passage": "A company should explain its return policy clearly.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "their",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "its",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "it's",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "our",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q9",
      "passage": "The director asked Luis and me to stay.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "Luis and I",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Luis and me",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "Luis and myself",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Luis and mine",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q10",
      "passage": "Students should check their work before submitting it.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "his",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "its",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "their",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "your",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q11",
      "passage": "The cat cleaned its paws.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "it's",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "its",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "its'",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "their",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q12",
      "passage": "For Ava and me, the result was unexpected.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "Ava and I",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Ava and me",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "Ava and myself",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Ava and mine",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q13",
      "passage": "The orchestra completed its rehearsal.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "their",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "its",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "it’s",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "our",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q14",
      "passage": "When engineers test a design, they record every failure.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "he",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "they",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "you",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "it",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q15",
      "passage": "The coach congratulated Mia and him.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "he",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "him",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "his",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "himself",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q16",
      "passage": "Taylor told Morgan that Taylor would lead the meeting. Why repeat Taylor?",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "To avoid ambiguity",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "To show possession",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "To make the noun plural",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "To change case",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q17",
      "passage": "The books lost their covers during the flood.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "its",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "their",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "there",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "theirs",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q18",
      "passage": "The decision belongs to Rosa and me.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "Rosa and I",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Rosa and me",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "Rosa and myself",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "Rosa and mine",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q19",
      "passage": "This pattern suggests that the species is adapting. Why is “This pattern” effective?",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "It names the referent",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "It changes number",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "It is possessive",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "It removes the subject",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Pronouns"
    },
    {
      "id": "pronouns-q20",
      "passage": "The department updated its website.",
      "prompt": "Which choice completes the text so that it conforms to Standard English?",
      "choices": [
        {
          "text": "their",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "its",
          "rationale": "Correct: this choice follows the tested rule and preserves the intended meaning."
        },
        {
          "text": "it's",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        },
        {
          "text": "our",
          "rationale": "Not the best choice: it violates the tested rule, changes the structure, or creates ambiguity."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Pronouns"
    }
  ],
  "flashcards": [
    {
      "front": "Agreement",
      "back": "A pronoun must agree with its antecedent in number and, when relevant, person."
    },
    {
      "front": "Case",
      "back": "Use subject forms for subjects, object forms after verbs and prepositions, and possessive forms before nouns."
    },
    {
      "front": "Clarity",
      "back": "A pronoun should point unmistakably to one specific antecedent."
    },
    {
      "front": "Consistency",
      "back": "Do not shift unnecessarily among one, you, we, they, or a singular noun phrase."
    },
    {
      "front": "Nearest-noun trap",
      "back": "The closest noun is not always the antecedent."
    },
    {
      "front": "Compound-case trap",
      "back": "Remove the other noun from a compound phrase to test me/I or her/she."
    },
    {
      "front": "Vague this trap",
      "back": "This should clearly refer to a noun or be followed by a summarizing noun."
    },
    {
      "front": "Person-shift trap",
      "back": "Do not shift from students to you without reason."
    },
    {
      "front": "Strategy step 1: Circle the pronoun",
      "back": "Identify the form being tested."
    },
    {
      "front": "Strategy step 2: Find the antecedent",
      "back": "Name the exact noun the pronoun replaces."
    },
    {
      "front": "Strategy step 3: Check agreement",
      "back": "Match number and person."
    },
    {
      "front": "Strategy step 4: Check grammatical role",
      "back": "Determine whether subject, object, or possessive case is needed."
    },
    {
      "front": "Strategy step 5: Test clarity",
      "back": "Replace the pronoun with its antecedent and reread."
    },
    {
      "front": "Editor tip",
      "back": "Cross out the other name in a compound phrase: “for Maya and me” becomes “for me.”"
    },
    {
      "front": "Editor tip",
      "back": "Possessive pronouns such as its, theirs, and yours never take apostrophes."
    },
    {
      "front": "Editor tip",
      "back": "When two possible antecedents share the same number, rewrite for clarity."
    },
    {
      "front": "Editor tip",
      "back": "A pronoun can be grammatically matched yet still be logically ambiguous."
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
  ]
};
