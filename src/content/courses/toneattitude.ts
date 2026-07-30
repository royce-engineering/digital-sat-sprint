import type { Course } from "./types";

export const toneAttitudeCourse: Course = {
  "id": "tone-attitude",
  "title": "Tone & Attitude",
  "subtitle": "Read evaluation, degree, and emotional stance with precision.",
  "description": "Learn to identify how an author feels about a subject without exaggerating subtle approval, concern, skepticism, or criticism.",
  "estimatedMinutes": 75,
  "difficulty": "Medium",
  "objectives": [
    "Separate subject matter from attitude",
    "Track evaluative words and qualifying language",
    "Distinguish mild, measured, and intense tones",
    "Avoid answers that overstate emotion"
  ],
  "concepts": [
    {
      "title": "Tone is attitude",
      "body": "Tone describes the author’s stance toward the subject, not merely the topic."
    },
    {
      "title": "Degree matters",
      "body": "Cautious approval is not enthusiasm; concern is not alarm."
    },
    {
      "title": "Look for evaluation",
      "body": "Adjectives, adverbs, concessions, and contrast words often reveal attitude."
    },
    {
      "title": "Mixed tones",
      "body": "A passage can be appreciative yet qualified, or interested yet skeptical."
    }
  ],
  "strategy": [
    {
      "title": "Name the subject",
      "body": "State what the author is discussing."
    },
    {
      "title": "Underline evaluation",
      "body": "Find words that praise, criticize, doubt, or qualify."
    },
    {
      "title": "Estimate intensity",
      "body": "Decide whether the attitude is mild, moderate, or strong."
    },
    {
      "title": "Create a two-word label",
      "body": "Use combinations such as cautious approval or measured criticism."
    },
    {
      "title": "Test every word",
      "body": "Both parts of the answer must fit the passage."
    }
  ],
  "traps": [
    {
      "title": "Topic answer",
      "body": "Describes what the passage discusses rather than how the author views it."
    },
    {
      "title": "Intensity trap",
      "body": "Turns mild concern into outrage or modest praise into celebration."
    },
    {
      "title": "One-word fit",
      "body": "One adjective works, but the second contradicts the passage."
    },
    {
      "title": "Ignored concession",
      "body": "Misses words such as although, however, or admittedly that create nuance."
    }
  ],
  "coachTips": [
    "Do not choose the strongest emotion available unless the passage earns it.",
    "A concession often reveals a mixed or qualified tone.",
    "Translate loaded words into a neutral attitude label before checking choices."
  ],
  "workedExamples": [
    {
      "id": "tone-1",
      "passage": "Although the restoration is not flawless, its careful use of surviving records makes it a remarkably persuasive reconstruction.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "measured approval",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Tone & Attitude",
      "walkthrough": [
        "Locate evaluative language.",
        "Measure the intensity of that language.",
        "Choose the option that preserves both attitude and degree."
      ]
    },
    {
      "id": "tone-2",
      "passage": "The committee’s report presents the new policy as inevitable, yet it gives surprisingly little attention to the communities most affected.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "skeptical criticism",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Tone & Attitude",
      "walkthrough": [
        "Locate evaluative language.",
        "Measure the intensity of that language.",
        "Choose the option that preserves both attitude and degree."
      ]
    },
    {
      "id": "tone-3",
      "passage": "The tiny device, assembled from inexpensive parts, demonstrates how elegant engineering can emerge from severe constraints.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "admiring",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Tone & Attitude",
      "walkthrough": [
        "Locate evaluative language.",
        "Measure the intensity of that language.",
        "Choose the option that preserves both attitude and degree."
      ]
    },
    {
      "id": "tone-4",
      "passage": "Researchers once dismissed the pattern as random. New evidence, however, suggests that the pattern may encode a seasonal signal.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "cautiously corrective",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Tone & Attitude",
      "walkthrough": [
        "Locate evaluative language.",
        "Measure the intensity of that language.",
        "Choose the option that preserves both attitude and degree."
      ]
    },
    {
      "id": "tone-5",
      "passage": "The memoir’s humor softens its account of hardship without trivializing the events described.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "appreciative and nuanced",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Tone & Attitude",
      "walkthrough": [
        "Locate evaluative language.",
        "Measure the intensity of that language.",
        "Choose the option that preserves both attitude and degree."
      ]
    },
    {
      "id": "tone-6",
      "passage": "The proposal promises efficiency, but its projected savings depend on assumptions that have not been independently tested.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "guarded skepticism",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude",
      "walkthrough": [
        "Locate evaluative language.",
        "Measure the intensity of that language.",
        "Choose the option that preserves both attitude and degree."
      ]
    },
    {
      "id": "tone-7",
      "passage": "Far from being a minor curiosity, the archive reveals a network of collaboration that reshapes our understanding of the period.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "enthusiastic reassessment",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude",
      "walkthrough": [
        "Locate evaluative language.",
        "Measure the intensity of that language.",
        "Choose the option that preserves both attitude and degree."
      ]
    },
    {
      "id": "tone-8",
      "passage": "The author catalogs each error with such relish that the review sometimes seems more interested in ridicule than evaluation.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "disapproving",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude",
      "walkthrough": [
        "Locate evaluative language.",
        "Measure the intensity of that language.",
        "Choose the option that preserves both attitude and degree."
      ]
    },
    {
      "id": "tone-9",
      "passage": "The experiment’s result is intriguing, though the small sample prevents any firm conclusion.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "cautiously interested",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude",
      "walkthrough": [
        "Locate evaluative language.",
        "Measure the intensity of that language.",
        "Choose the option that preserves both attitude and degree."
      ]
    },
    {
      "id": "tone-10",
      "passage": "By treating disagreement as evidence of confusion, the essay avoids confronting the strongest objections to its thesis.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "critical",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude",
      "walkthrough": [
        "Locate evaluative language.",
        "Measure the intensity of that language.",
        "Choose the option that preserves both attitude and degree."
      ]
    }
  ],
  "questions": [
    {
      "id": "tone-11",
      "passage": "Although the restoration is not flawless, its careful use of surviving records makes it a remarkably persuasive reconstruction.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "measured approval",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-12",
      "passage": "The committee’s report presents the new policy as inevitable, yet it gives surprisingly little attention to the communities most affected.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "skeptical criticism",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-13",
      "passage": "The tiny device, assembled from inexpensive parts, demonstrates how elegant engineering can emerge from severe constraints.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "admiring",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-14",
      "passage": "Researchers once dismissed the pattern as random. New evidence, however, suggests that the pattern may encode a seasonal signal.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "cautiously corrective",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-15",
      "passage": "The memoir’s humor softens its account of hardship without trivializing the events described.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "appreciative and nuanced",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-16",
      "passage": "The proposal promises efficiency, but its projected savings depend on assumptions that have not been independently tested.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "guarded skepticism",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-17",
      "passage": "Far from being a minor curiosity, the archive reveals a network of collaboration that reshapes our understanding of the period.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "enthusiastic reassessment",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-18",
      "passage": "The author catalogs each error with such relish that the review sometimes seems more interested in ridicule than evaluation.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "disapproving",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-19",
      "passage": "The experiment’s result is intriguing, though the small sample prevents any firm conclusion.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "cautiously interested",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-20",
      "passage": "By treating disagreement as evidence of confusion, the essay avoids confronting the strongest objections to its thesis.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "critical",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-21",
      "passage": "Although the restoration is not flawless, its careful use of surviving records makes it a remarkably persuasive reconstruction.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "measured approval",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-22",
      "passage": "The committee’s report presents the new policy as inevitable, yet it gives surprisingly little attention to the communities most affected.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "skeptical criticism",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-23",
      "passage": "The tiny device, assembled from inexpensive parts, demonstrates how elegant engineering can emerge from severe constraints.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "admiring",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-24",
      "passage": "Researchers once dismissed the pattern as random. New evidence, however, suggests that the pattern may encode a seasonal signal.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "cautiously corrective",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-25",
      "passage": "The memoir’s humor softens its account of hardship without trivializing the events described.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "appreciative and nuanced",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-26",
      "passage": "The proposal promises efficiency, but its projected savings depend on assumptions that have not been independently tested.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "guarded skepticism",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-27",
      "passage": "Far from being a minor curiosity, the archive reveals a network of collaboration that reshapes our understanding of the period.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "enthusiastic reassessment",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-28",
      "passage": "The author catalogs each error with such relish that the review sometimes seems more interested in ridicule than evaluation.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "disapproving",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-29",
      "passage": "The experiment’s result is intriguing, though the small sample prevents any firm conclusion.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "cautiously interested",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Tone & Attitude"
    },
    {
      "id": "tone-30",
      "passage": "By treating disagreement as evidence of confusion, the essay avoids confronting the strongest objections to its thesis.",
      "prompt": "Which choice best describes the author’s tone?",
      "choices": [
        {
          "text": "critical",
          "rationale": "Correct: This wording captures both the attitude and its degree."
        },
        {
          "text": "unqualified enthusiasm",
          "rationale": "Not best: This is too strong or misses the qualification."
        },
        {
          "text": "neutral detachment",
          "rationale": "Not best: The passage contains evaluative language."
        },
        {
          "text": "open hostility",
          "rationale": "Not best: The criticism is not this emotionally extreme."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Tone & Attitude"
    }
  ],
  "flashcards": [
    {
      "front": "What is tone?",
      "back": "The author’s attitude toward the subject or audience."
    },
    {
      "front": "What is a mixed tone?",
      "back": "A stance combining two compatible attitudes, such as cautious optimism."
    },
    {
      "front": "What signals qualification?",
      "back": "Words such as although, yet, however, and despite."
    },
    {
      "front": "Why avoid extreme labels?",
      "back": "SAT passages often express measured rather than absolute attitudes."
    },
    {
      "front": "What is neutral tone?",
      "back": "A largely factual presentation with minimal evaluation."
    },
    {
      "front": "What should you identify first?",
      "back": "The exact tone & attitude task named in the question stem."
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
      "front": "Tone & Attitude checkpoint 11",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 12",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 13",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 14",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 15",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 16",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 17",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 18",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 19",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 20",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 21",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 22",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 23",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 24",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 25",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 26",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 27",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 28",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 29",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Tone & Attitude checkpoint 30",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    }
  ],
  "nextCourseId": "organization"
};
