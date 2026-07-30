import type { Course } from "@/content/courses";

export const course: Course = {
  "id": "linear-inequalities",
  "title": "Linear Inequalities",
  "subtitle": "Solve constraints, intervals, and feasible regions.",
  "description": "Translate limits such as at least, at most, and no more than into algebra.",
  "estimatedMinutes": 55,
  "difficulty": "Medium",
  "objectives": [
    "Solve and graph one-variable inequalities",
    "Reverse the sign when dividing by a negative",
    "Model upper and lower constraints",
    "Test points in two-variable inequalities"
  ],
  "concepts": [
    {
      "title": "Inequality language",
      "body": "At least means \u2265; at most means \u2264; greater than and less than are strict."
    },
    {
      "title": "Negative-operation rule",
      "body": "Multiplying or dividing both sides by a negative reverses the comparison."
    },
    {
      "title": "Compound inequalities",
      "body": "AND describes an interval; OR describes two outside regions."
    },
    {
      "title": "Feasible solutions",
      "body": "Context may require integers, nonnegative values, or other restrictions."
    }
  ],
  "strategy": [
    {
      "title": "Translate",
      "body": "Convert the verbal constraint into a symbol."
    },
    {
      "title": "Solve",
      "body": "Use equation-like steps while tracking sign reversals."
    },
    {
      "title": "Restrict",
      "body": "Apply domain and context limits."
    },
    {
      "title": "Test",
      "body": "Check a value from the proposed solution set."
    },
    {
      "title": "Represent",
      "body": "Use interval, graph, or contextual language as requested."
    }
  ],
  "traps": [
    {
      "title": "No sign reversal",
      "body": "The inequality direction is left unchanged after division by a negative."
    },
    {
      "title": "Strict/non-strict swap",
      "body": "A boundary is incorrectly included or excluded."
    },
    {
      "title": "Decimal-only answer",
      "body": "A discrete context requires rounding down to a whole number."
    },
    {
      "title": "AND/OR confusion",
      "body": "An interval is replaced by two rays, or vice versa."
    }
  ],
  "coachTips": [
    "Circle negative division steps so you remember to reverse the sign.",
    "Test a simple value to confirm the direction.",
    "\u201cAt most\u201d includes the boundary."
  ],
  "workedExamples": [
    {
      "id": "linear-inequalities-ex-1",
      "passage": "Solve 4x - 5 > 11.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x > 4",
          "rationale": "Add 5 and divide by 4."
        },
        {
          "text": "x < 4",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x > 1.5",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x < 16",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "One-variable inequality",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-inequalities-ex-2",
      "passage": "Solve -3x \u2264 12.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x \u2265 -4",
          "rationale": "Dividing by a negative reverses the inequality sign."
        },
        {
          "text": "x \u2264 -4",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x \u2265 4",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x \u2264 4",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Negative coefficient",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-inequalities-ex-3",
      "passage": "A student can spend at most $45 on notebooks costing $6 each after paying a $9 fee. What is the greatest number of notebooks?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "6",
          "rationale": "Use 9 + 6n \u2264 45 and apply the whole-number constraint."
        },
        {
          "text": "5",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "7",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "9",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Context inequality",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-inequalities-ex-4",
      "passage": "Which point satisfies y > 2x - 1?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(1, 3)",
          "rationale": "Substitute each point and test the inequality."
        },
        {
          "text": "(1, 1)",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "(2, 3)",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "(0, -2)",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Two-variable inequality",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-inequalities-ex-5",
      "passage": "For what values of x is |x - 5| < 3?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "2 < x < 8",
          "rationale": "Distance from 5 is less than 3, producing a compound inequality."
        },
        {
          "text": "x < 2 or x > 8",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "-3 < x < 3",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x > 8",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Absolute value inequality",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-inequalities-ex-6",
      "passage": "Solve 4x - 5 > 11.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x > 4",
          "rationale": "Add 5 and divide by 4."
        },
        {
          "text": "x < 4",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x > 1.5",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x < 16",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "One-variable inequality",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-inequalities-ex-7",
      "passage": "Solve -3x \u2264 12.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x \u2265 -4",
          "rationale": "Dividing by a negative reverses the inequality sign."
        },
        {
          "text": "x \u2264 -4",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x \u2265 4",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x \u2264 4",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Negative coefficient",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-inequalities-ex-8",
      "passage": "A student can spend at most $45 on notebooks costing $6 each after paying a $9 fee. What is the greatest number of notebooks?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "6",
          "rationale": "Use 9 + 6n \u2264 45 and apply the whole-number constraint."
        },
        {
          "text": "5",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "7",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "9",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Context inequality",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-inequalities-ex-9",
      "passage": "Which point satisfies y > 2x - 1?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(1, 3)",
          "rationale": "Substitute each point and test the inequality."
        },
        {
          "text": "(1, 1)",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "(2, 3)",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "(0, -2)",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Two-variable inequality",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-inequalities-ex-10",
      "passage": "For what values of x is |x - 5| < 3?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "2 < x < 8",
          "rationale": "Distance from 5 is less than 3, producing a compound inequality."
        },
        {
          "text": "x < 2 or x > 8",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "-3 < x < 3",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x > 8",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Absolute value inequality",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    }
  ],
  "questions": [
    {
      "id": "linear-inequalities-q-1",
      "passage": "A student can spend at most $45 on notebooks costing $6 each after paying a $9 fee. What is the greatest number of notebooks?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "6",
          "rationale": "Use 9 + 6n \u2264 45 and apply the whole-number constraint."
        },
        {
          "text": "5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "7",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "9",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Context inequality"
    },
    {
      "id": "linear-inequalities-q-2",
      "passage": "Which point satisfies y > 2x - 1?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "(1, 3)",
          "rationale": "Substitute each point and test the inequality."
        },
        {
          "text": "(1, 1)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(2, 3)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(0, -2)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Two-variable inequality"
    },
    {
      "id": "linear-inequalities-q-3",
      "passage": "For what values of x is |x - 5| < 3?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "2 < x < 8",
          "rationale": "Distance from 5 is less than 3, producing a compound inequality."
        },
        {
          "text": "x < 2 or x > 8",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "-3 < x < 3",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x > 8",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Absolute value inequality"
    },
    {
      "id": "linear-inequalities-q-4",
      "passage": "Solve 4x - 5 > 11.",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x > 4",
          "rationale": "Add 5 and divide by 4."
        },
        {
          "text": "x < 4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x > 1.5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x < 16",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "One-variable inequality"
    },
    {
      "id": "linear-inequalities-q-5",
      "passage": "Solve -3x \u2264 12.",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x \u2265 -4",
          "rationale": "Dividing by a negative reverses the inequality sign."
        },
        {
          "text": "x \u2264 -4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x \u2265 4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x \u2264 4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Negative coefficient"
    },
    {
      "id": "linear-inequalities-q-6",
      "passage": "A student can spend at most $45 on notebooks costing $6 each after paying a $9 fee. What is the greatest number of notebooks?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "6",
          "rationale": "Use 9 + 6n \u2264 45 and apply the whole-number constraint."
        },
        {
          "text": "5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "7",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "9",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Context inequality"
    },
    {
      "id": "linear-inequalities-q-7",
      "passage": "Which point satisfies y > 2x - 1?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "(1, 3)",
          "rationale": "Substitute each point and test the inequality."
        },
        {
          "text": "(1, 1)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(2, 3)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(0, -2)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Two-variable inequality"
    },
    {
      "id": "linear-inequalities-q-8",
      "passage": "For what values of x is |x - 5| < 3?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "2 < x < 8",
          "rationale": "Distance from 5 is less than 3, producing a compound inequality."
        },
        {
          "text": "x < 2 or x > 8",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "-3 < x < 3",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x > 8",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Absolute value inequality"
    },
    {
      "id": "linear-inequalities-q-9",
      "passage": "Solve 4x - 5 > 11.",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x > 4",
          "rationale": "Add 5 and divide by 4."
        },
        {
          "text": "x < 4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x > 1.5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x < 16",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "One-variable inequality"
    },
    {
      "id": "linear-inequalities-q-10",
      "passage": "Solve -3x \u2264 12.",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x \u2265 -4",
          "rationale": "Dividing by a negative reverses the inequality sign."
        },
        {
          "text": "x \u2264 -4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x \u2265 4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x \u2264 4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Negative coefficient"
    },
    {
      "id": "linear-inequalities-q-11",
      "passage": "A student can spend at most $45 on notebooks costing $6 each after paying a $9 fee. What is the greatest number of notebooks?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "6",
          "rationale": "Use 9 + 6n \u2264 45 and apply the whole-number constraint."
        },
        {
          "text": "5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "7",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "9",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Context inequality"
    },
    {
      "id": "linear-inequalities-q-12",
      "passage": "Which point satisfies y > 2x - 1?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "(1, 3)",
          "rationale": "Substitute each point and test the inequality."
        },
        {
          "text": "(1, 1)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(2, 3)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(0, -2)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Two-variable inequality"
    },
    {
      "id": "linear-inequalities-q-13",
      "passage": "For what values of x is |x - 5| < 3?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "2 < x < 8",
          "rationale": "Distance from 5 is less than 3, producing a compound inequality."
        },
        {
          "text": "x < 2 or x > 8",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "-3 < x < 3",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x > 8",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Absolute value inequality"
    },
    {
      "id": "linear-inequalities-q-14",
      "passage": "Solve 4x - 5 > 11.",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x > 4",
          "rationale": "Add 5 and divide by 4."
        },
        {
          "text": "x < 4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x > 1.5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x < 16",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "One-variable inequality"
    },
    {
      "id": "linear-inequalities-q-15",
      "passage": "Solve -3x \u2264 12.",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x \u2265 -4",
          "rationale": "Dividing by a negative reverses the inequality sign."
        },
        {
          "text": "x \u2264 -4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x \u2265 4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x \u2264 4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Negative coefficient"
    },
    {
      "id": "linear-inequalities-q-16",
      "passage": "A student can spend at most $45 on notebooks costing $6 each after paying a $9 fee. What is the greatest number of notebooks?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "6",
          "rationale": "Use 9 + 6n \u2264 45 and apply the whole-number constraint."
        },
        {
          "text": "5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "7",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "9",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Context inequality"
    },
    {
      "id": "linear-inequalities-q-17",
      "passage": "Which point satisfies y > 2x - 1?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "(1, 3)",
          "rationale": "Substitute each point and test the inequality."
        },
        {
          "text": "(1, 1)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(2, 3)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(0, -2)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Two-variable inequality"
    },
    {
      "id": "linear-inequalities-q-18",
      "passage": "For what values of x is |x - 5| < 3?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "2 < x < 8",
          "rationale": "Distance from 5 is less than 3, producing a compound inequality."
        },
        {
          "text": "x < 2 or x > 8",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "-3 < x < 3",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x > 8",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Absolute value inequality"
    },
    {
      "id": "linear-inequalities-q-19",
      "passage": "Solve 4x - 5 > 11.",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x > 4",
          "rationale": "Add 5 and divide by 4."
        },
        {
          "text": "x < 4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x > 1.5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x < 16",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "One-variable inequality"
    },
    {
      "id": "linear-inequalities-q-20",
      "passage": "Solve -3x \u2264 12.",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x \u2265 -4",
          "rationale": "Dividing by a negative reverses the inequality sign."
        },
        {
          "text": "x \u2264 -4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x \u2265 4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x \u2264 4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Negative coefficient"
    }
  ],
  "flashcards": [
    {
      "front": "Inequality language",
      "back": "At least means \u2265; at most means \u2264; greater than and less than are strict."
    },
    {
      "front": "Negative-operation rule",
      "back": "Multiplying or dividing both sides by a negative reverses the comparison."
    },
    {
      "front": "Compound inequalities",
      "back": "AND describes an interval; OR describes two outside regions."
    },
    {
      "front": "Feasible solutions",
      "back": "Context may require integers, nonnegative values, or other restrictions."
    },
    {
      "front": "Translate",
      "back": "Convert the verbal constraint into a symbol."
    },
    {
      "front": "Solve",
      "back": "Use equation-like steps while tracking sign reversals."
    },
    {
      "front": "Restrict",
      "back": "Apply domain and context limits."
    },
    {
      "front": "Test",
      "back": "Check a value from the proposed solution set."
    },
    {
      "front": "Represent",
      "back": "Use interval, graph, or contextual language as requested."
    },
    {
      "front": "Inequality language Review 10",
      "back": "At least means \u2265; at most means \u2264; greater than and less than are strict."
    },
    {
      "front": "Negative-operation rule Review 11",
      "back": "Multiplying or dividing both sides by a negative reverses the comparison."
    },
    {
      "front": "Compound inequalities Review 12",
      "back": "AND describes an interval; OR describes two outside regions."
    },
    {
      "front": "Feasible solutions Review 13",
      "back": "Context may require integers, nonnegative values, or other restrictions."
    },
    {
      "front": "Translate Review 14",
      "back": "Convert the verbal constraint into a symbol."
    },
    {
      "front": "Solve Review 15",
      "back": "Use equation-like steps while tracking sign reversals."
    },
    {
      "front": "Restrict Review 16",
      "back": "Apply domain and context limits."
    },
    {
      "front": "Test Review 17",
      "back": "Check a value from the proposed solution set."
    },
    {
      "front": "Represent Review 18",
      "back": "Use interval, graph, or contextual language as requested."
    },
    {
      "front": "Inequality language Review 19",
      "back": "At least means \u2265; at most means \u2264; greater than and less than are strict."
    },
    {
      "front": "Negative-operation rule Review 20",
      "back": "Multiplying or dividing both sides by a negative reverses the comparison."
    },
    {
      "front": "Compound inequalities Review 21",
      "back": "AND describes an interval; OR describes two outside regions."
    },
    {
      "front": "Feasible solutions Review 22",
      "back": "Context may require integers, nonnegative values, or other restrictions."
    },
    {
      "front": "Translate Review 23",
      "back": "Convert the verbal constraint into a symbol."
    },
    {
      "front": "Solve Review 24",
      "back": "Use equation-like steps while tracking sign reversals."
    },
    {
      "front": "Restrict Review 25",
      "back": "Apply domain and context limits."
    },
    {
      "front": "Test Review 26",
      "back": "Check a value from the proposed solution set."
    },
    {
      "front": "Represent Review 27",
      "back": "Use interval, graph, or contextual language as requested."
    },
    {
      "front": "Inequality language Review 28",
      "back": "At least means \u2265; at most means \u2264; greater than and less than are strict."
    },
    {
      "front": "Negative-operation rule Review 29",
      "back": "Multiplying or dividing both sides by a negative reverses the comparison."
    },
    {
      "front": "Compound inequalities Review 30",
      "back": "AND describes an interval; OR describes two outside regions."
    }
  ],
  "nextCourseId": "functions-nonlinear"
} as Course;
