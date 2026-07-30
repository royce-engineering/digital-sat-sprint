import type { Course } from "./types";

export const readingWorkflowCourse: Course = {
  "id": "reading-workflow",
  "title": "Complete Reading Workflow",
  "subtitle": "Combine every reading skill into a fast, repeatable test-day system.",
  "description": "Practice question-type recognition, targeted reading, evidence checks, elimination, pacing, and review across the full Reading and Writing section.",
  "estimatedMinutes": 70,
  "difficulty": "Medium",
  "objectives": [
    "Recognize question type within seconds",
    "Use the correct strategy without overreading",
    "Balance accuracy with pacing",
    "Apply a final evidence and scope check",
    "Recover efficiently when stuck"
  ],
  "concepts": [
    {
      "title": "Stem first",
      "body": "Know the task before deciding what to reread."
    },
    {
      "title": "Targeted evidence",
      "body": "Return only to the sentence, paragraph, or notes relevant to the question."
    },
    {
      "title": "Predict then compare",
      "body": "Form a rough answer to reduce distractor influence."
    },
    {
      "title": "Eliminate by rule",
      "body": "Use unsupported, too strong, too broad, and wrong function as repeatable filters."
    },
    {
      "title": "Time is a resource",
      "body": "Do not spend disproportionate time defending one uncertain question."
    }
  ],
  "strategy": [
    {
      "title": "Classify",
      "body": "Name the question type."
    },
    {
      "title": "Locate",
      "body": "Identify the relevant evidence zone."
    },
    {
      "title": "Predict",
      "body": "State the needed answer in plain language."
    },
    {
      "title": "Eliminate",
      "body": "Apply scope, degree, evidence, and function checks."
    },
    {
      "title": "Commit and move",
      "body": "Select the best-supported answer and protect time for later questions."
    }
  ],
  "traps": [
    {
      "title": "Passive rereading",
      "body": "Reading repeatedly without knowing what evidence is needed."
    },
    {
      "title": "Answer-choice drift",
      "body": "Letting attractive wording replace the actual question."
    },
    {
      "title": "Time sink",
      "body": "Spending several minutes trying to make one choice perfect."
    },
    {
      "title": "Skill mismatch",
      "body": "Using main-idea logic for a function question or tone logic for an inference question."
    }
  ],
  "coachTips": [
    "The workflow is not one strategy; it is a decision system for choosing the right strategy.",
    "When stuck, return to the stem and classify the task again.",
    "A 15-second final check should ask: supported, precise, complete, and relevant?"
  ],
  "workedExamples": [
    {
      "id": "workflow-1",
      "passage": "A question asks for the main idea of a passage with one paragraph of background and one paragraph presenting a new finding.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Identify the passage’s final controlling claim and treat the background as support.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow",
      "walkthrough": [
        "Classify the question type.",
        "Select the matching strategy.",
        "Apply one evidence check and one trap check before committing."
      ]
    },
    {
      "id": "workflow-2",
      "passage": "An inference answer sounds plausible but depends on a fact not stated in the passage.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Eliminate it because SAT inferences must be text-supported.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow",
      "walkthrough": [
        "Classify the question type.",
        "Select the matching strategy.",
        "Apply one evidence check and one trap check before committing."
      ]
    },
    {
      "id": "workflow-3",
      "passage": "Two evidence choices support part of a claim, but only one supports every part.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Choose the option with complete claim-to-evidence coverage.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow",
      "walkthrough": [
        "Classify the question type.",
        "Select the matching strategy.",
        "Apply one evidence check and one trap check before committing."
      ]
    },
    {
      "id": "workflow-4",
      "passage": "A vocabulary question uses a familiar word in an unfamiliar academic sense.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Substitute each option into the sentence and use surrounding logic.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow",
      "walkthrough": [
        "Classify the question type.",
        "Select the matching strategy.",
        "Apply one evidence check and one trap check before committing."
      ]
    },
    {
      "id": "workflow-5",
      "passage": "A purpose question asks why the author mentions an earlier failed study.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Describe the detail’s function in the argument, such as motivating a revised method.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow",
      "walkthrough": [
        "Classify the question type.",
        "Select the matching strategy.",
        "Apply one evidence check and one trap check before committing."
      ]
    },
    {
      "id": "workflow-6",
      "passage": "A tone choice says “furious,” but the passage uses “may be concerning.”",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Reject the choice because its intensity is too strong.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow",
      "walkthrough": [
        "Classify the question type.",
        "Select the matching strategy.",
        "Apply one evidence check and one trap check before committing."
      ]
    },
    {
      "id": "workflow-7",
      "passage": "A structure question describes only the first paragraph.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Reject it and map the full passage in sequence.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow",
      "walkthrough": [
        "Classify the question type.",
        "Select the matching strategy.",
        "Apply one evidence check and one trap check before committing."
      ]
    },
    {
      "id": "workflow-8",
      "passage": "A cross-text answer accurately describes Text 2 but says nothing about Text 1.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Reject it because relationship questions must represent both texts.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow",
      "walkthrough": [
        "Classify the question type.",
        "Select the matching strategy.",
        "Apply one evidence check and one trap check before committing."
      ]
    },
    {
      "id": "workflow-9",
      "passage": "A synthesis answer includes every note but ignores the requested comparison.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Choose a selective answer organized around the comparison goal.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow",
      "walkthrough": [
        "Classify the question type.",
        "Select the matching strategy.",
        "Apply one evidence check and one trap check before committing."
      ]
    },
    {
      "id": "workflow-10",
      "passage": "With 90 seconds remaining, two questions are unanswered.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Use a rapid evidence check, eliminate unsupported extremes, answer both, and flag uncertainty mentally rather than leaving blanks.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow",
      "walkthrough": [
        "Classify the question type.",
        "Select the matching strategy.",
        "Apply one evidence check and one trap check before committing."
      ]
    }
  ],
  "questions": [
    {
      "id": "workflow-11",
      "passage": "A question asks for the main idea of a passage with one paragraph of background and one paragraph presenting a new finding.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Identify the passage’s final controlling claim and treat the background as support.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-12",
      "passage": "An inference answer sounds plausible but depends on a fact not stated in the passage.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Eliminate it because SAT inferences must be text-supported.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-13",
      "passage": "Two evidence choices support part of a claim, but only one supports every part.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Choose the option with complete claim-to-evidence coverage.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-14",
      "passage": "A vocabulary question uses a familiar word in an unfamiliar academic sense.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Substitute each option into the sentence and use surrounding logic.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-15",
      "passage": "A purpose question asks why the author mentions an earlier failed study.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Describe the detail’s function in the argument, such as motivating a revised method.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-16",
      "passage": "A tone choice says “furious,” but the passage uses “may be concerning.”",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Reject the choice because its intensity is too strong.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-17",
      "passage": "A structure question describes only the first paragraph.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Reject it and map the full passage in sequence.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-18",
      "passage": "A cross-text answer accurately describes Text 2 but says nothing about Text 1.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Reject it because relationship questions must represent both texts.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-19",
      "passage": "A synthesis answer includes every note but ignores the requested comparison.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Choose a selective answer organized around the comparison goal.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-20",
      "passage": "With 90 seconds remaining, two questions are unanswered.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Use a rapid evidence check, eliminate unsupported extremes, answer both, and flag uncertainty mentally rather than leaving blanks.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-21",
      "passage": "A question asks for the main idea of a passage with one paragraph of background and one paragraph presenting a new finding.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Identify the passage’s final controlling claim and treat the background as support.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-22",
      "passage": "An inference answer sounds plausible but depends on a fact not stated in the passage.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Eliminate it because SAT inferences must be text-supported.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-23",
      "passage": "Two evidence choices support part of a claim, but only one supports every part.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Choose the option with complete claim-to-evidence coverage.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-24",
      "passage": "A vocabulary question uses a familiar word in an unfamiliar academic sense.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Substitute each option into the sentence and use surrounding logic.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-25",
      "passage": "A purpose question asks why the author mentions an earlier failed study.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Describe the detail’s function in the argument, such as motivating a revised method.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-26",
      "passage": "A tone choice says “furious,” but the passage uses “may be concerning.”",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Reject the choice because its intensity is too strong.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-27",
      "passage": "A structure question describes only the first paragraph.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Reject it and map the full passage in sequence.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-28",
      "passage": "A cross-text answer accurately describes Text 2 but says nothing about Text 1.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Reject it because relationship questions must represent both texts.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-29",
      "passage": "A synthesis answer includes every note but ignores the requested comparison.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Choose a selective answer organized around the comparison goal.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Complete Reading Workflow"
    },
    {
      "id": "workflow-30",
      "passage": "With 90 seconds remaining, two questions are unanswered.",
      "prompt": "What is the best next step?",
      "choices": [
        {
          "text": "Use a rapid evidence check, eliminate unsupported extremes, answer both, and flag uncertainty mentally rather than leaving blanks.",
          "rationale": "Correct: This applies the correct skill-specific process efficiently."
        },
        {
          "text": "Choose the longest answer because it is likely more complete.",
          "rationale": "Not best: Length is not evidence of accuracy."
        },
        {
          "text": "Use outside knowledge to resolve uncertainty.",
          "rationale": "Not best: Digital SAT Reading answers must be grounded in the provided text or notes."
        },
        {
          "text": "Reread the entire passage repeatedly without a specific purpose.",
          "rationale": "Not best: Efficient rereading should target the evidence needed for the question."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Complete Reading Workflow"
    }
  ],
  "flashcards": [
    {
      "front": "What are the five workflow steps?",
      "back": "Classify, locate, predict, eliminate, commit."
    },
    {
      "front": "What is an evidence zone?",
      "back": "The smallest part of the text needed to answer the question."
    },
    {
      "front": "What is answer-choice drift?",
      "back": "Allowing polished options to change your understanding of the task."
    },
    {
      "front": "What four questions guide the final check?",
      "back": "Is it supported, precise, complete, and relevant?"
    },
    {
      "front": "What should you do when stuck?",
      "back": "Reclassify the question, target the evidence, eliminate by rule, and move on."
    },
    {
      "front": "What should you identify first?",
      "back": "The exact complete reading workflow task named in the question stem."
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
      "front": "Complete Reading Workflow checkpoint 11",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 12",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 13",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 14",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 15",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 16",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 17",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 18",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 19",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 20",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 21",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 22",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 23",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 24",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 25",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 26",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 27",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 28",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 29",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    },
    {
      "front": "Complete Reading Workflow checkpoint 30",
      "back": "Use evidence, compare scope, and verify the answer against the whole relevant passage."
    }
  ]
};
